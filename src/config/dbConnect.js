import mongoose from "mongoose";

async function conectaNaDatabase () {
    // Removi o "=Cluster0" e adicionei as opções padrão do Atlas
    const url = (process.env.DB_CONNECTION_STRING);
    
    try {
        await mongoose.connect(url); // É importante usar o await aqui também
        console.log("Conexão realizada com sucesso!!");
    } catch (error) {
        console.error("Erro de conexão: ", error);
        throw error; // Re-throw to crash the app if connection fails
    }

    return mongoose.connection;
}

export default conectaNaDatabase;