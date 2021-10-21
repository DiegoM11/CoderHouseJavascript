const productos = [
    {
        id: 1,
        nombre: 'Charmander - 46/102 - Common 1st Edition',
        precio: 96.99,
        imagen: 'charmander.jpg'
    },
    {
        id: 2,
        nombre: 'Squirtle - 63/102 - Common 1st Edition',
        precio: 112.99,
        imagen: 'squirtle.jpg'
    },
    {
        id: 3,
        nombre: 'Bulbasaur - 44/102 - Common 1st Edition',
        precio: 439.99,
        imagen: 'bulbasaur.jpg'
    },
    {
        id: 4,
        nombre: 'Pikachu - 58/102 - Common 1st Edition',
        precio: 179.99,
        imagen: 'pikachu.jpg'
    },
    {
        id: 5,
        nombre: 'Eevee - 51/64 - Common 1st Edition',
        precio: 7.99,
        imagen: 'eevee.jpg'
    },
    {
        id: 6,
        nombre: 'Meowth - 56/64 - Common 1st Edition',
        precio: 1.48,
        imagen: 'meowth.jpg'
    }
    

];

let carrito = [];
let total = 0;
const htmlItems = document.getElementById('items');
const elementoCarrito = document.getElementById('carrito');
const htmlTotal = document.getElementById('total');
const htmlBotonVaciar = document.getElementById('vaciar');
const htmlBotonComprar = document.getElementById('comprar');
const guardar = window.localStorage;

function htmlProductos() {
    productos.forEach((dato) => {
        const div = document.createElement('div');
        div.classList.add('card', 'col-sm-5');
        const body = document.createElement('div');
        body.classList.add('card-body');
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = dato.nombre;
        const img = document.createElement('img');
        img.classList.add('img-fluid');
        img.setAttribute('src', dato.imagen);
        const precio = document.createElement('p');
        precio.classList.add('card-text');
        precio.textContent = '$' + dato.precio;
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary');
        button.textContent = '+';
        button.setAttribute('marcador', dato.id);
        button.addEventListener('click', agregarProducto);
        body.appendChild(img);
        body.appendChild(title);
        body.appendChild(precio);
        body.appendChild(button);
        div.appendChild(body);
        htmlItems.appendChild(div);
    });
}

function htmlCarrito() {
    elementoCarrito.textContent = '';
    const nuevoCarrito = [...new Set(carrito)];
    nuevoCarrito.forEach((item) => {
        const articulo = productos.filter((artProductos) => {
            return artProductos.id === parseInt(item);
        });
        const cantidad = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const htmlArt = document.createElement('li');
        htmlArt.classList.add('list-group-item', 'text-right', 'mx-2');
        htmlArt.textContent = `${cantidad} x ${articulo[0].nombre} : ${articulo[0].precio}$`;
        const borrar = document.createElement('button');
        borrar.classList.add('btn', 'btn-danger', 'mx-5');
        borrar.textContent = 'X';
        borrar.style.marginLeft = '1rem';
        borrar.dataset.item = item;
        borrar.addEventListener('click', borrarProd);
        htmlArt.appendChild(borrar);
        elementoCarrito.appendChild(htmlArt);
    });
}

function calcularTotal() {
    total = 0;
    carrito.forEach((item) => {
        const valor = productos.filter((itemProductos) => {
            return itemProductos.id === parseInt(item);
        });
        total = total + valor[0].precio;
    });
    htmlTotal.textContent = total.toFixed(2);
}

function guardarCarrito () {
    guardar.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarrito () {
    if (guardar.getItem('carrito') !== null) {
        carrito = JSON.parse(guardar.getItem('carrito'));
    }
}

function agregarProducto(prod) {
    carrito.push(prod.target.getAttribute('marcador'))
    calcularTotal();
    htmlCarrito();
    guardarCarrito();
    alert("¡Producto agregado!");
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
    htmlCarrito();
    calcularTotal();
    guardarCarrito();
    alert("¡Producto eliminado!");
}

function vaciarCarrito() {
    var preguntavaciar = confirm("Desea vaciar el carrito?");
    if (preguntavaciar == false){
        return
    }
    carrito = [];
    htmlCarrito();
    calcularTotal();
    localStorage.clear();

}

htmlBotonVaciar.addEventListener('click', vaciarCarrito);

function comprar(){
    var result = confirm("Confirma la compra?");
    if (result == false){
        return
    }
    vaciarCarrito();
    alert("¡Compra exitosa!");
}

htmlBotonComprar.addEventListener('click', comprar);


cargarCarrito();
htmlProductos();
calcularTotal();
htmlCarrito();


