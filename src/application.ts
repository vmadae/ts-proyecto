import express from 'express'
import movieRoutes from './routes/movies'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => { //req es un parametro que no se utiliza, si se coloca _ se ignora el parámetro
    console.log('Ping true')
    res.send('pong')
})

app.use('/api/movies', movieRoutes)

app.listen(PORT, () => {
    console.log(`Server runnin on port ${PORT}`)
})