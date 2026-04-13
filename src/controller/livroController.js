import livro from "../models/Livro.js";

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

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ livro: novoLivro, message: "Criado com sucesso!" });
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