import Animales from "./Animales.js";

const audioPlayer = document.getElementById('player');

export class Leon extends Animales {
    constructor(nombre, edad, comentarios, img, sonido) {
        super(nombre, edad, comentarios, img, sonido);
    }

    sonidoRugido() {
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Lobo extends Animales {
    constructor(nombre, edad, comentarios, img, sonido) {
        super(nombre, edad, comentarios, img, sonido);
    }

    sonidoAullido() {
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Oso extends Animales {
    constructor(nombre, edad, comentarios, img, sonido) {
        super(nombre, edad, comentarios, img, sonido);
    }

    sonidoGrunido() {
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Serpiente extends Animales {
    constructor(nombre, edad, comentarios, img, sonido) {
        super(nombre, edad, comentarios, img, sonido);
    }

    sonidoSiseo() {
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}

export class Aguila extends Animales {
    constructor(nombre, edad, comentarios, img, sonido) {
        super(nombre, edad, comentarios, img, sonido);
    }

    sonidoChillido() {
        audioPlayer.src = `/assets/sounds/${this.sonido}`;
        audioPlayer.play();
    }
}
