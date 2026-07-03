# 📡 Radar em Tempo Real
### Projeto Final — Tópicos Especiais em Web

---

## 📁 Estrutura de Pastas

```
radar-tempo-real/
│
├── server.js              ← Backend: servidor HTTP + WebSocket (Socket.io)
├── package.json           ← Dependências do projeto
├── README.md              ← Este arquivo
│
└── public/                ← Arquivos servidos estaticamente pelo Express
    ├── mapa.html          ← Frontend Desktop: painel com o mapa (projetor)
    └── mobile.html        ← Frontend Mobile: tela do aluno (celular)
```

---

## 🚀 Instalação e Execução

### Passo 1 — Instalar as dependências
```bash
npm install
```

### Passo 2 — Iniciar o servidor
```bash
node server.js
# ou, com hot-reload para desenvolvimento:
npm run dev
```

### Passo 3 — Abrir o mapa no projetor
```
http://localhost:3000
```

### Passo 4 — Expor via HTTPS para os celulares (em outro terminal)
```bash
npx localtunnel --port 3000
```
> O comando retorna uma URL tipo `https://xyz-abc-123.loca.lt`.
> Compartilhe essa URL com os alunos (QR Code recomendado).
> Os alunos devem acessar: `https://xyz-abc-123.loca.lt/mobile.html`

---

## 🎓 Roteiro de Apresentação em Sala (3 Aulas)

### AULA 1 — Arquitetura e Backend (server.js)

**Objetivo:** Entender o fluxo geral e implementar o servidor.

**Ordem de apresentação:**
1. Desenhar no quadro o fluxo de dados:
   `Celular GPS → WebSocket → server.js → Broadcast → Mapa`
2. Apresentar o `package.json` e rodar `npm install`
3. Explicar as 3 seções do `server.js`:
   - Express servindo arquivos estáticos
   - `io.on('connection')` e o objeto `socket`
   - Os 3 eventos: `registrar-aluno`, `atualizar-posicao`, `disconnect`
4. Destacar a diferença entre `socket.emit()` (para um) e `io.emit()` (broadcast)
5. Rodar o servidor e mostrar os logs no terminal

**Conceitos-chave a destacar:**
- O dicionário `alunosConectados{}` como "memória" do servidor
- Por que guardamos `socket.id` como chave? (é único e gerado automaticamente)
- O evento `disconnect` é automático — o servidor detecta queda de conexão!

---

### AULA 2 — Frontend Mobile (mobile.html)

**Objetivo:** Implementar o rastreador do celular e entender a API de geolocalização.

**Ordem de apresentação:**
1. Explicar por que `watchPosition` e não `getCurrentPosition`
2. Mostrar o fluxo: nome → `registrar-aluno` → GPS ativo → `atualizar-posicao`
3. Configurar o `localtunnel` e gerar a URL HTTPS
4. Explicar por que HTTPS é obrigatório para geolocalização no navegador
5. Gerar um QR Code da URL `/mobile.html` e pedir para os alunos acessarem
6. Mostrar os logs no terminal do servidor conforme alunos se conectam

**Ponto de discussão:**
- O que acontece quando o aluno fecha o navegador? (evento `disconnect` no servidor)
- `enableHighAccuracy: true` → mais preciso mas consome mais bateria. Por quê?

---

### AULA 3 — Frontend Desktop e Integração Final (mapa.html)

**Objetivo:** Implementar o mapa com Leaflet e fazer a demo ao vivo.

**Ordem de apresentação:**
1. Apresentar o Leaflet.js — comparar com Google Maps (gratuito vs. pago)
2. Explicar os "tiles" do OpenStreetMap e o sistema {z}/{x}/{y}
3. Mostrar `L.map()`, `L.tileLayer()`, `L.marker()`, `L.divIcon()`
4. Explicar o dicionário `marcadores{}` e o método `setLatLng()` para mover pinos
5. Conectar tudo: mostrar que o mapa recebe os mesmos eventos do servidor
6. **DEMO AO VIVO:** todos acessam o mobile, professor projeta o mapa

**Ponto alto da aula:**
- Ver os pinos aparecendo e se movendo em tempo real no projetor!
- Fechar um celular → pino some instantaneamente (evento `aluno-saiu`)

---

## 🔧 Dicas para o Dia da Demo

- **QR Code:** Use https://qr.io ou o VS Code com extensão QR Code para gerar
- **Velocidade:** Dentro da escola o GPS pode ser lento (ambiente fechado). Normal!
- **localtunnel aviso:** Na primeira vez que os alunos abrirem a URL do tunnel,
  pode aparecer uma tela de aviso pedindo para "clicar aqui para continuar". É normal.
- **Fallback:** Se o GPS não pegar dentro do prédio, dê uma volta pelo pátio!
- **nodemon:** Use `npm run dev` durante o desenvolvimento para não precisar
  reiniciar o servidor manualmente a cada mudança.

---

## 🧠 Extensões Sugeridas (atividades extras)

- [ ] Mostrar trilha (rastro) do caminho do aluno com `L.polyline()`
- [ ] Adicionar timestamp da última atualização no popup do marcador
- [ ] Criar salas separadas com `socket.join('sala-A')` para turmas diferentes
- [ ] Salvar histórico de posições em um banco SQLite
- [ ] Adicionar avatar/foto do aluno ao marcador
