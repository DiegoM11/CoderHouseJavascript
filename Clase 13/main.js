let carrito = [];
let total = 0;
let htmltotal = document.getElementById('total');
const guardar = window.localStorage;
const URL = "db/productos.json";

const productos = [
    {
        id: 1,
        nombre: 'Charmander - 46/102 - Common 1st Edition',
        precio: 96.99,
        imagen: 'img/charmander.jpg'
    },
    {
        id: 2,
        nombre: 'Squirtle - 63/102 - Common 1st Edition',
        precio: 112.99,
        imagen: 'img/squirtle.jpg'
    },
    {
        id: 3,
        nombre: 'Bulbasaur - 44/102 - Common 1st Edition',
        precio: 439.99,
        imagen: 'img/bulbasaur.jpg'
    },
    {
        id: 4,
        nombre: 'Pikachu - 58/102 - Common 1st Edition',
        precio: 179.99,
        imagen: 'img/pikachu.jpg'
    },
    {
        id: 5,
        nombre: 'Eevee - 51/64 - Common 1st Edition',
        precio: 7.99,
        imagen: 'img/eevee.jpg'
    },
    {
        id: 6,
        nombre: 'Meowth - 56/64 - Common 1st Edition',
        precio: 1.48,
        imagen: 'img/meowth.jpg'
    }
    

]

//Animaciones con JQuery
$("h1").fadeOut("slow", function(){
    $("h1").fadeIn(4000);
});

$("h2").css("color", "black")
        .slideUp(1000)
        .slideDown(1000);

const renderProductos = () => {
    $(document).ready(function(){
        $.getJSON(URL, (response, status) => {
            
            if ( status !== 'success' ) {
                throw new Error('No se pudo cargar la información');
            }

            for ( const producto of response ) {
                $(`#items`).append(`
                <div class="card col-sm-4">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
                      <p class="card-text"> $${producto.precio}</p>
                        <div>
                          <button class="btn btn-success botonAgregar" id="btn-add" type="button" marcador=${producto.id}>Agregar</button>
                        </div>
                    </div>
                </div>
            `);
            }
            $('.botonAgregar').click(agregarProducto);
        }); 
    });
}



function agregarProducto() {
      const marcador = $(this).attr('marcador');
      carrito.push(marcador);
      console.log(carrito);
      calcularTotal();
      renderCarrito();
      guardarCarrito();
}

function borrarProducto(){
  const marcador = $(this).attr('marcador');
  carrito = carrito.filter((item) => {
      return item !== marcador;
  });
  renderCarrito();
  calcularTotal();
  guardarCarrito();
}

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
                <div class="row Item">
                <div class="col-6">
                    <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <h6 class="shopping-cart-item-title nombreItem text-truncate ml-3 mb-0">${articulo[0].nombre}</h6>
                    </div>
                </div>
                <div class="col-2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="item-price mb-0 precioItem">${articulo[0].precio}</p>
                </div>
                </div>
                <div class="col-4">
                    <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                        <input class="shopping-cart-quantity-input ItemCantidad" type="number" value=${cantidad}>
                        <button class="btn btn-danger botonBorrar" type="button" marcador=${articulo[0].id}>X</button>
                    </div>
                </div>
                </div>`);
            });
        $('.botonBorrar').click(borrarProducto);        
    }

function calcularTotal() {
    total = 0;
    carrito.forEach((item) => {
      const valor = productos.filter((itemProductos => itemProductos.id === parseInt(item)));
      const cantidad = carrito.reduce((total, itemId) => {
        return itemId === item ? total += 1 : total;
    }, 0); 
      console.log(cantidad);
      total = cantidad * valor[0].precio;
  });
  htmltotal.textContent = total.toFixed(2);
}

function guardarCarrito () {
  guardar.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarrito () {
  if (guardar.getItem('carrito') !== null) {
      carrito = JSON.parse(guardar.getItem('carrito'));
  }
}

function vaciarCarrito() {
  carrito = [];
  renderCarrito();
  calcularTotal();
  localStorage.clear();

}

$('#vaciar').click(vaciarCarrito);

function comprar(){
  var result = confirm("Confirma la compra?");
  if (result == false){
      return
  }
  vaciarCarrito();
}

$('#comprar').click(comprar);


cargarCarrito();
renderProductos();
calcularTotal();
renderCarrito();
