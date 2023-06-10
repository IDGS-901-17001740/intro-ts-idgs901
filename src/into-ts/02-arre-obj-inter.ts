//!No se puede declarar una variable con el mismo nombre
let vector1:Array<number> = [4,3,4,3]
vector1.push(10)
vector1[1] = 23
for(let tem of vector1)
    console.log(tem)

let tem:(number|string)[] = [] // ? Arreglos con diferentes tipos de datos
tem.push('mario')
tem.push(123)
console.log(tem)

//? Definición de interfaces, aqui podemos definir el tipo de dato de las propiedades
interface Alumno{
    matricula?:number //? Se usa ? para decir que es opcional como en dart
    nombre:string
    edad:number
    email:string
}
//? Objetos 
const alumno:Alumno= { //? Para hacer uso se pone : y el nombre de la interface
    matricula:12345,
    nombre: 'mario',
    edad: 23,
    email: 'mario@gmail.com'
}

console.table(alumno)