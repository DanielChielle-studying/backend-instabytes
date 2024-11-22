// Importa o módulo Express para criar o servidor web
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do servidor Express
const app = express();
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem de log
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
