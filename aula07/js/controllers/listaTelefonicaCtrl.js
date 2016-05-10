angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter){
			$scope.app = "Lista Telefonica";
			$scope.contatos = [
			{nome:$filter("uppercase")("Renan"), telefone:"99996666",data: new Date(), cor:"blue",operadora:{"nome":"Vivo","codigo":15,"categoria":"Celular"}},
			{nome:"Pedro", telefone:"44449999",data: new Date(), cor:"grey",operadora:{"nome":"Vivo","codigo":15,"categoria":"Celular"}},
			{nome:"Camila", telefone:"5555566666",data: new Date(), cor:"red",operadora:{"nome":"Vivo","codigo":15,"categoria":"Celular"}}
			];
			$scope.operadoras = [
			{nome: "Oi", codigo: 14, categoria:"Celular", preco:2},
			{nome: "Vivo", codigo: 15, categoria:"Celular", preco:3},
			{nome: "Tim", codigo: 41, categoria:"Celular", preco:1,},
			{nome: "GVT", codigo: 25, categoria:"Fixo", preco:5},
			{nome: "Embratel", codigo: 21, categoria:"Fixo", preco:2}
			];
			$scope.adicionarContato = function(contato){
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato;
				$scope.contatoForm.nome.$setPristine();
			};
			$scope.apagarContatos = function(contatos){
				$scope.contatos = contatos.filter(function(contato){
					if (!contato.selecionado) return true;
				});
			};
			$scope.isContatoSelecionado = function(contatos){
				return contatos.some(function(contato){
					return contato.selecionado;
				});
			};
			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
			};
		});