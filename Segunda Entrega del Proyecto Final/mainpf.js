import {productos} from './productos.js';

let carrito = [];
let total = 0;
const guardar = window.localStorage;

const htmlProductos = () => {
    productos.forEach((dato) => {     
    $(`#items`).prepend(`
        <div class="card col-sm-4">
            <div class="card-body">
                <h5 class="card-title">${dato.nombre}</h5>
                <img src="${dato.imagen}" class="img-fluid" alt="${dato.nombre}">
                <p class="card-text"> $${dato.precio}</p>
                <input type="text" class="form-control" id="cantidad" placeholder="Cantidad">
                <button class="btn btn-primary" id="btn-cant${dato.id}">+</button>
                
            </div>
        </div>
    `);
    $(`btn-cant${dato.id}`).on('click', aumentarCantidad());
    });
}

//<button class="btn btn-primary" id="btn-add" marcador="${dato.id}">Agregar</button>
//$(`#btn-add`).click(agregarProducto());

const renderCarrito = () => {
    $('#carrito').empty();
    const nuevoCarrito = [...new Set(carrito)];
    nuevoCarrito.forEach((item) => {
        const articulo = productos.filter((artProductos) => {
            return artProductos.id === parseInt(item);
        });
        const cantidad = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        $(`#carrito`).append(`
            <li class="list-group-item text-center mx-6">
                <span class="badge badge-primary">${cantidad}</span>
                ${articulo[0].nombre}
                <span class="badge badge-primary">$${articulo[0].precio}</span>
            </li>
            <div>
                <button class="btn btn-danger mx-3" id="btn-eliminar">Eliminar</button>
            </div>
            
        `);
        //const btnEliminar = document.getElementById('btn-eliminar');
        //btnEliminar.dataset.item = item;
        //$(`#btn-eliminar`).click(borrarProd());
        //$(`#total`).textContent = calcularTotal();
    }
    );  
}  

function calcularTotal() {
    total = 0;
    carrito.forEach((item) => {
        const valor = productos.filter((itemProductos) => {
            return itemProductos.id === parseInt(item);
        });
        total = total + valor[0].precio;
    });
    $(`#total`).textContent = total;
}


function guardarCarrito () {
    guardar.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarrito () {
    if (guardar.getItem('carrito') !== null) {
        carrito = JSON.parse(guardar.getItem('carrito'));
    }
}

function agregarProducto() {
    $(`#btn-cant`).click(function(prod) {
        carrito.push(prod.target.getAttribute('marcador'));
        calcularTotal();
        renderCarrito();
        guardarCarrito();
    });
}

function aumentarCantidad(prod) {
    const id = prod.target.dataset.item;
    carrito = carrito.map((carritoId) => {
        return carritoId === id ? parseInt(carritoId) + 1 : carritoId;
    });
    calcularTotal();
    renderCarrito();
    guardarCarrito();
}

function borrarProd(prod) {
    var pregunta = confirm("Desea eliminar el producto?");
    if (pregunta == false){
        return
    }
    const id = prod.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderCarrito();
    calcularTotal();
    guardarCarrito();
}


function vaciarCarrito() {
    carrito = [];
    renderCarrito();
    //calcularTotal();
    localStorage.clear();

}

$(`#vaciar`).click(vaciarCarrito);

function comprar(){
    var result = confirm("Confirma la compra?");
    if (result == false){
        return
    };
    vaciarCarrito();
}

$(`#comprar`).click(comprar);


cargarCarrito();
htmlProductos();
//calcularTotal();
renderCarrito();

/*const input = $(`#input`);

function buscar(texto) {
    texto = input.value;
    productos.forEach((dato) => {
        if (dato.nombre.toLowerCase().includes(texto.toLowerCase())){
            htmlProductos(texto);
        }
    });
}


$(`#boton`).click(buscar());*/


