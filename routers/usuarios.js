import express from "express";
import usuarios from "../modelos/usuariosModelo.js";
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const usuarios = await usuarios.find()
        res.send(empleados);
    } catch (error) {
        console.log(error);
        res.status(500).send("No se encontraron empleados");
    }
});

export default router;