import { usuariosDaoMemoria } from '../daos/usuarios.dao.memoria.js'
import { GenericRepository } from './GenericRepository.js'

export const usuariosRepository = new GenericRepository(usuariosDaoMemoria)