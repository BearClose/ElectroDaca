export default class Cl_Electrodomestico {

    constructor(codigo) {
        this.codigo = codigo;
    }

    
    precioTotal() {
        return 0
    }
    inicial() {
        return 0
    }
    resta() {
        return this.precioTotal() - this.inicial()
    }
    giros() {
        return 0
    }
    montoGiro() {
        return this.resta() / this.giros()
    }


}