import express from "express";

const app = express();
//Adição de Middleware =>Utilizando para ter acesso as requisições e fazer algumas ações
app.use(express.json()) 


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
function buscaLivro(id){
    //Método para Array que procura e retorna qual index do array está o elemento selecionado
    return livros.findIndex(livros => {
        return livros.id === Number(id); // devido os daods trafegarem como string
    })
}
app.get("/", (req, res) => {
    res.status(200) .send("API pelo express");
});

//Crud padrão!

app.get("/livros", (req, res) => {
    //não pode ser send, devido a ter dados maiores
    //get = pegar dados
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) =>{
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
})

export default app;