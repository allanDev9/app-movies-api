import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    usuario: { type: String, required: true },
    password: { type: String, required: true },
});

const Usuario = mongoose.model("usuarios", usuarioSchema);

export default Usuario;