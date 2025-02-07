import express from 'express';
import routers from './routers/index.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
import usuarios from './routers/usuarios.js';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.API_PORT;

// Middlewares
app.use(express.json());
app.use(cors());


app.use('/api', routers)
app.use('/api/usuarios', usuarios)

app.listen(PORT, () => { console.log(`Escuchando en el puerto ${PORT}`) })
connectDB();
