import movieCategoria from '../../types';

export interface MovieEntry{
    id: number
    nombreOriginal: string
    nombreEspanol: string
    categoria: movieCategoria.Categoria
    descripcion: string
    fechaEstreno: string
}