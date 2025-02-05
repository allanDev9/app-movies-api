import express from 'express';
import routers from './routers/index.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.API_PORT;
app.use(express.json());

import empleado from './routers/usuarios.js';

app.use('/api', routers)
app.use('/api/empleado', empleado)

app.listen(PORT, () => { console.log(`Escuchando en el puerto ${PORT}`) })
connectDB();
