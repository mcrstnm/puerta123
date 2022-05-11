"use strict";
exports.__esModule = true;
var Persona = /** @class */ (function () {
    function Persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    Persona.prototype.cualEsTuNombre = function () {
        return "Mi nombre es " + this.nombre.split(" ");
    };
    ;
    Persona.prototype.cualEsTuEdad = function () {
        return "Mi edad es " + (2022 - this.nacimiento) + "  años";
    };
    ;
    Persona.prototype.cualEsTuGeneracion = function () {
        if (this.nacimiento <= 1975) {
            return "Soy un Baby Bommer";
        }
        ;
        if (this.nacimiento > 1975 && this.nacimiento < 1999) {
            return "Soy un Milenial";
        }
        ;
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "Soy un Centenial";
        }
        ;
        if (this.nacimiento >= 2010) {
            return "Soy un alfa";
        }
    };
    ;
    return Persona;
}());
var fede = new Persona(2015, "Federico Fernandez");
console.log(fede.cualEsTuNombre());
console.log(fede.cualEsTuGeneracion());
console.log(fede.cualEsTuEdad());
