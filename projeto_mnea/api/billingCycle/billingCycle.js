const restful = require('node-restful')
const _ = require('lodash')
const billingType = require('./billingType')
const billingStatus = require('./billingStatus')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
    status: { type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

// const billingCycleSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   month: { type: Number, min: 1, max: 12, required: true },
//   year: { type: Number, min: 1970, max: 2100, required: true },
//   credits: [creditSchema],
//   debts: [debtSchema]
// })

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    status: { type: String, required: false, uppercase: true,
        enum: _.values(billingStatus) },
    type: { type: String, required: false, uppercase: true,
        enum: _.values(billingType) }
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
