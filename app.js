/* Criando aplicação angular */
var app = angular.module('minhaApp', []);

/* Declarando um controller para nossa aplicação */
app.controller('meuController', meuController);

/* Criando a função que será executada pelo controller */
function meuController($scope, $http) {
  //Declara uma variável scope chamada title
  $scope.title = 'Seja bem vindo.';
  $scope.caminhoFoto = 'https://image.tmdb.org/t/p/original';
  //Declara uma variável para a lista de filmes de ação
  $scope.acao = [];

//declara uma variavel para uma lista de comedia
$scope.comedia = [];

$scope.romance = [];

//Declara uma variavel para receber Um filme por vez
   $scope.filme = {};

   //Declara uma variavel que recebera o nome do filme digitado no buscar

  $scope.tituloFilme = '';

  $scope.procurarFilmesPeloTitulo = function(){
    console.log($scope.tituloFilme)
  }

   $scope.buscarFilme = function(codigo){
       $http
       .get('https://api.themoviedb.org/3/movie/'+codigo+'?&language=pt-BR&api_key=a1b35736a79583a39fef33408f7e1799')
       .success(function (dados) {
         $scope.filme = dados; 
       });
   };


  $scope.buscarFilmesAcao = function () {
    $http
      .get(
        'https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR&api_key=a1b35736a79583a39fef33408f7e1799'
      )
      .success(function (dados) {
       // console.log(dados);
        $scope.acao = dados.results;
      });
  };

  $scope.buscarFilmesComedia = function () {
    $http
      .get(
        'https://api.themoviedb.org/3/discover/movie?with_genres=35&language=pt-BR&api_key=a1b35736a79583a39fef33408f7e1799'
      )
      .success(function (dados) {
        $scope.comedia = dados.results;
      });
  };

//romance
  $scope.buscarFilmesRomance = function () {
    $http
      .get(
        'https://api.themoviedb.org/3/discover/movie?with_genres=10749&language=pt-BR&api_key=a1b35736a79583a39fef33408f7e1799'
      )
      .success(function (dados) {
        $scope.romance = dados.results;
      });
  };

  $scope.carregarDados = function (){
       $scope.buscarFilmesAcao();
       $scope.buscarFilmesComedia();
       $scope.buscarFilmesRomance();
       $scope.buscarFilme(581726);
  };
}
