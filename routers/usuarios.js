import express from "express";
import Usuarios from "../modelos/usuariosModelo.js";
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const listUsuarios = await Usuarios.find()
        res.send(listUsuarios);
    } catch (error) {
        console.log(error);
        res.status(500).send("No se encontraron usuarios");
    }
});

export default router;