import {getPremios, postPremios, deletePremios, getPremiosOne, updPremiosOne} from "./API.js";
document.addEventListener("DOMContentLoaded", iniciar);
//GET Premios
async function iniciar(){
    const datos = await getPremios();
    const tablas = document.querySelector("#insert");
    console.log(datos);
    datos.forEach(element => {
        const {_id, lugar, premio} = element;
        tablas.innerHTML += `
            <tr>
                <td>${_id}</td>
                <td>${lugar}</td>
                <td>${premio}</td>
                <td>
                    <button class="btn btn-danger delete" id="${_id}">ELIMINAR</button>
                </td>
                <td>
                    <button class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#staticBackdropEDIT" id="${_id}">EDITAR</button>
                </td>
            </tr>
        `
    });
}
//POST
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", datosPOST);

function datosPOST(e){
    e.preventDefault();
    const lugar = document.querySelector("#lugar").value;
    const premio = document.querySelector("#premio").value;
    

    const data = {
        lugar,
        premio
    }
    console.log(data);

    if(validate(data)){
        postPremios(data);
        alert("Los datos se han ingresado satisfactoriamente");
    }else {
        alert("no pasa");
    }
}
//DELETE
const laTabla = document.querySelector("#insert");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_Premios = e.target.getAttribute("id");
        console.log(id_Premios);
        const confir = confirm("¿Seguro que deseas eliminar el dato?");
        if(confir){
            deletePremios(id_Premios);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_Premios = e.target.getAttribute("id");
        console.log(id_Premios);
        const datos = await getPremiosOne(id_Premios);
        const lugar = document.querySelector("#lugar2");
        const premio = document.querySelector("#premio2");
        lugar.value = datos.lugar;
        premio.value = datos.premio;
        

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updPremios);
        function updPremios(e){
            e.preventDefault();
            const lugar = document.querySelector("#lugar2").value;
            const premio = document.querySelector("#premio2").value;
            
            
            const datosUpd = {
                lugar,
                premio
            }

            if(validate(datosUpd)){
                updPremiosOne(datosUpd, id_Premios);
            }
        }
    }
}

function validate(objeto){
    return Object.values(objeto).every(element => element != "");
}