angular.module("app").controller("testeController", function($scope, $http){


	$scope.number = [2, 3, 10, 2, 4, 8, 1];	
	$scope.resultado = -1;
	$scope.maxInt = 0;
	$scope.minInt = 0;

	$scope.decimal;
	$scope.binario = 0;
	$scope.binarioArray = [];
	$scope.binarioResultado;

	$scope.numeroQ2;
	$scope.array = [];

	$scope.maiorNumero = function(){

		for($scope.i = 0; $scope.i < $scope.number.length - 1; $scope.i++){
			for($scope.j = $scope.i + 1; $scope.j < $scope.number.length; $scope.j++){

				if($scope.number[$scope.i] < $scope.number[$scope.j] && 
					($scope.number[$scope.j] - $scope.number[$scope.i]) > $scope.resultado){
					
					$scope.resultado = $scope.number[$scope.j] - $scope.number[$scope.i];

					$scope.maxInt = $scope.number[$scope.j];
					$scope.minInt = $scope.number[$scope.i];
					

				}


			}

		}

	}

	$scope.binarioConvert = function(){

		$scope.binario = ($scope.decimal >>> 0).toString(2);

		$scope.binarioArray = $scope.binario;

		for($scope.i = 0; $scope.i < $scope.binarioArray.length; $scope.i++){

			$scope.binarioResultado = $scope.binarioArray[$scope.binarioArray.length - 4];

		}

	}


	$scope.permutador = function(){

		$scope.array = $scope.numeroQ2.toString();

		if($scope.array.length == 2){
			if(($scope.array[0] + $scope.array[1])%8 == 0 ||
				($scope.array[1] + $scope.array[0])%8 == 0){

				$scope.texto = "Numero divisivel por 8";
		}else{
			$scope.texto = "Numero nao é divisivel por 8";
		}
	}

	if($scope.array.length == 1 && ($scope.array == 8 || $scope.array == 0) ){

		$scope.texto = "Numero divisivel por 8";

	}else{

		$scope.texto = "Numero nao é divisivel por 8";
	}


	for($scope.i = 0; $scope.i < $scope.array.length - 2; $scope.i++){
		for($scope.j = $scope.i + 1; $scope.j < $scope.array.length - 1; $scope.j++){
			for($scope.k = $scope.j + 1; $scope.k < $scope.array.length; $scope.k++){

				if(($scope.array[$scope.i] + $scope.array[$scope.j] + $scope.array[$scope.k]) %8 == 0 || 
					($scope.array[$scope.i] + $scope.array[$scope.k] + $scope.array[$scope.j]) %8 == 0 ||
					($scope.array[$scope.j] + $scope.array[$scope.i] + $scope.array[$scope.k]) %8 == 0 ||
					($scope.array[$scope.j] + $scope.array[$scope.k] + $scope.array[$scope.i]) %8 == 0 ||
					($scope.array[$scope.k] + $scope.array[$scope.i] + $scope.array[$scope.j]) %8 == 0 ||
					($scope.array[$scope.k] + $scope.array[$scope.j] + $scope.array[$scope.i]) %8 == 0){

					$scope.texto = "Numero divisivel por 8";

			}else{

				$scope.texto = "Numero nao é divisivel por 8";

			}

		}
	}
}

}

});