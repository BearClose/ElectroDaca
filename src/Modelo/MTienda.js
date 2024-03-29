import Cl_LineaBlanca from "./MLineaBlanca.js"
import Cl_LineaMarron from "./MLineaMarron.js"

export default class Cl_Tienda {
    constructor() {
        this.acumDineroLineaBlanca = 0
        this.acumDineroLineaMarron = 0

    }
    procesarLinea (L){
        if(L instanceof Cl_LineaMarron){
            this.acumDineroLineaMarron += L.precioTotal()
        }
        else if (L instanceof Cl_LineaBlanca){
            this.acumDineroLineaBlanca += L.precioTotal()
        }
    }
    lineaQueProporcionaMasDinero(){
        if (this.acumDineroLineaBlanca > this.acumDineroLineaMarron){
            return "Linea Blanca"
        }
        if (this.acumDineroLineaBlanca < this.acumDineroLineaMarron){
            return "Linea Marron"
        }
        if(this.acumDineroLineaBlanca === this.acumDineroLineaMarron){
            return "Ambas lineas"
        }
    }
}