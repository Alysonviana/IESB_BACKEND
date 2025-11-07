const Projeto = require('../models/ProjetoModel');

exports.create = async (req, res) => {
  try {
    const projeto = new Projeto(req.body);
    await projeto.save();
    res.status(201).json(projeto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const projetos = await Projeto.find();
  res.json(projetos);
};

exports.getById = async (req, res) => {
  try {
    const projeto = await Projeto.findById(req.params.id);
    if (!projeto) return res.status(404).json({ message: 'Projeto não encontrado' });
    res.json(projeto);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.update = async (req, res) => {
  try {
    const projeto = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!projeto) return res.status(404).json({ message: 'Projeto não encontrado' });
    res.json(projeto);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.delete = async (req, res) => {
  try {
    const projeto = await Projeto.findByIdAndDelete(req.params.id);
    if (!projeto) return res.status(404).json({ message: 'Projeto não encontrado' });
    res.json({ message: 'Projeto removido com sucesso' });
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};
