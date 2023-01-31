let searchInput = document.getElementById("searchInput").value;
let options = [errorFeo, errorNoTanFeo, errorHorrible,errorBonito];
let results = document.querySelector(".results");
let coincidencias = document.getElementById("coincidencias");
let errorSeleccionado;

function search() {
    let searchInput = document.getElementById("searchInput").value;
    results.innerHTML = "";
    for (let i = 0; i < options.length; i++) {
        if (options[i].nombreError.toLowerCase().includes(searchInput.toLowerCase())) {
            const buton = document.createElement('button');
            buton.innerHTML = options[i].nombreError;
            buton.classList.add('coincidencias')
            buton.addEventListener('click', ()=>{
                errorSeleccionado = options[i].nombreError;
                mostrarErrorSeleccionado()
            })
            results.appendChild(buton);
        }
    }
}
function mostrarErrorSeleccionado(){
    results.innerHTML = "";
    for (let i = 0; i < options.length; i++) {
        if (options[i].nombreError.includes(errorSeleccionado)) {
            const pNombre = document.createElement('p');
            const pDescript = document.createElement('p');
            pNombre.innerHTML = options[i].nombreError;
            pNombre.classList.add('parrafos-mostrar-error')
            pDescript.innerHTML  = options[i].descripcionError;
            pDescript.classList.add('parrafos-mostrar-error')
            results.appendChild(pNombre);
            results.appendChild(pDescript);
            //
            const divAcciones = document.createElement('div');
            divAcciones.classList.add('lista-de-acciones')
            results.appendChild(divAcciones);

            options[i].acciones.forEach(element => {
                const contenedorAcciones = document.createElement('div');
                contenedorAcciones.classList.add('contenedor-acciones')
                const detalles = document.createElement('p');
                detalles.innerHTML = 
                `Paso ${element.numeroAccion}
                ${element.detallesAccion}`

                const accionIMG = document.createElement('img');
                accionIMG.classList.add('accion-img');
                accionIMG.setAttribute('src',element.imagenAccion);
                contenedorAcciones.appendChild(detalles);
                contenedorAcciones.appendChild(accionIMG);
                divAcciones.appendChild(contenedorAcciones);
            });
            

        }
    }
}

