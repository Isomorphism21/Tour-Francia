import ciclistas from "../models/Ciclistas.js";

const getCiclistasAll = async (req, res) => {
    try {
        const datos = await ciclistas.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

const postCiclistas = async (req, res) => {
    try {
        const ciclistasBody = new ciclistas(req.body);
        const nuevaCiclistas = ciclistasBody.save();
        res.json(nuevaCiclistas);
    } catch (error) {
        console.log(error);
    }
}

const deleteCiclistas = async (req, res) => {
    try {
        await ciclistas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const patchCiclistas = async (req, res) => {
    try {
        const ciclistasBody = await ciclistas.findOne({_id:req.params.id});
        if(req.body.nombre){
            ciclistasBody.nombre = req.body.nombre;
        }
        if(req.body.edad){
            ciclistasBody.edad = req.body.edad;
        }
        if(req.body.estatura){
            ciclistasBody.estatura = req.body.estatura;
        }
        await ciclistasBody.save();
        res.json(ciclistasBody);
    } catch (error) {
        console.log(error);
    }
}

const getCiclistasId = async (req, res) => {
    try {
        const datos = await ciclistas.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {getCiclistasAll, postCiclistas, deleteCiclistas, patchCiclistas, getCiclistasId};