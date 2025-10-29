const mongoose = require('mongoose');

function validateID(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }
  next();
}


module.exports = validateID;
