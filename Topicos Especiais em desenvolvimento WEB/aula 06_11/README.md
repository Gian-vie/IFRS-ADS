# ChatIRC — Sala de Chat com WebSockets

Aplicativo de chat em tempo real, estilo mIRC, construído com **Node.js puro** e **WebSockets**.
Ideal para uso didático: código curto, sem frameworks complexos, bem comentado.

---

## Estrutura do Projeto

```
mirc-chat/
├── server.js          ← Servidor HTTP + WebSocket (backend)
├── package.json       ← Dependências do projeto
└── public/
    └── index.html     ← Interface do chat (frontend)
```

---

## Como Rodar

### 1. Instalar as dependências
```bash
npm install
```

### 2. Iniciar o servidor
```bash
node server.js
```

### 3. Abrir o chat
Acesse `http://localhost:3000` em dois ou mais navegadores (ou abas) para simular vários usuários.

---

## Tecnologias Utilizadas

| Camada    | Tecnologia                          |
|-----------|-------------------------------------|
| Backend   | Node.js + `ws` (WebSocket Server)   |
| Frontend  | HTML + CSS + JavaScript puro        |
| Protocolo | WebSocket (comunicação bidirecional)|

---

## Dependência

- **ws** `^8.x` — biblioteca leve para WebSockets no Node.js
  - Documentação: https://github.com/websockets/ws
