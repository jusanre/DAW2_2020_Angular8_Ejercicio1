export class Gato{
    nombre: string;
    raza: string;
    edad: number; 
    constructor(nombre:string,raza:string,edad?:number){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad || -1;
    }
}

