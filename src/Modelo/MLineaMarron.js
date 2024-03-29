import Cl_Electrodomestico from "./MElectrodomestico.js"

export default class Cl_LineaMarron extends Cl_Electrodomestico {
    constructor (codigo, tipo){
        super (codigo)
        this.tipo = tipo
    }
    precioBase(){
        if (this.tipo===1){
            this.electrodomestico = "TV"
            return 200
        } else if (this.tipo===2){
            this.electrodomestico = "Camara"

            return 100
        } else if(this.tipo===3){
            this.electrodomestico = "Sonido"

            return 150
        } else {
            return 0
        }
    }
    iva(){
        return this.precioBase() * 0.16
    }
    precioTotal(){
        return this.precioBase() + this.iva()
    }
    inicial(){
        return this.precioTotal() * 0.30
    }
    giros(){
        if (this.resta() < 150){
            return 12
        }
        else {
            return 24
        }
    }
}
