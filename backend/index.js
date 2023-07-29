import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/config.js";
import EquiposRouter from "./routes/equipo.routes.js";
import CiclistasRouter from "./routes/ciclistas.routes.js";
import EtapasRouter from "./routes/etapas.routes.js";
import PremiosRouter from "./routes/premios.routes.js";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
connectDB();

app.listen(PORT, () => {
    console.log(`INICIALIZADO ${PORT}`);
})

app.use(cors());
app.use(express.json());
app.use("/equipos", EquiposRouter);
app.use("/ciclistas", CiclistasRouter);
app.use("/etapas", EtapasRouter);
app.use("/premios", PremiosRouter);