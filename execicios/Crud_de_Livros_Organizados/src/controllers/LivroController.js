const express = require('express');
const Livro = require('../models/Livro');
const validateID = require('../validators/IDvalidator');
const { validarCriarLivro, validarAtualizarLivro } = require('../validators/LivroValidator');

const router = express.Router();

// Criar livro
router.post('/livros', validarCriarLivro, async (req, res) => {
  try {
    const livro = new Livro(req.body);
    await livro.save();
    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar livro' });
  }
});

// Listar todos os livros
router.get('/livros', async (req, res) => {
  try {
    const livros = await Livro.find();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar livros' });
  }
});

// Buscar livro por ID
router.get('/livros/:id', validateID, async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livro' });
  }
});

// Atualizar livro
router.put('/livros/:id', validateID, validarAtualizarLivro, async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livro) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
});

// Remover livro
router.delete('/livros/:id', validateID, async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.json({ message: 'Livro removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover livro' });
  }
});


module.exports = router;
