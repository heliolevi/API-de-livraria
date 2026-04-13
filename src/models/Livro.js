// Modelo é um objeto que representa uma coleção na base de dados

import mongoose from "mongoose";

// função para definir um modelo a ser seguido
const livroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
}, {
    versionKey: false,
    collection: 'livros'
});

const livro = mongoose.model("livros", livroSchema);

export default livro;
