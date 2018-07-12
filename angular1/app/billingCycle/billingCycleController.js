angular.module('primeiraApp').controller('billingCycleCtrl', [
    '$http',
    'consts',
	'$location',
    'msgs',
    BillingCycleController
])

function BillingCycleController($http, consts, $location, msgs) {
    const vm = this

	vm.getCredits = function() {
		const url = `${consts.apiUrl}/billingSummary`;
		$http.get(url).then(function(response) {
			const {credit = 0, debt = 0} = response.data
			vm.credit = credit
			vm.debt = debt
			vm.total = credit - debt
		})
	}

    vm.createCredit = function() {
        const url = `${consts.apiUrl}/billingCycles`;
        var promisse = $http.post(url, vm.credit)
        promisse.then(function(response) {
            msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(function (res) {
            msgs.addError(res.data.errors)
        })
    }

    vm.create = function(){
        $http.post(url, vm.billingCycle).success(function(response){
            vm.refresh()
            msgs.addSuccess('Operação realizada com sucesso!')
        }).error(function(res) {
            msgs.addError(res.data.errors)
        })
    }

    vm.initCredit = function(){
        vm.credit = {};
    }

    vm.clear = function(variable, atrName) {
        variable[atrName] = {};
    }

}