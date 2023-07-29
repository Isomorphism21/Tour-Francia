import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true            
        })
        const url = `Se inicio en el host ${connectionDB.connection.host} y en el puerto ${connectionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`${error.message}`);
    }
}

export default connectDB;