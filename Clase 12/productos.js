import {productos} from './lista.js';
import {renderCarrito, cargarCarrito, updateShoppingCartTotal} from './carrito.js'; 

const renderProductos = () => {
    productos.forEach((dato) => {     
    $(`#items`).append(`
        <div class="card col-sm-4">
            <div class="card-body">
              <h5 class="card-title">${dato.nombre}</h5>
              <img src="${dato.imagen}" class="img-fluid" alt="${dato.nombre}">
              <p class="card-text"> $${dato.precio}</p>
                <div>
                  <button class="btn btn-success buttonAdd" id="btn-add" type="button" marcador=${dato.id}>Agregar</button>
                </div>
            </div>
        </div>
    `);    
    });
    $(`#btn-add`).click(agregarProducto());
}

function agregarProducto(prod) {
      carrito.push(prod.target.attr('marcador'))
      updateShoppingCartTotal();
      renderCarrito();
      guardarCarrito();
  }

/*function agregarProducto() {
    $(`#btn-add`).click(function(){
        let marcador = $(this).attr('marcador');
        let item = productos.find(producto => producto.id == marcador);
        productos.push(item);
        console.log(item)
        renderCarrito();
        cargarCarrito();
        updateShoppingCartTotal();
    });
}*/

console.log(agregarProducto());

/*function borrarProd(prod) {
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
}*/

cargarCarrito();
renderProductos();
updateShoppingCartTotal();
renderCarrito();

