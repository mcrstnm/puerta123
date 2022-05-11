import { isThisTypeNode } from "typescript";

class Persona {
    private nacimiento: number;
    private nombre: string;

    constructor(anioNacimiento: number, nombre: string){
        this.nacimiento = anioNacimiento
        this.nombre = nombre;
    };
    
    public cualEsTuNombre(): string {
        return "Mi nombre es " + this.nombre.split(" ");
    }; 
    
    public cualEsTuEdad(): string {
        return "Mi edad es " + (2022 - this.nacimiento) + "  años";          
    };
    
    public cualEsTuGeneracion() {
        if (this.nacimiento <= 1975) {
            return "Soy un Baby Bommer"
        };
        if (this.nacimiento > 1975 && this.nacimiento < 1999){
            return "Soy un Milenial"
        };
        if (this.nacimiento >= 1999 && this.nacimiento < 2010){
            return "Soy un Centenial"
        };
        if (this.nacimiento >= 2010){
            return "Soy un alfa"
        }
    };
    }

 let fede = new Persona(2015, "Federico Fernandez" );
 console.log(fede.cualEsTuNombre());
 console.log(fede.cualEsTuGeneracion());
 console.log(fede.cualEsTuEdad());
