import express from "express";
import livro from "../models/Livro.js";

const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send("Teste de rota padrão"));

    app.use(express.json(), livro);
};

export default routes