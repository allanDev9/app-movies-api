import mongoose from "mongoose";

const empleadoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    usuario: { type: Number, required: true },
    password: { type: String, required: true },
});

const Empleado = mongoose.model("empleados", empleadoSchema);

export default Empleado;
