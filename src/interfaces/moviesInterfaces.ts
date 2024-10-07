import { Categoria } from "../enums/enums"

export interface MovieEntry{
    id: number
    nombreOriginal: string
    nombreEspanol: string
    categoria: Categoria
    descripcion: string
    fechaEstreno: string
}

export type NewMovieEntry = Omit<MovieEntry, 'id'>