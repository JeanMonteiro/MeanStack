const _ = require('lodash')
const BillingCycle = require('./billingCycle')
const billingCylceType = require('./billingType')
const billingCylceStatus = require('./billingStatus')
const billingEnum = require('./billingEnum')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

BillingCycle.route('count', function(req, res) {
  BillingCycle.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

BillingCycle.route('types', function (req, res) {
    res.json(_.keys(billingCylceType))
})

BillingCycle.route('status', function (req, res) {
    res.json(_.keys(billingCylceStatus))
})

BillingCycle.route('asdf', function (req, res) {
    res.json(_.values(billingEnum.billingStatus.toJSON()))
})

module.exports = BillingCycle
