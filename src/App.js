import Cl_Tienda from "./Modelo/MTienda.js"

import VElectrodomestico from "./Vista/VElectrodomestico.js"
import VLineaBlanca from "./Vista/VLineaBlanca.js"
import VLineaMarron from "./Vista/VLineaMarron.js"

export default class App {
  constructor() {
    this.tienda = new Cl_Tienda();
     this.vElectrodomestico = new VElectrodomestico(this)
     this.vLineaBlanca = new VLineaBlanca(this)
     this.vLineaMarron = new VLineaMarron(this)
  }
}