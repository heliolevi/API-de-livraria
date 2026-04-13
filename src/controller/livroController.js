import livro from "../models/Livro.js";

class LivroController {


    static async listarLivros(req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    };

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ livro: novoLivro, message: "Criado com sucesso!" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastar o livro :( ` });
        }

    };
};

export default LivroController;


/* app.get("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) =>{
//uma requisição que é recebido um corpo, corpo da requisiçaõ/adição 
    livros.push(req.body);
    res.status(201) .send("Livro cadastrado com sucesso!")

});

app.put("/livros/:id", (req, res) =>{
        const index = buscaLivro(req.params.id);
        livros[index].titulo = req.body.titulo;
        res.status(200) .json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);  
    res.status(204) .send("Livro deletado :)");
}) */