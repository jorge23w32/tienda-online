import {Producto} from "./Producto.js";

const productos = [
new Producto('Manzanas', 20, 'Frutas'),
        new Producto('Peras', 18, 'Frutas'),
        new Producto('Queso', 85, 'Lácteos'),
        new Producto('Yogurt', 30, 'Lácteos'),
        new Producto('Televisor', 250, 'Electrónicos'),
        new Producto('Audífonos', 120, 'Electrónicos'),
        new Producto('Camiseta', 99, 'Ropa'),
        new Producto('Zapatos', 200, 'Calzado'),
        new Producto('Jabón', 8, 'Limpieza'),
        new Producto('Champú', 65, 'Higiene'),
];
console.log('Productos Actuales:\n');
productos.forEach(producto => console.log(producto.toString()));
// Filtro por productos
const productosFiltro = productos.filter((producto) => producto.precio <= 100);
console.log("Productos de Menos de $100 pesos\n");
productosFiltro.forEach(producto => console.log(producto.toString()));

//Productos Filtrados Alfabéticamente
const productosAlfabeticamente =  productosFiltro.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos Ordenados Alfabeticamente\n");
productosAlfabeticamente.forEach(producto => console.log(producto.toString()));
let nombreProductos = [];
productosAlfabeticamente.forEach( producto => {
    nombreProductos.push(producto.nombre);
})
console.log('Nombre de los Productos\n');
nombreProductos.forEach(nombre => console.log(`Nombre: ${nombre}`));
