const Enum = require('enum');
const billingStatus = new Enum({"PAGO": 1, "PENDENTE": 2, "AGENDADO": 3})
const billingType = new Enum({"DEBITO": 1, "CREDITO": 2})

module.exports = {billingType, billingStatus}