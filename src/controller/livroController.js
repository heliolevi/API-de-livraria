import livro from "../models/Livro.js";
import { autor } from "../models/Autores.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }
    };

    static async listarLivrPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);

            if (!livroEncontrado) {
                return res.status(404).json({ message: "Livro não encontrado" });
            }

            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição do livro!` });
        }
    };

    static async listarLivrosPorEditora(req, res) {
        try {
            const editora = req.params.editora;
            const livrosEncontrados = await livro.find({ editora: editora });

            if (livrosEncontrados.length === 0) {
                return res.status(404).json({ message: "Nenhum livro encontrado para esta editora" });
            }

            res.status(200).json(livrosEncontrados);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na busca de livros por editora!` });
        }
    };

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEcontrado = await autor.findById(novoLivro.autor);
            if (!autorEcontrado) {
                return res.status(404).json({ message: "Autor não encontrado" });
            }
            const livroCompleto = { ...novoLivro, autor: { ...autorEcontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ livro: livroCriado, message: "Criado com sucesso!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar o livro :( ` });
        }
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            const livroAtualizado = await livro.findByIdAndUpdate(id, req.body, { new: true });

            if (!livroAtualizado) {
                return res.status(404).json({ message: "Livro não encontrado" });
            }

            res.status(200).json(livroAtualizado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na atualização do livro!` });
        }
    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            const livroDeletado = await livro.findByIdAndDelete(id);

            if (!livroDeletado) {
                return res.status(404).json({ message: "Livro não encontrado" });
            }

            res.status(200).json({ message: "Livro deletado!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na remoção do livro!` });
        }
    }
};

export default LivroController;

/* 
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(204).send("Livro deletado :)");
})  */