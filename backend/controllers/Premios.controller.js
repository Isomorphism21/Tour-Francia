import premios from "../models/Premios.js";

const getPremiosAll = async (req, res) => {
    try {
        const extract = await premios.find();
        res.json(extract);
    } catch (error) {
        console.log(error);
    }
}

const postPremios = async (req, res) => {
    try {
        const premiosBody = new premios(req.body);
        const nuevoPremios = await premiosBody.save();
        res.json(nuevoPremios)
    } catch (error) {
        console.log(error);
    }
}

const deletePremios = async (req, res) => {
    try {
        await premios.deleteOne({_id:req.params.id})
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updPremios = async (req, res) => {
    try {
        const premiosBody = await premios.findOne({_id:req.params.id})
        if(req.body.lugar){
            premiosBody.lugar = req.body.lugar
        }
        if(req.body.premio){
            premiosBody.premio = req.body.premio
        }
        await premiosBody.save();
        res.json(premiosBody);
    } catch (error) {
        console.log(error);
    }
}

const getPremiosOne = async (req, res) => {
    try {
        const datos = await premios.findOne({_id:req.params.id});
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {getPremiosAll, postPremios, deletePremios, updPremios, getPremiosOne}; 