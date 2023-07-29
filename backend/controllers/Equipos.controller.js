import Equipos from "../models/Equipos.js";

const obtenerEquipos = async (req, res) => {
    const equipos = await Equipos.find();
    res.json(equipos);
}

const postEquipos = async (req, res) => {
    try {
        const equiposBody = new Equipos(req.body);
        const nuevaEquipo = await equiposBody.save();
        res.json(nuevaEquipo);
    } catch (error) {
        console.log(error);
    }
}

const deleteEquipos = async (req, res) => {
    try {
        await Equipos.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const patchEquipos = async (req, res) => {
    try {
        const equiposBody =  await Equipos.findOne({_id:req.params.id});
        if(req.body.Equipo){
            equiposBody.Equipo = req.body.Equipo
        }
        if(req.body.Pais){
            equiposBody.Pais = req.body.Pais
        }
        if(req.body.gerente){
            equiposBody.gerente = req.body.gerente
        }
        await equiposBody.save();
        res.json(equiposBody);
    } catch (error) {
        console.log(error);
    }
}

const getEquiposOne = async (req, res) => {
    try {
        const datos = await Equipos.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {obtenerEquipos, postEquipos, deleteEquipos, patchEquipos, getEquiposOne};