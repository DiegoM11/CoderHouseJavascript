let num = Number(prompt('Ingrese un numero: '))

for( let i = 0; i < 10; i++){
    let resultado = num + (i*2);
    console.log(resultado);
}


let texto = prompt("Ingresar una palabra: ");

while(texto != "ESC" ){
    alert("Usted ingresó "+ texto);
    texto = prompt("Para salir de este loop debe ingresar la palabra clave!: ");
}

let cantidad = Number(prompt('Ingrese un numero: '))

for( let i = 0; i < cantidad; i++){
    console.log('Hola');
}
