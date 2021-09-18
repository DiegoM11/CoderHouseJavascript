//Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

let num = Number(prompt('Ingrese un numero'));

if(num > 1000){
    alert("El numero ingresado es mayor a 1000")
}
else {
    alert("El numero ingresado es correcto")
};


//Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

let texto = prompt("Diga Hola");

if(texto == "Hola"){
    console.log("Tenemos un ganador!!")
}
else {
    console.log("Siga participando")
};



//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

let numero = Number(prompt("Ingrese un numero"));

if(numero >= 10 && numero <= 50){
    alert("El numero esta dentro del rango buscado")
}
else {
    alert("El numero esta fuera del rango buscado")
};
