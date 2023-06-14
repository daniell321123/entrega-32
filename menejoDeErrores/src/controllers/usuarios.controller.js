import { usuariosRepository } from '../repositories/usuarios.repository.js'
import { usuariosService } from '../services/usuarios.service.js'

export async function handleGet(req, res, next) {
  try {
    if (req.params.id) {
      const buscado = await usuariosRepository.readOne({ id: req.params.id })
      res.json(buscado)
    } else {
      const usuarios = await usuariosRepository.readMany(req.query)
      res.json(usuarios)
    }
  } catch (error) {
    next(error)
  }
}

export async function handlePost(req, res, next) {
  try {
    const usuario = await usuariosService.registrar(req.body)
    res.status(201).json(usuario)
  } catch (error) {
    next(error)
  }
}

export async function handlePut(req, res, next) {
  try {
    const actualizado = await usuariosRepository.updateOne(req.params.id, req.body)
    res.json(actualizado)
  } catch (error) {
    next(error)
  }
}

export async function handleDelete(req, res, next) {
  try {
    const borrado = await usuariosRepository.deleteOne(req.params.id)
    res.json(borrado)
  } catch (error) {
    next(error)
  }
}