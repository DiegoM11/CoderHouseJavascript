let a = Number(prompt('Ingrese el primer numero de la suma: '));
let b = Number(prompt('Ingrese el segundo numero de la suma: '));

function suma(a, b){
resultado = a + b;
return ('El resultado de la suma es: ' + resultado);
}

console.log(suma(a,b));
alert(suma(a,b));

let c = Number(prompt('Ingrese el primer numero de la resta: '));
let d = Number(prompt('Ingrese el segundo numero de la resta: '));

function resta(c, d){
resultado = c - d;
return ('El resultado de la resta es: ' + resultado);
}

console.log(resta(c,d));
alert(resta(c,d));

let e = Number(prompt('Ingrese el primer numero de la division: '));
let f = Number(prompt('Ingrese el segundo numero de la division: '));

function division(e, f){
if(f == 0){
    return "No se puede dividir por cero";
}
else{
    resultado = e/f;
    return ('El resultado de la division es: ' + resultado);
}
}

console.log(division(e,f));
alert(division(e,f));

let g = Number(prompt('Ingrese el primer numero de la multiplicacion: '));
let h = Number(prompt('Ingrese el segundo numero de la multiplicacion: '));

function multiplicacion(g, h){
    resultado = g * h;
    return ('El resultado de la multipliacion es: ' + resultado);
}

console.log(multiplicacion(g,h));
alert(multiplicacion(g,h));

/*function convertirSigno(a ,b){

}

function raizcuadrada(x){

}

function fraccion(y){

}*/