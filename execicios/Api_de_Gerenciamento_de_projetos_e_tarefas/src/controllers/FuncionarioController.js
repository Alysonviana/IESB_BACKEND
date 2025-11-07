const Funcionario = require('../models/FuncionarioModel');

exports.create = async (req, res) => {
  try {
    const funcionario = new Funcionario(req.body);
    await funcionario.save();
    res.status(201).json(funcionario);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const funcionarios = await Funcionario.find()
    .populate('cargo')
    .populate('departamento');
  res.json(funcionarios);
};

exports.getById = async (req, res) => {
  try {
    const funcionario = await Funcionario.findById(req.params.id)
      .populate('cargo')
      .populate('departamento');
    if (!funcionario) return res.status(404).json({ message: 'Funcionário não encontrado' });
    res.json(funcionario);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.update = async (req, res) => {
  try {
    const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('cargo')
      .populate('departamento');
    if (!funcionario) return res.status(404).json({ message: 'Funcionário não encontrado' });
    res.json(funcionario);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.delete = async (req, res) => {
  try {
    const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
    if (!funcionario) return res.status(404).json({ message: 'Funcionário não encontrado' });
    res.json({ message: 'Funcionário removido com sucesso' });
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};
