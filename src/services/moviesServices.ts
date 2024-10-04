import { MovieEntry } from '../interfaces/moviesInterfaces'
import moviesData from './movies.json'

const movies: Array<MovieEntry> = moviesData as Array<MovieEntry>

export const getEntries = (): MovieEntry[] => movies

export const findById = (id: number) : MovieEntry | undefined => {
    const entry = movies.find(d => d.id = id)
    return entry
}

export const addEntry = null