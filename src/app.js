import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão: ", erro);
});
conexao.once("open", () => {
    console.log("Conexão realizada com sucesso!!")
})

const app = express();
//Adição de Middleware =>Utilizando para ter acesso as requisições e fazer algumas ações
app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).send("API pelo express");
});

//Crud padrão!

app.get("/livros", async (req, res) => {
    //não pode ser send, devido a ter dados maiores
    //get = pegar dados
    //find é um metodo do mongo e ele vai filtrar
    const listaLivros = await livro.find({});

    res.status(200).json(listaLivros);
});


export default app;

