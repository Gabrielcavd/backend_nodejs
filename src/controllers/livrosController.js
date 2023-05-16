import {db} from '../config/db.js'

class LivroController{

    static listarLivros = (_, res) => {
        const q = "SELECT * FROM livros";
        db.query(q, (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })  
    }

    static buscarLivro = (req, res) => {
        let index = req.params.id;
        const q = "SELECT * FROM livros WHERE idlivro = ?" 
        db.query(q, [index], (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })
        
    }

    static addLivro = (req, res) => {
        const { titulo } = req.body;
        const { autor } = req.body;
        const { editora } = req.body;
        const { numeroPaginas } = req.body;
        const q = "INSERT INTO livros (titulo, autor, editora, numeroPaginas) VALUES (?, ?, ?, ?)";
        db.query(q, [titulo, autor, editora, numeroPaginas], (err, data) => {
            if (err) return res.json(err);
            return res.send("O livro foi adicionado com sucesso");
        })
    }

    static updateLivro = (req, res) => {
        let idlivro = req.params.id;
        const { titulo } = req.body;
        const { autor } = req.body;
        const { editora } = req.body;
        const { numeroPaginas } = req.body;

        const q = "UPDATE livros SET titulo = ?, autor = ?, editora = ?, numeroPaginas = ? WHERE idlivro = ?"
        db.query(q, [titulo, autor, editora, numeroPaginas, idlivro], (err, data) => {
            console.log(titulo)
            if (err) return res.json(err);
            return res.send(data);
        })
    }

    static deleteLivro = (req, res) => {
        let idlivro = req.params.id;
        const q = "DELETE FROM livros WHERE idlivro = ?"
        db.query(q, [idlivro], (err, data) => {
            if (err) return res.json(err);
            return res.send(data);
        })
    }
}

export default LivroController