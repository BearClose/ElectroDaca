

export default class VElectrodomestico {
    constructor(app) {
        this.app = app
        this.electrodomesticosTabla = document.getElementById("electrodomesticos-tabla")

        this.mayorInicial = document.getElementById("mayor-inicial")

        this.btnAgregarLb = document.getElementById("btn-agregar-lb");
        this.btnAgregarLm = document.getElementById("btn-agregar-lm");

        this.btnAgregarLb.addEventListener("click", (e) => {
            e.preventDefault()
            this.ocultar();
            this.app.vLineaBlanca.mostrar()
        });

        this.btnAgregarLm.addEventListener("click", (e) => {
            e.preventDefault()
            this.ocultar();
            this.app.vLineaMarron.mostrar()
        });

    }
    ocultar() {
        this.electrodomesticosTabla.hidden = true
    }

    mostrar() {
        this.electrodomesticosTabla.hidden = false
        
    }

    reportarLinea(linea, tipo) {
        console.log(linea);
        this.electrodomesticosTabla.innerHTML += `
        <tr>
            <td>${String(linea.codigo)}</td>
            <td>${String(tipo)}</td>
            <td>${String(linea.precioTotal().toFixed(2))} $</td>
            <td>${String(linea.precioBase().toFixed(2))} $</td>
            <td>${String(linea.inicial().toFixed(2))} $</td>
            <td>${String(linea.resta().toFixed(2))} $</td>
            <td>${String(linea.giros())}</td>
            <td>${String(linea.montoGiro().toFixed(2))} $</td>
        </tr>
    `;

        this.app.tienda.procesarLinea(linea)

        this.mayorInicial.innerHTML = this.app.tienda.lineaQueProporcionaMasDinero()
    }
}