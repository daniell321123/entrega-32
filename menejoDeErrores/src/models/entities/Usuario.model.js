import { Id } from '../Id.model.js'
import { obligatorio, validarEdad, validarNombre } from '../validations/validaciones.js'

export class Usuario {
  constructor({ id = new Id(), nombre, edad }) {
    this.id = id

    obligatorio(nombre, 'nombre')
    this.nombre = validarNombre(nombre)

    obligatorio(edad, 'edad')
    this.edad = validarEdad(edad)
  }
}