import { Usuario } from '../models/entities/Usuario.model.js'
import { usuariosRepository } from '../repositories/usuarios.repository.js'

class UsuariosService {
  constructor(usuariosRepository) {
    this.usuariosRepository = usuariosRepository
  }

  async registrar(datosUsuario) {
    const usuario = new Usuario(datosUsuario)
    await this.usuariosRepository.create(usuario)
    return usuario
  }
}

export const usuariosService = new UsuariosService(usuariosRepository)