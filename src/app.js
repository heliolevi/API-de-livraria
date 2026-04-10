import express from "express";

const app = express();


//Const temporaria para simular dados, proximos commits, talvez ela suma e venha um banco de dados(mongo)
const livros = [
    {
        id: 1,
        titulo: "Os caçadores de Deus",
        autor: "Tommy Tenney"
    },{
        id:2,
        titulo: "Coragem",
        autor: "Louis Cole"
    }
]

app.get("/", (req, res) => {
    res.status(200) .send("API pelo express");
});

app.get("/livros", (req, res) => {
    //não pode ser send, devido a ter dados maiores
    //get = pegar dados
    res.status(200).json(livros);
});

export default app;