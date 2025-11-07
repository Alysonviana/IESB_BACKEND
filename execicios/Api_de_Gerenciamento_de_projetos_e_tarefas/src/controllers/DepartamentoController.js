const Departamento = require('../models/DepartamentoModel');

exports.create = async (req, res) => {
  try {
    const departamento = new Departamento(req.body);
    await departamento.save();
    res.status(201).json(departamento);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const departamentos = await Departamento.find();
  res.json(departamentos);
};

exports.getById = async (req, res) => {
  try {
    const departamento = await Departamento.findById(req.params.id);
    if (!departamento) return res.status(404).json({ message: 'Departamento não encontrado' });
    res.json(departamento);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.update = async (req, res) => {
  try {
    const departamento = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!departamento) return res.status(404).json({ message: 'Departamento não encontrado' });
    res.json(departamento);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.delete = async (req, res) => {
  try {
    const departamento = await Departamento.findByIdAndDelete(req.params.id);
    if (!departamento) return res.status(404).json({ message: 'Departamento não encontrado' });
    res.json({ message: 'Departamento removido com sucesso' });
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};
