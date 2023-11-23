import express from "express";
import cors from "cors";
import db from "./database/mongo.js";
import { router } from "./routes/routes.js";

const PORT = process.env.PORT || 3001;
// const PORT = 3000;
const app = express();
const allowedOrigins = ['http://localhost:3000', 'http://localhost'];
const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Access-Control-Allow-Origin']
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);
db().then(() => console.log("Conexion Ready"));
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));