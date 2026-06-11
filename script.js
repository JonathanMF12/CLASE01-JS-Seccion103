

// var x =15;

let nombre = "Jonathan";

console.log("mi nombre es: "+nombre);

let alumnos = ["javier", "claudio", "Carlos", "Eric", "Jose"];

console.log(alumnos);

for(let i = 0; i < alumnos.length ;i++){
    console.log(alumnos[i]);
}

// ejercicio de validacion

let edad = Number(prompt("ingresa tu edad"));
    console.log("Ingesa tu edad: ");
if(edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}