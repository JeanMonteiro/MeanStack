angular.module('primeiraApp').controller('mainController', [
	'$http',
	'consts',
	'$location',
	MainController
])

function MainController($http, consts, $location) {
	const vm = this

	vm.apply = function () {
		console.log('test');
	}
}