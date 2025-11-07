const Tarefa = require('../models/TarefaModel');

exports.create = async (req, res) => {
  try {
    const tarefa = new Tarefa(req.body);
    await tarefa.save();
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const tarefas = await Tarefa.find()
    .populate('responsavel')
    .populate('projeto');
  res.json(tarefas);
};

exports.getById = async (req, res) => {
  try {
    const tarefa = await Tarefa.findById(req.params.id)
      .populate('responsavel')
      .populate('projeto');
    if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.json(tarefa);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.update = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('responsavel')
      .populate('projeto');
    if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.json(tarefa);
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.delete = async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
    if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.json({ message: 'Tarefa removida com sucesso' });
  } catch {
    res.status(400).json({ message: 'ID inválido' });
  }
};
