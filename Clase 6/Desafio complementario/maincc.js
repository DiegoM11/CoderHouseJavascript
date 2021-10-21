const Productos = [
    {
        nombre: 'Carne',
        precio: 600
    },
    {
        nombre: 'Huevos',
        precio: 250
    },
    {
        nombre: 'Harina',
        precio: 45
    },
    {
        nombre: 'Fideos',
        precio: 55
    },
    {
        nombre: 'Agua',
        precio: 95
    }
]


console.log(Productos.sort( (a,b) => b.precio - a.precio))