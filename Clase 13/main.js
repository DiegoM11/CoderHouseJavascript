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
let htmltotal = document.getElementById('total');
const guardar = window.localStorage;

//Animaciones con JQuery
$("h1").fadeOut("slow", function(){
    $("h1").fadeIn(4000);
});

$("h2").css("color", "black")
        .slideUp(1000)
        .slideDown(1000);

const renderProductos = () => {
  for (const producto of productos) {     
  $(`#items`).append(`
      <div class="card col-sm-4">
          <div class="card-body" id="div1">
            <h5 class="card-title">${producto.nombre}</h5>
            <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
            <p class="card-text"> $${producto.precio}</p>
              <div>
                <button class="btn btn-success buttonAdd" type="button" marcador=${producto.id}>Agregar</button>
              </div>
          </div>
      </div>
  `);
  }
  $('.buttonAdd').click(agregarProducto);
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

/*function modificarCantidad() {
  const marcador = $(this).attr('marcador');
  const cantidad = $(this).val();
  carrito = carrito.map((item) => {
      if (item === marcador) {
          return cantidad;
      }
      return item;
  });
  renderCarrito();
  calcularTotal();
  guardarCarrito();
}*/

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
      <div class="row shoppingCartItem">
      <div class="col-6">
          <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <h6 class="shopping-cart-item-title ItemTitle text-truncate ml-3 mb-0">${articulo[0].nombre}</h6>
          </div>
      </div>
      <div class="col-2">
      <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
          <p class="item-price mb-0 ItemPrice">${articulo[0].precio}</p>
      </div>
      </div>
      <div class="col-4">
          <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
              <input class="shopping-cart-quantity-input ItemQuantity" type="number" value=${cantidad}>
              <button class="btn btn-danger buttonDelete" type="button" marcador=${articulo[0].id}>X</button>
          </div>
      </div>
      </div>`);
  } 
  );
  //$('.ItemQuantity').change(modificarCantidad);
  $('.buttonDelete').click(borrarProducto);
}

function calcularTotal() {
  total = 0;
  carrito.forEach((item) => {
      const valor = productos.filter((itemProductos) => {
          return itemProductos.id === parseInt(item);
      });
      total = total + valor[0].precio;
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
