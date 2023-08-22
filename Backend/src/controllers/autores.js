import {connectBiblioteca} from "../database/conexionbd";


export const getAutores = async (req, res) => {
    const DBBiblioteca = await connectBiblioteca();
    const resultado = await DBBiblioteca.query('select * from Autores');
    const autor = resultado.recordset;
    console.log(autor)


    res.json(autor);
}
export const getAutorId=(req, res) => {
    res.send('Hello World');
}
export const getAutorCount=(req, res) => {
    res.send('Hello World');
}
export const saveAutor=(req, res) => {
    res.send('Hello World');
}
export const deleteAutor=(req, res) => {
    res.send('Hello World');
}
export const updateAutor=(req, res) => {
    res.send('Hello World');
}