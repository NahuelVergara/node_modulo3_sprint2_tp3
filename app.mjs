import express from 'express';
import {connectDB} from './src/config/dbConfig.mjs';
import superHeroeRoutes from './src/routes/superHeroeRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/api', superHeroeRoutes);
app.use((req, res) => {
    res.status(404).send({mensaje: "Ruta no encontrada"});
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});