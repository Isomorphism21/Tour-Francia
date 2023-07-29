import mongoose from "mongoose";

const pemiosSchema = mongoose.Schema({
    lugar:{
        type:Number,
        required: true,
        trim: true
    },
    premio:{
        type:String,
        trquired: true,
        trim: true
    }
    },
    {
        timestamps:true
    }
)

const premios = mongoose.model("premio", pemiosSchema)

export default premios;