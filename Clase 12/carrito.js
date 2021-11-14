import { productos } from "./lista.js";

let carrito = [];
const guardar = window.localStorage;

const renderCarrito = () => {
    $('#carrito').empty();
    const nuevoCarrito = [...new Set(carrito)];
    nuevoCarrito.forEach((item) => {
        const articulo = productos.filter((artProductos) => {
            return artProductos.id === parseInt(item);
        });
        $(`#carrito`).append(`
        <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${articulo.imagen} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${articulo.nombre}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${articulo.precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
        </div>`);
    } 
    );
        $(`#total`).textContent = updateShoppingCartTotal();    
}

const updateShoppingCartTotal = () =>{
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
  
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  
    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
        '.shoppingCartItemPrice'
      );
      const shoppingCartItemPrice = Number(
        shoppingCartItemPriceElement.textContent.replace('$', '')
      );
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
        '.shoppingCartItemQuantity'
      );
      const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
      );
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
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

$(`#vaciar`).click(vaciarCarrito);

function comprar(){
    var result = confirm("Confirma la compra?");
    if (result == false){
        return
    };
    vaciarCarrito();
}

$(`#comprar`).click(comprar);


$('.shoppingCartItemQuantity').change(quantityChanged);

function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
  }

$('.buttonDelete').click(removeShoppingCartItem);

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

export { carrito, renderCarrito, guardarCarrito, cargarCarrito, vaciarCarrito, comprar, quantityChanged, removeShoppingCartItem, updateShoppingCartTotal };