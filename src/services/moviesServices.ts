import { MovieEntry, NewMovieEntry } from '../interfaces/moviesInterfaces'
import moviesData from './movies.json'

const movies: Array<MovieEntry> = moviesData as Array<MovieEntry>

export const getEntries = (): MovieEntry[] => movies

export const findById = (id: number) : MovieEntry | undefined => {
    const entry = movies.find(d => d.id = id)
    return entry
}

export const addMovie = (newMovieEntry: NewMovieEntry): MovieEntry => {
    const newMovie = {
        id: Math.max(...movies.map(d => d.id)) + 1,
        ...newMovieEntry
    }

    movies.push(newMovie)

    return(newMovie)
}