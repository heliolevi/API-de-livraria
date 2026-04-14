import express from "express";
import LivroController from "../controller/livroController.js";

const  routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/editora/:editora", LivroController.listarLivrosPorEditora);
routes.post("/livros", LivroController.cadastrarLivro);
routes.get("/livros/:id", LivroController.listarLivrPorId);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;