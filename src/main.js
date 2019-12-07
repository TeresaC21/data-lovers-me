import dataSet from './data/rickandmorty/rickandmorty.js';
import {
    dataAll,
    sortFilterAZ,
    sortFilterZA,
    filterX,
    filterGender,
    filterStatus
} from './data.js';

//----------------------------SHOW FOR GENDER--------------------------------
const mostrarGender = (e) => {
    document.querySelector("#contenedor").innerHTML = ' ';
    document.querySelector('#contenedor').style.display = "flex";
    document.querySelector('#rickInicio').style.display = "none";
    const eventoG = e.target.id;
    const dataGender = filterGender(dataAll, eventoG);
    dataGender.map((genderF) => {
        let divGender = document.createElement('div');
        divGender.className = 'characters';
        const templateG = `<img src=${genderF.image}></img>` + `<p>Name: ${genderF.name}</p>` + `<p>Specie: ${genderF.species}</p>` + `<p>Status: ${genderF.status}</p>` + `<p>Gender: ${genderF.gender}</p>`
        divGender.innerHTML = templateG
        document.querySelector('#contenedor').appendChild(divGender);
    });
}
document.querySelector('#Female').addEventListener('click', mostrarGender);
document.querySelector('#Male').addEventListener('click', mostrarGender);

//----------------------------SHOW FOR SPECIES--------------------------------
const mostrarSpecie = (e) => {
    document.querySelector("#contenedor").innerHTML = ' ';
    document.querySelector('#contenedor').style.display = "flex";
    document.querySelector('#rickInicio').style.display = "none";
    const evento = e.target.id;
    const speciesData = filterX(dataAll, evento);
    speciesData.map((filterspecies) => {
        let divPersonajes = document.createElement('div');
        divPersonajes.className = 'characters';
        const template = `<img src=${filterspecies.image}></img>` + `<p>Name: ${filterspecies.name}</p>` + `<p>Specie: ${filterspecies.species}</p>` + `<p>Status: ${filterspecies.status}</p>` + `<p>Gender: ${filterspecies.gender}</p>`
        divPersonajes.innerHTML = template
        document.querySelector('#contenedor').appendChild(divPersonajes);
    });
}
document.querySelector('#Human').addEventListener('click', mostrarSpecie);
document.querySelector('#Alien').addEventListener('click', mostrarSpecie);
document.querySelector('#Humanoid').addEventListener('click', mostrarSpecie);
document.querySelector('#Animal').addEventListener('click', mostrarSpecie);
document.querySelector('#unknown').addEventListener('click', mostrarSpecie);
document.querySelector('#Poopybutthole').addEventListener('click', mostrarSpecie);
document.querySelector('#Mytholog').addEventListener('click', mostrarSpecie);
document.querySelector('#Vampire').addEventListener('click', mostrarSpecie);
document.querySelector('#Robot').addEventListener('click', mostrarSpecie);
document.querySelector('#Cronenberg').addEventListener('click', mostrarSpecie);
document.querySelector('#Disease').addEventListener('click', mostrarSpecie);
document.querySelector('#Parasite').addEventListener('click', mostrarSpecie);

//----------------------------SHOW FOR STATUS--------------------------------
const mostrarStatus = (e) => {
    document.querySelector("#contenedor").innerHTML = ' ';
    document.querySelector('#contenedor').style.display = "flex";
    document.querySelector('#rickInicio').style.display = "none";
    const eventoSt = e.target.id;
    const dataStatus = filterStatus(dataAll, eventoSt);
    dataStatus.map((statusX) => {
        let divStatus = document.createElement('div');
        divStatus.className = 'characters';
        const templateSt = `<img src=${statusX.image}></img>` + `<p>Name: ${statusX.name}</p>` + `<p>Specie: ${statusX.species}</p>` + `<p>Status: ${statusX.status}</p>` + `<p>Gender: ${statusX.gender}</p>`
        divStatus.innerHTML = templateSt
        document.querySelector('#contenedor').appendChild(divStatus);
    });
}
document.querySelector('#Alive').addEventListener('click', mostrarStatus);
document.querySelector('#Dead').addEventListener('click', mostrarStatus);

//----------------------------FUNCTION SEARCH--------------------------------
//Id button 
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#contenedor');

