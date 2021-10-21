class Producto {
    constructor(nombre, precio, stock) {
        this.nombre  = nombre.toLowerCase();
        this.precio  = precio;
        this.stock = parseInt(stock);
    }
}

// Lista de productos
const productos = []

// Metodo que retorna la lista de productos
const getAll = () => {
    return productos;
}

// Metodo para agregar un producto a la lista
const create = (item) => {
    productos.push(item)
}

//Lista del carrito
const carrito = []

//Metodo que retorna los productos del carrito
const Obtener = () => {
    return carrito;
}

// Metodo para agregar un producto al carrito
const agregarProducto = (prod) => {
    carrito.push(prod)
}

// crear un nuevo producto
const producto1 = new Producto('Leche', 20, 120)
const producto2 = new Producto('Harina', 35, 200)
const producto3 = new Producto('Huevos', 200, 400)
const producto4 = new Producto('Carne', 800, 500)


// agregar producto a la lista
create(producto1)
create(producto2)
create(producto3)
create(producto4)

// Agrego un producto al carrito
agregarProducto(producto1)
agregarProducto(producto3)


// Obtener la lista completa de productos
console.log(getAll())
console.log(Obtener())
