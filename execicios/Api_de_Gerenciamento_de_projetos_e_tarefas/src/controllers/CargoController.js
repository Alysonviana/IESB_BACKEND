const Cargo = require('../models/CargoModel');

exports.create = async (req, res) => {
  try {
    const cargo = new Cargo(req.body);
    await cargo.save();
    res.status(201).json(cargo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const cargos = await Cargo.find();
  res.json(cargos);
};

exports.getById = async (req, res) => {
  try {
    const cargo = await Cargo.findById(req.params.id);
    if (!cargo) return res.status(404).json({ message: 'Cargo não encontrado' });
    res.json(cargo);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.update = async (req, res) => {
  try {
    const cargo = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cargo) return res.status(404).json({ message: 'Cargo não encontrado' });
    res.json(cargo);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.delete = async (req, res) => {
  try {
    const cargo = await Cargo.findByIdAndDelete(req.params.id);
    if (!cargo) return res.status(404).json({ message: 'Cargo não encontrado' });
    res.json({ message: 'Cargo removido com sucesso' });
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};
