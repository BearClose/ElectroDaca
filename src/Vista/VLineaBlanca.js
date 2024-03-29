import Cl_LineaBlanca from "../Modelo/MLineaBlanca.js"

export default class VLineaBlanca {
    constructor(app) {
        this.app = app
        this.lineaBlancaForm = document.getElementById("linea-blanca-form")
        this.ocultar()
        this.codigo = document.getElementById("codigo-lb")
        this.tipo = document.getElementById("tipo-linea-lb")
        this.precio = document.getElementById("precio-lb")
        this.btnAceptar = document.getElementById("btn-aceptar-lb")

        this.btnAceptar.addEventListener("click", (e) => this.agregarLinea(e))

    }
    mostrar() {
        this.lineaBlancaForm.hidden = false
    }
    ocultar() {
        this.lineaBlancaForm.hidden = true
    }
    agregarLinea(e) {
        e.preventDefault()
        const lineaBlanca = new Cl_LineaBlanca(
            this.codigo.value,
            parseInt(this.precio.value)
        )
        

        this.app.tienda.procesarLinea(lineaBlanca)
        this.app.vElectrodomestico.reportarLinea(lineaBlanca, 1);

        this.ocultar()

        this.app.vElectrodomestico.mostrar()
    }
}