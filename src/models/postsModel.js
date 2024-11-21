// Importa a função para conectar ao banco de dados MongoDB
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados MongoDB usando a string de conexão fornecida pelo ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts da coleção "posts" no banco de dados
export default async function getTodosPosts() {
    // Obtém o banco de dados "instabytes"
    const db = conexao.db("instabytes");
    // Obtém a coleção "posts" do banco de dados
    const colecao = db.collection("posts");
    // Busca todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
}
