//import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});

server.on("error", (erro) => {
    if (erro.code === "EADDRINUSE") {
        console.error(`Erro: porta ${PORT} já está em uso. Pare o processo existente ou altere a porta no .env.`);
    } else {
        console.error("Erro no servidor:", erro);
    }
    process.exit(1);
});

