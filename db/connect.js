import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.z4bhq.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority&appName=Cluster0`)
            .then(() => console.log("Conectado a MongoDb"))
            .catch((error) => console.log(error));
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error);
    }
}

export default connectDB;
