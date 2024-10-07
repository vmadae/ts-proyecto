//Se puede hacer la validación con express 
import { NewMovieEntry } from "../interfaces/moviesInterfaces";
import { Categoria } from "../enums/enums";

const toNewMovieEntry = (object : any) : NewMovieEntry => {
    const parseDescription = (descriptionFromRequest: any) : string => {
        if (typeof descriptionFromRequest !== 'string') {
            throw new Error('Incorrect or missing description')
        }

        return descriptionFromRequest
    }

    const parseDate = (dateFromRequest: any): string => {
        if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
            throw new Error('Incorrect or missing date')
        }

        return dateFromRequest
    }

    const parseString = (stringFromRequest: any): string => {
        if(!isString(stringFromRequest)){
            throw new Error('Incorrect or missing string')
        }

        return stringFromRequest
    }

    const isString = (string: string): boolean => {
        return typeof string !== string
    }

    const isDate = (date: string): boolean => {
        return Boolean(Date.parse(date))
    }

    const parseCategoria = (categoriaFromRequest: any): Categoria => {
        if(!isString(categoriaFromRequest) || !isCategoria(categoriaFromRequest)){
            throw new Error('Incorrect or missing Category')
        }

        return categoriaFromRequest
    }

    const isCategoria = (categoria: any): boolean => {
        return Object.values(Categoria).includes(categoria)
    }

    const newEntry: NewMovieEntry = {
        nombreOriginal: parseString(object.nombreOriginal),
        nombreEspanol: parseString(object.nombreEspanol),
        categoria: parseCategoria(object.categoria),
        descripcion: parseDescription(object.descripcion),
        fechaEstreno: parseDate(object.fechaEstreno)
    }

    return newEntry
}

export default toNewMovieEntry