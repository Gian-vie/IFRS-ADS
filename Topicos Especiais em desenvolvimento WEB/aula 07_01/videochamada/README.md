# Videochamada em Grade — Projeto Didático

App simples de videochamada em grupo, feito para ensinar os conceitos
básicos de **WebRTC** (vídeo peer-to-peer) e **Socket.io** (sinalização
em tempo real com Node.js).

## Como funciona (resumo para a aula)

1. **Front-end** (`public/`): HTML, CSS e JavaScript puro, sem frameworks.
2. **Back-end** (`server.js`): Node.js + Express + Socket.io.
3. O servidor **não transmite vídeo**. Ele só ajuda os participantes a se
   "apresentarem" uns aos outros (isso se chama *sinalização*). Depois
   que a apresentação acontece, o vídeo viaja **direto de um navegador
   para o outro**, sem passar pelo servidor.
4. Cada participante se conecta com **todos os outros** diretamente —
   essa topologia se chama **mesh** (malha). É simples de entender, mas
   não escala bem para muitas pessoas (funciona bem até uns 6-8
   participantes numa aula).

## Como rodar

```bash
cd videochamada
npm install
npm start
```

Depois, abra `http://localhost:3000` no navegador. Para testar com mais
"pessoas", abra várias abas ou peça para colegas na mesma rede acessarem
pelo IP do seu computador (ex: `http://192.168.0.10:3000`).

## Importante: câmera exige HTTPS (fora do localhost)

Navegadores só liberam acesso à câmera em `localhost` ou em páginas
`https://`. Isso significa que:

- Testar sozinho no seu computador (`localhost`) funciona sem problema.
- Testar em outro dispositivo na mesma rede local (pelo IP) também
  costuma funcionar em `http://`, porque a maioria dos navegadores trata
  redes locais como confiáveis — mas isso pode variar.
- Para os alunos acessarem de fora da sua rede (ex: cada um de casa),
  você vai precisar publicar o app com HTTPS. Uma forma fácil e gratuita
  para uma aula é usar um serviço como o **ngrok** (`ngrok http 3000`),
  que cria um link HTTPS temporário apontando para o seu servidor local.

## Limitação de rede (bom ponto para discutir em aula)

Esse projeto usa apenas um servidor **STUN** público (do Google) para
ajudar os navegadores a descobrirem seu próprio endereço na internet.
Isso funciona na maioria das redes domésticas, mas **pode falhar** em
redes mais restritivas (algumas redes corporativas ou de universidades),
que exigiriam um servidor **TURN** — um assunto mais avançado, ótimo
para uma próxima aula sobre WebRTC!

## Estrutura de arquivos

```
videochamada/
├── package.json
├── server.js          # servidor Node.js (Express + Socket.io)
└── public/
    ├── index.html      # estrutura da página
    ├── style.css        # grade de vídeos e estilo
    └── client.js         # lógica de WebRTC no navegador
```
