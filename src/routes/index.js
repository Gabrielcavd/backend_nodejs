import express from "express";
import livros from "./livroRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Livraria teste');
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes

