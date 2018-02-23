angular.module('primeiraApp').constant('consts', {
  appName: 'MEAN - Primeira Aplicação',
  version: '1.0',
  owner: 'Jrmr',
  year: '2017',
  site: 'www.google.com.br',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
