import express from 'express';
import usuariosRoutes from './usuarios.js';
const router = express.Router();

router.use('/usuarios', usuariosRoutes);

export default router;