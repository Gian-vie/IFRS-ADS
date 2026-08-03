// server.js
//
// Este servidor tem uma única função: ajudar as câmeras a se "encontrarem".
// Ele NÃO transmite vídeo. O vídeo viaja direto de um navegador para o outro
// (isso se chama WebRTC). O servidor só troca mensagens de "apresentação"
// entre os participantes (isso se chama sinalização).

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve os arquivos da pasta "public" (HTML, CSS, JS do navegador)
app.use(express.static(path.join(__dirname, 'public')));

// Guarda o nome de cada usuário conectado: { idDoSocket: "nome" }
const usuarios = {};

io.on('connection', (socket) => {
  console.log('Novo usuário conectado:', socket.id);

  // O navegador avisa que o usuário escolheu um nome e quer entrar
  socket.on('entrar', (nome) => {
    usuarios[socket.id] = nome;

    // Manda para o recém-chegado a lista de quem já está na sala
    const outrosUsuarios = Object.keys(usuarios)
      .filter((id) => id !== socket.id)
      .map((id) => ({ id, nome: usuarios[id] }));
    socket.emit('usuarios-existentes', outrosUsuarios);

    // Avisa todo mundo que já estava na sala sobre o novo usuário
    socket.broadcast.emit('novo-usuario', { id: socket.id, nome });
  });

  // Repassa mensagens de sinalização do WebRTC (convite, resposta, etc.)
  // O servidor só entrega a mensagem para o destinatário certo, sem
  // entender o conteúdo dela.
  socket.on('sinal', ({ para, sinal }) => {
    io.to(para).emit('sinal', { de: socket.id, sinal });
  });

  // Quando alguém fecha a aba ou perde a conexão
  socket.on('disconnect', () => {
    delete usuarios[socket.id];
    io.emit('usuario-saiu', socket.id);
    console.log('Usuário desconectado:', socket.id);
  });
});

const PORTA = process.env.PORT || 3000;
server.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
