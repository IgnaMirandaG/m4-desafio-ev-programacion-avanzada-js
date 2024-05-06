import {Aguila, Leon, Lobo, Oso, Serpiente} from "./clases/Tipos.js";
import data from "./data.js";

let animales = [];
let imagenSrc;
let sonidoSrc;

const cardCreate = ()=>{
    try {
        const template = document.getElementById("Animales");
        template.innerHTML = ``;
        animales.forEach((key, modal)=>{
            template.innerHTML += `
            <div class="px-3 pb-2">
            <div class="bg-dark text-white">
              <img
                height="200"
                src="./assets/imgs/${key.img}"
                data-bs-toggle="modal"  
                data-bs-target="#exampleModal" 
                onclick="modalDetails('${modal}')" 
              />
              <div>
                <button onclick="playSound('${key.sonido}')" class="btn btn-secondary w-100"> <img height="30" src="./assets/imgs/audio.svg" /> </button>
              </div>
            </div>
          </div>
            `
        })
    } catch (error) {
        console.log(error);
    }
}

window.playSound = (sonido)=>{
    try {
        const animal = animales.find((animal)=>{
            return animal.sonido === sonido;
        })
        sonido == 'Chillido.mp3' ? animal.sonidoChillido()
        : sonido == 'Rugido.mp3' ? animal.sonidoRugido()
        : sonido == 'Aullido.mp3' ? animal.sonidoAullido()
        : sonido == 'Grunido.mp3' ? animal.sonidoGrunido()
        : sonido == 'Siseo.mp3' ? animal.sonidoSiseo()
        : undefined;

    } catch (error) {
        console.log(error);
    }
}
window.modalDetails = (modal)=>{
    try {
        const modalBody = document.getElementsByClassName('modal-body')[0];
        const animal = animales[modal];
        modalBody.innerHTML = `
        <div class="px-3 pb-2">
        <div class="card w-50 m-auto bg-dark text-white border-0">
          <img
            src="./assets/imgs/${animal.img}"
            class="d-block m-auto w-100"
          />
          <div class="card-body text-center">
            <h4 class="card-text ">${animal.nombre}</h4>
            <h6 class="card-text ">${animal.edad}</h6>
            <h6 class="card-text m-0">Comentarios</h6>
            <hr/>
            <p>${animal.comentarios}</p>
          </div>
        </div>
        </div>
        `
    } catch (error) {
        console.log(error)
    }
};

document.getElementById('animal').addEventListener('change', async (event)=>{
    try {
        const animalesSelected = event.target.value;
        const animales = await data.getData()
        const animalesObject = await animales.find((animal)=>{
            return animal.name === animalesSelected;
        })
        imagenSrc = `${animalesObject.imagen}`;
        sonidoSrc = `${animalesObject.sonido}`;
        const preview = document.getElementById('preview');
        preview.parentElement.classList.remove('p-5');
        preview.style.backgroundImage = `url(./assets/imgs/${imagenSrc})`;

    } catch (error) {
        console.log(error);
    }
});

document.getElementById('btnRegistrar').addEventListener('click', ()=>{
    try {
        const nombre = document.getElementById('animal').value;
        const edad = document.getElementById('edad').value;
        const comentarios = document.getElementById('comentarios').value;
        if (nombre && edad && comentarios) {
            let animal = nombre == 'Leon' ? new Leon(nombre, edad, comentarios, imagenSrc, sonidoSrc)
            : nombre == 'Lobo' ? new Lobo(nombre, edad, comentarios, imagenSrc, sonidoSrc)
            : nombre == 'Oso' ? new Oso(nombre, edad, comentarios, imagenSrc, sonidoSrc)
            : nombre == 'Serpiente' ? new Serpiente(nombre, edad, comentarios, imagenSrc, sonidoSrc)
            : nombre == 'Aguila' ? new Aguila(nombre, edad, comentarios, imagenSrc, sonidoSrc)
            : undefined

            animales.push(animal);
            cardCreate();

        } else {
            alert('Faltan Datos')
        }
    } catch (error) {
        console.log(error)
    }
});