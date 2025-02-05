import express from 'express';
import peliculasRoutes from './usuarios.js';
const router = express.Router();

router.use('/peliculas', peliculasRoutes);

export default router;