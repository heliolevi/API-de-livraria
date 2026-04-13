import mongoose from "mongoose";

async function conectaNaDatabase () {
    // Removi o "=Cluster0" e adicionei as opções padrão do Atlas
    const url = (process.env.DB_CONNECTION_STRING);
    
    await mongoose.connect(url); // É importante usar o await aqui também

    return mongoose.connection;
}

export default conectaNaDatabase;