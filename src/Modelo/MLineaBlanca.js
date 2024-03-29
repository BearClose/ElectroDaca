import Cl_Electrodomestico from "./MElectrodomestico.js";
export default class Cl_LineaBlanca extends Cl_Electrodomestico {
    constructor(codigo, precio) {
        super(codigo);
        this.precio = precio;
    }
    precioBase() {
        return this.precio
    }
    iva() {
        return this.precio * 0.16;
    }
    precioTotal() {
        return this.precio + this.iva();
    }
    inicial() {
        return this.precioTotal() * 0.5;
    }
    giros() {
        if (this.resta() > 500) {
            return 24;
        } else if (this.resta() >= 300 && this.resta() <= 500) {
            return 12;
        } else {
            return 6;
        }
    }
}
