const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.Messages.general.required = "o atributo '{PATH}' é obrigatorio. "
