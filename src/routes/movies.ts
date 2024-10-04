import express from 'express'
import * as moviesServices from '../services/moviesServices'

const router = express.Router()

//Obtener listado de peliculas
router.get('/', (_req , res) => {
    res.json(moviesServices.getEntries())
})

//Buscar por id de pelicula
router.get('/:id', (req , res) => {
    const movie = moviesServices.findById(Number(req.params.id))
    res.json(movie)
})

//Añadir pelicula
router.post('/', (_req, res) => {
    res.send('Pelicula guardada')
})

export default router