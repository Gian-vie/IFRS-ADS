// client.js
//
// Aqui acontece a mágica do WebRTC: cada participante conecta diretamente
// com todos os outros (isso se chama topologia "mesh" / "malha").
// O servidor Node.js só ajuda no início, entregando as mensagens de
// "apresentação" (sinalização) entre os navegadores.

// Servidor público de STUN do Google. Ele só ajuda os navegadores a
// descobrirem seu próprio endereço na internet, para poderem se conectar.
const CONFIGURACAO_ICE = {
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
};

// ---------- Elementos da página ----------
const telaNome = document.getElementById('tela-nome');
const telaChamada = document.getElementById('tela-chamada');
const inputNome = document.getElementById('input-nome');
const btnEntrar = document.getElementById('btn-entrar');
const mensagemErro = document.getElementById('mensagem-erro');
const gradeVideos = document.getElementById('grade-videos');
const btnCamera = document.getElementById('btn-camera');

// ---------- Estado da aplicação ----------
let socket;
let meuStream;         // meu vídeo/áudio (MediaStream)
let meuNome = '';
const conexoes = {};   // { idDoUsuario: RTCPeerConnection }
const nomesConhecidos = {}; // { idDoUsuario: "nome" } de quem ainda não conectou

// ---------- Passo 1: escolher nome e entrar ----------

btnEntrar.addEventListener('click', entrarNaChamada);
inputNome.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') entrarNaChamada();
});

async function entrarNaChamada() {
  const nome = inputNome.value.trim();
  if (!nome) {
    mensagemErro.textContent = 'Digite um nome para continuar.';
    return;
  }
  meuNome = nome;

  try {
    // Pede permissão de câmera e microfone ao navegador
    meuStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
  } catch (erro) {
    mensagemErro.textContent = 'Não foi possível acessar a câmera/microfone.';
    console.error(erro);
    return;
  }

  // Troca de tela
  telaNome.classList.add('escondido');
  telaChamada.classList.remove('escondido');

  // Mostra meu próprio vídeo na grade
  criarTile('eu', meuNome, meuStream, true);

  conectarAoServidor();
}

// ---------- Passo 2: conectar ao servidor de sinalização ----------

function conectarAoServidor() {
  socket = io();

  // Assim que conectar, avisa meu nome ao servidor
  socket.on('connect', () => {
    socket.emit('entrar', meuNome);
  });

  // O servidor me manda quem já está na sala.
  // Eu (o recém-chegado) inicio a conexão com cada um deles.
  socket.on('usuarios-existentes', (usuarios) => {
    usuarios.forEach(({ id, nome }) => {
      nomesConhecidos[id] = nome;
      criarConexao(id, true); // true = eu inicio a chamada
    });
  });

  // Alguém novo entrou na sala. Eu só guardo o nome dele por enquanto;
  // a conexão será criada quando o convite (offer) dele chegar.
  socket.on('novo-usuario', ({ id, nome }) => {
    nomesConhecidos[id] = nome;
  });

  // Mensagens de sinalização (convite, resposta, endereço de rede)
  socket.on('sinal', async ({ de, sinal }) => {
    // Se ainda não existe conexão com essa pessoa, cria uma agora
    // (ela é quem está me chamando)
    if (!conexoes[de]) {
      criarConexao(de, false); // false = quem chama é o outro lado
    }
    const pc = conexoes[de];

    if (sinal.type === 'offer') {
      await pc.setRemoteDescription(new RTCSessionDescription(sinal));
      const resposta = await pc.createAnswer();
      await pc.setLocalDescription(resposta);
      socket.emit('sinal', { para: de, sinal: pc.localDescription });
    } else if (sinal.type === 'answer') {
      await pc.setRemoteDescription(new RTCSessionDescription(sinal));
    } else if (sinal.candidate) {
      try {
        await pc.addIceCandidate(sinal.candidate);
      } catch (erro) {
        console.error('Erro ao adicionar candidato ICE:', erro);
      }
    }
  });

  // Alguém saiu da chamada
  socket.on('usuario-saiu', (id) => {
    if (conexoes[id]) {
      conexoes[id].close();
      delete conexoes[id];
    }
    removerTile(id);
    delete nomesConhecidos[id];
  });
}

// ---------- Passo 3: criar a conexão direta (WebRTC) com um usuário ----------

function criarConexao(idRemoto, souEuQueChamo) {
  const pc = new RTCPeerConnection(CONFIGURACAO_ICE);
  conexoes[idRemoto] = pc;

  // Envia minhas próprias câmera/microfone para o outro lado
  meuStream.getTracks().forEach((track) => {
    pc.addTrack(track, meuStream);
  });

  // Sempre que o navegador encontra um novo "caminho de rede" possível,
  // ele avisa o outro lado através do servidor
  pc.onicecandidate = (evento) => {
    if (evento.candidate) {
      socket.emit('sinal', {
        para: idRemoto,
        sinal: { candidate: evento.candidate },
      });
    }
  };

  // Quando o vídeo do outro participante chega, mostramos na grade
  pc.ontrack = (evento) => {
    const nome = nomesConhecidos[idRemoto] || 'Convidado';
    criarTile(idRemoto, nome, evento.streams[0], false);
  };

  // Se eu sou quem está chamando, crio e envio o convite (offer)
  if (souEuQueChamo) {
    pc.onnegotiationneeded = async () => {
      const oferta = await pc.createOffer();
      await pc.setLocalDescription(oferta);
      socket.emit('sinal', { para: idRemoto, sinal: pc.localDescription });
    };
  }

  return pc;
}

// ---------- Grade de vídeos ----------

function criarTile(id, nome, stream, ehLocal) {
  // Se já existe um tile para esse id, só atualiza o vídeo
  let tile = document.getElementById('tile-' + id);
  if (!tile) {
    tile = document.createElement('div');
    tile.id = 'tile-' + id;
    tile.className = 'video-tile' + (ehLocal ? ' local' : '');
    tile.dataset.inicial = nome.charAt(0).toUpperCase();

    const video = document.createElement('video');
    video.autoplay = true;
    video.playsInline = true;
    if (ehLocal) video.muted = true; // evita escutar meu próprio áudio

    const etiqueta = document.createElement('div');
    etiqueta.className = 'nome-etiqueta';
    etiqueta.textContent = nome;

    tile.appendChild(video);
    tile.appendChild(etiqueta);
    gradeVideos.appendChild(tile);
  }
  const video = tile.querySelector('video');
  video.srcObject = stream;
}

function removerTile(id) {
  const tile = document.getElementById('tile-' + id);
  if (tile) tile.remove();
}

// ---------- Botão de ligar/desligar câmera ----------

let cameraLigada = true;

btnCamera.addEventListener('click', () => {
  cameraLigada = !cameraLigada;

  meuStream.getVideoTracks().forEach((track) => {
    track.enabled = cameraLigada;
  });

  const meuTile = document.getElementById('tile-eu');
  meuTile.classList.toggle('camera-desligada', !cameraLigada);

  btnCamera.textContent = cameraLigada ? 'Desligar câmera' : 'Ligar câmera';
  btnCamera.classList.toggle('desligada', !cameraLigada);
});
