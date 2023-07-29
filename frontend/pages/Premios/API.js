const urlGet = "http://localhost:5200/premios/all";
const urlPost = "http://localhost:5200/premios/post";
const urlDelete = "http://localhost:5200/premios/del";
const urlGetOne = "http://localhost:5200/premios/get"
const urlUpd = "http://localhost:5200/premios/upd";

export const getPremios = async () => {
    try {
        const extract = await fetch(urlGet);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const postPremios = async (objeto) => {
    try {
        await fetch(urlPost, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "Premios.html"
    } catch (error) {
        console.log(error);
    }
}

export const deletePremios = async (id_Premios) => {
    try {
            await fetch(`${urlDelete}/${id_Premios}`,{
                method: "DELETE"
            })
            window.location = "Premios.html"
    } catch (error) {
        console.log(error);
    }
}

export const getPremiosOne = async (id_Premios) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_Premios}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updPremiosOne = async (objeto, id_Premios) => {
    try {
        await fetch(`${urlUpd}/${id_Premios}`,{
            method: "PATCH",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "Premios.html"
    } catch (error) {
        console.log(error);
    }
} 