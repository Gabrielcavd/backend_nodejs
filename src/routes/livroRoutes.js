import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router.get("/livros", LivroController.listarLivros);
router.post("/livros", LivroController.addLivro);
router.put("/livros/:id", LivroController.updateLivro);
router.delete("/livros/:id", LivroController.deleteLivro);
router.get("/livros/:id", LivroController.buscarLivro);

export default router;