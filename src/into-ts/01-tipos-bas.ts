/*
    *TypeScript: Lenguaje con tipos estaticos que permite detectar errores
    *de asignación en tiempo de desarollo
*/
var num1 = 23
let num2 = 'rcr'
const num3 = 34

let version:number = 2.2 //*Se establece de tipo numerico
//?version = '3.3' no se puede cambiar el valor, es decir no es dinamico
version = 23

let nombre:string = 'Ulises' //*Tipo cadena
let activo:boolean = true //* Tipo booleano

let matricula:number|string|boolean = 1234 //?De esta manera se puede establer diferne tipos de datos a una var
                                           //?con el simbolo |
matricula = '1234abc'                      //?Se cambia a string

let vector:number[]=[1,2,3,4] //*Arreglos

vector.push(23)
console.log(vector);