
import Cl_LineaMarron from "../Modelo/MLineaMarron.js";

export default class VLineaMarron {
    constructor(app) {
        this.app = app
        this.lineaMarronForm = document.getElementById("linea-marron-form")

        this.ocultar()

        this.codigo = document.getElementById("codigo-lm")
        this.precioTipo = document.getElementById("precio-tipo-lm")
        this.btnAceptar = document.getElementById("btn-aceptar-lm")

        this.btnAceptar.addEventListener("click", (e) => this.agregarLinea(e))

    }
    ocultar() {
        this.lineaMarronForm.hidden = true
    }
    mostrar() {
        this.lineaMarronForm.hidden = false
    }

    agregarLinea(e) {
        e.preventDefault()
        const lineaMarron = new Cl_LineaMarron(
            this.codigo.value,
            parseInt(this.precioTipo.value)
        )
        

        this.app.tienda.procesarLinea(lineaMarron)
        this.app.vElectrodomestico.reportarLinea(lineaMarron, 2);

        this.ocultar()

        this.app.vElectrodomestico.mostrar()
    }
}