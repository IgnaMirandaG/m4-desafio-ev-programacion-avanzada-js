export default class Animales{
    constructor(nombre, edad, comentarios, img, sonido){
    this._nombre = nombre;
        this._edad = edad;
        this._comentarios = comentarios;
        this._img = img;
        this._sonido = sonido;
    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }

    get comentarios(){
        return this._comentarios;
    }
    
    get img(){
        return this._img;
    }
    get sonido(){
        return this._sonido;
    }
};