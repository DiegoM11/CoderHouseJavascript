const productos = [{ id: 1, nombre: 'Camisa', precio: 500 },
{ id: 2, nombre: 'Gorra', precio: 200 },
{ id: 3, nombre: 'Pantalon', precio: 700 },
{ id: 4, nombre: 'Zapatos', precio: 1300 },
{ id: 5, nombre: 'Bolso', precio: 1000 },
{ id: 6, nombre: 'Libro', precio: 100 }];

for ( const producto of productos) {
    let div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `<div class="producto">
        <h2> ${producto.nombre}</h2>
        <p>Precio: ${producto.precio}</p>
        <button id="comprar">Comprar</button></div>`;
    document.body.appendChild(div);
}

function comprar(){
    var result = confirm("Confirma la compra?");
    if (result == false){
        return
    }
    alert("¡Compra exitosa!");
}

const htmlBotonComprar = document.getElementById('comprar');
htmlBotonComprar.addEventListener('click', comprar);
