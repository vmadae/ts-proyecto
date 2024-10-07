import express from 'express'
import * as moviesServices from '../services/moviesServices'
import toNewMovieEntry from '../utils/validationRequestUtils'

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
router.post('/', (req, res) => {

    try {
        const newMovieEntry = toNewMovieEntry(req.body)

        const addedMovieEntry = moviesServices.addMovie(newMovieEntry)

        res.json(addedMovieEntry)
        
    } catch (e) {
        res.status(400).send('Error')
    }
    
})

export default router