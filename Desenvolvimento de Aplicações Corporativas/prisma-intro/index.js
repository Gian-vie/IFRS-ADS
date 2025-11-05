// Importa a instância única do Prisma Client configurada em prismaClient.js
const prisma = require("./prismaClient");
// Função assíncrona responsável por criar um novo registro na tabela "user"
async function criarUsuario() {
  const novoUsuario = await prisma.user.create({
    data: {
      nome: "Ana Souza", // Campo "nome" do novo usuário
      email: "ana@ifrs.edu.br", // Campo "email" do novo usuário
    },
  });
  console.log("Usuário criado:", novoUsuario); // Exibe o resultado da criação
}
// Função principal que executa o fluxo da aplicação
// async function main() {
//   try {
//     criarUsuario(); // Chama a função que insere o usuário no banco
//   } catch (error) {
//     console.error("Erro durante a operação:", error.message); // Exibe erros
//   } finally {
//     await prisma.$disconnect(); // Encerra a conexão com o banco
//   }
// }

// Função assíncrona para listar todos os usuários do banco
async function listarUsuarios() {
  const usuarios = await prisma.user.findMany(); // Busca todos os registros da tabela "user"
  console.log("Lista de usuários:", usuarios); // Exibe a lista no console
}
// Função principal que executa o fluxo da aplicação
async function main() {
  try {
    listarUsuarios(); // Chama a função que busca todos usuários no banco
  } catch (error) {
    console.error("Erro durante a operação:", error.message); // Captura e exibe erros
  } finally {
    await prisma.$disconnect(); // Encerra a conexão com o banco
  }
}

async function buscarUsuarioPorEmail() {
  const usuario = await prisma.user.findUnique({
    where: { email: "ana@ifrs.edu.br" }, // Critério de busca (campo único)
  });
  console.log("Usuário encontrado:", usuario); // Exibe o resultado no console
}

// Função assíncrona para listar os 5 primeiros usuários em ordem alfabética
async function listarUsuariosOrdenados() {
  const usuariosOrdenados = await prisma.user.findMany({
    orderBy: { nome: "asc" }, // Ordena pelo campo "nome" em ordem crescente
    take: 5, // Limita o resultado aos 5 primeiros registros
  });
  console.log("Primeiros 5 usuários ordenados por nome:", usuariosOrdenados);
}
// Função assíncrona para atualizar um usuário existente pelo e-mail
async function atualizarUsuarioPorEmail() {
  const usuarioAtualizado = await prisma.user.update({
    where: { email: "ana@ifrs.edu.br" }, // Localiza o usuário pelo e-mail
    data: { nome: "Ana Paula Souza" }, // Define o novo valor para o "nome"
  });
  // Exibe no console o resultado da atualização
  console.log("Usuário atualizado:", usuarioAtualizado);
}

// Função assíncrona para atualizar um usuário, verificando se ele existe antes
async function atualizarUsuarioPorEmail() {
  // Primeiro, verifica se o usuário existe no banco de dados
  const usuarioExistente = await prisma.user.findUnique({
    where: { email: "ana@ifrs.edu.br" }, // Busca pelo e-mail informado
  });
  if (!usuarioExistente) {
    console.log("Usuário não encontrado. Nenhuma atualização realizada.");
    return; // Encerra a função se o registro não existir
  }
  // Atualiza o registro existente
  const usuarioAtualizado = await prisma.user.update({
    where: { email: "ana@ifrs.edu.br" },
    data: { nome: "Ana Paula Souza" },
  });
  console.log("Usuário atualizado:", usuarioAtualizado);
}

// Função assíncrona para remover um usuário pelo e-mail
async function removerUsuarioPorEmail() {
  const usuarioRemovido = await prisma.user.delete({
    where: { email: "ana@ifrs.edu.br" }, // Localiza o usuário pelo "email"
  });
  console.log("Usuário excluído:", usuarioRemovido); // Exibe o registro removido no console
}
// Execu
// Função assíncrona para remover um usuário, confirmando antes se ele existe
async function removerUsuarioPorEmail() {
  // Verifica se o usuário existe no banco de dados
  const usuarioExistente = await prisma.user.findUnique({
    where: { email: "ana@ifrs.edu.br" }, // Busca o usuário pelo campo "email"
  });
  // Se não existir, exibe uma mensagem e encerra a função
  if (!usuarioExistente) {
    console.log("Usuário não encontrado. Nenhuma exclusão realizada.");
    return;
  }
  // Se existir, realiza a exclusão
  const usuarioRemovido = await prisma.user.delete({
    where: { email: "ana@ifrs.edu.br" },
  });
  console.log("Usuário excluído:", usuarioRemovido);
}
main();
