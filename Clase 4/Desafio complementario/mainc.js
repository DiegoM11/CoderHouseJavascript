let jubilado = prompt('Usted es jubilado/a? (si/no): ');

function esJubilado(jubilado){
    if(jubilado.toLowerCase() == 'si'){
        return true;
    }
    else{
        return false;
    }
}

console.log(esJubilado(jubilado));  

let banco = prompt('Ingrese su banco: ');

function descuentoBanco(banco){
    if(banco.toLowerCase() == 'santander'){
        return true;
    }
    else{
        return false;
    }
}

console.log(descuentoBanco(banco));

let monto = prompt('Ingrese el monto: ');

function beneficio(monto){
    let descuentototal = monto * (25/100);
    let descuentojubilado = monto * (15/100);
    if(esJubilado(jubilado) == true && descuentoBanco(banco) == true){
        resultado1 = monto - descuentototal;
        }
    else if(esJubilado(jubilado) == true && descuentoBanco(banco) == false ){
        resultado2 = monto - descuentojubilado;
        return ('Usted solo cuenta con el beneficio del 15% de descuento, el precio final es ' + '$' + resultado2 + ' pesos');
        }
    else{
        return ('Usted no cuenta con ningun beneficio, el precio final es ' + '$' + monto + ' pesos');
    }
    return ('Usted cuenta con el beneficio del 25% de descuento, el precio final es ' + '$' + resultado1 + ' pesos');  
}

console.log(beneficio(monto));
alert(beneficio(monto));

