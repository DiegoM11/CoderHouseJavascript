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

//Se le pide al usuario que ingrese el nombre del producto
let nombre = prompt("Ingrese el nombre el producto buscado: ");

// Metodo para hallar un producto por nombre
const findOne = (nombre) => {

    const producto = productos.find( producto => producto.nombre === nombre)

    if (!producto) {
        return (`No existe ${nombre}`)
    }

    return JSON.stringify(producto)
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

// Busco un producto por su nombre
console.log(findOne(nombre))
alert(findOne(nombre))

// Obtener la lista completa de productos
console.log(getAll())
