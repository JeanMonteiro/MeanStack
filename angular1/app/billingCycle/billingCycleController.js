angular.module('primeiraApp').controller('billingCycleCtrl', [
    '$http',
    'consts',
	'$location',
    BillingCycleController
])

function BillingCycleController($http, consts, $location) {
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

}