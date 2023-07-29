import Etapas from "../models/Etapas.js";

const obtenerEtapas = async (req, res) => {
    const datos = await Etapas.find();
    res.json(datos);
}

const postEtapas = async (req, res) => {
    try {
        const EtapasBody = new Etapas(req.body);
        const nuevaEtapas = await EtapasBody.save();
        res.json(nuevaEtapas);
    } catch (error) {
        console.log(error);
    }
}

const deleteEtapas = async (req, res) => {
    try {
        await Etapas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const patchEtapas = async (req, res) => {
    try {
        const EtapasBody =  await Etapas.findOne({_id:req.params.id});
        if(req.body.etapa){
            EtapasBody.etapa = req.body.etapa
        }
        if(req.body.tipo){
            EtapasBody.tipo = req.body.tipo
        }
        if(req.body.fecha){
            EtapasBody.fecha = req.body.fecha
        }
        if(req.body.distancia){
            EtapasBody.distancia = req.body.distancia
        }
        await EtapasBody.save();
        res.json(EtapasBody);
    } catch (error) {
        console.log(error);
    }
}

const getEtapasOne = async (req, res) => {
    try {
        const datos = await Etapas.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {obtenerEtapas, postEtapas, deleteEtapas, patchEtapas, getEtapasOne};