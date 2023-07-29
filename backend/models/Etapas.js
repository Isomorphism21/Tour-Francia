import mongoose from "mongoose";

const EtapasSchema = mongoose.Schema({
    etapa: {
        type: Number,
        require: true,
        trim: true,
    },
    tipo: {
        type: String,
        require: true,
        trim: true,
    },
    fecha: {
        type: String,
        require: true,
        trim: true,
    },
    distancia: {
        type: String,
        require: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
);

const Etapas = mongoose.model("etapas", EtapasSchema);

export default Etapas;