const search = () => {
    resultado.innerHTML = '';
    //Getting user information
    const texto = formulario.value.toLowerCase();
    if (formulario.value.length === 0) {
        window.alert("Enter the name of a character")
    } else {
        for (let character of dataSet.results) {
            //Name dataSet.results and converse lower case
            let characterLowerCase = character.name.toLowerCase();
            if (characterLowerCase.indexOf(texto) !== -1) {
                let resultadoc = document.createElement('div');
                resultadoc.className = 'characters';
                const templatet = `<img src=${character.image}></img>` + `<p>Name: ${character.name}</p>` + `<p>Specie: ${character.species}</p>` + `<p>Status: ${character.status}</p>` + `<p>Gender: ${character.gender}</p>`
                resultadoc.innerHTML = templatet
                document.querySelector('#contenedor').appendChild(resultadoc);
                //Hide start and show in container
                document.querySelector('#contenedor').style.display = "flex";
                document.querySelector('#rickInicio').style.display = "none"; //break;
            }
        }
        if (resultado.innerHTML === '') {
            resultado.innerHTML += `<li>character not found...</li>`
        }
    }
}
document.querySelector('#search').addEventListener('click', search);

//---------------FUNCTION FOR SHOW LIVE YOUR SEARCH______________________
document.querySelector('#formulario').addEventListener('keyup', search);
//search();

//----------------------GO TO HOME----------------------------------
function goToHome() {
    document.querySelector("#contenedor").innerHTML = ' ';
    document.querySelector('#contenedor').style.display = "flex";
    document.querySelector('#rickInicio').style.display = "none";
    window.location.reload();
}
document.querySelector('#homeGo').addEventListener('click', goToHome);

//----------------------ORDER AZ----------------------------------
document.querySelector('#orderAbc').addEventListener("click", () => {
    personsAZ();
});
const personsAZ = () => {
    let listAZ = sortFilterAZ(dataAll, name);
    document.querySelector("#contenedor").innerHTML = ' ';
    document.querySelector('#contenedor').style.display = "flex";
    document.querySelectorAll('#contenedor').innerHTML = sortFilterAZ(listAZ);
    document.querySelector('#rickInicio').style.display = "none";
    dataAll.map((ordenadito) => {
        let divOrder = document.createElement('div');
        divOrder.className = 'characters';
        const templateO = `<img src=${ordenadito.image}></img>` + `<p>Name: ${ordenadito.name}</p>` + `<p>Specie: ${ordenadito.species}</p>` + `<p>Status: ${ordenadito.status}</p>` + `<p>Gender: ${ordenadito.gender}</p>`
        divOrder.innerHTML = templateO
        document.querySelector('#contenedor').appendChild(divOrder);
    });
};

//----------------------ORDER ZA----------------------------------
document.querySelector('#orderCba').addEventListener("click", () => {
    personsZA();
});
const personsZA = () => {
    let listZA = sortFilterZA(dataAll, name);
    document.querySelector("#contenedor").innerHTML = ' ';
    document.querySelector('#contenedor').style.display = "flex";
    document.querySelectorAll('#contenedor').innerHTML = sortFilterZA(listZA);
    document.querySelector('#rickInicio').style.display = "none";
    dataAll.map((ordenaditoZ) => {
        let divOrderReverse = document.createElement('div');
        divOrderReverse.className = 'characters';
        const templateR = `<img src=${ordenaditoZ.image}></img>` + `<p>Name: ${ordenaditoZ.name}</p>` + `<p>Specie: ${ordenaditoZ.species}</p>` + `<p>Status: ${ordenaditoZ.status}</p>` + `<p>Gender: ${ordenaditoZ.gender}</p>`
        divOrderReverse.innerHTML = templateR
        document.querySelector('#contenedor').appendChild(divOrderReverse);
    });
};

//----------------------------BUTTON START PARA SUBIR------------------------------------
//Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
document.getElementById("myBtn").addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

//----------------------------CLICK GIF - SHOW PARRAFO------------------------------------
function gifClick() {
    let parrafo = document.createElement('p');
    parrafo.className = 'myPDom';
    const templateParr = `<p> Welcome! Start exploring in the nav bar. </p>`
    parrafo.innerHTML = templateParr
    document.querySelector('.myP').appendChild(parrafo);
    document.querySelector('#contenedor').style.display = "flex";
    document.querySelector('#rickInicio').style.display = "none";
}
document.querySelector('.gifi').addEventListener('click', gifClick);

/*
// Go start top
function goTop() {
    document.querySelector("#contenedor").innerHTML = ' ';
    document.querySelector('#contenedor').style.display = "flex";
    document.querySelector('#rickInicio').style.display = "none";
}
document.querySelector('#genderx').addEventListener('click', goTop)
*/