import mongoose from "mongoose";

const EquiposSchema = mongoose.Schema({
    Equipo: {
        type: String,
        required: true,
        trim: true,
    },
    Pais: {
        type: String,
        required: true,
        trim: true,
    },
    gerente: {
        type: String,
        required: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
);

const Equipos = mongoose.model("equipos", EquiposSchema);

export default Equipos;