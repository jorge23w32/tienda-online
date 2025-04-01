export class Producto {
    constructor(nombre, precio,categoria ) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    toString() {
        return `Nombre: ${this.nombre}\nPrecio: $${this.precio}\nCategoria: ${this.categoria}`
    }
}
