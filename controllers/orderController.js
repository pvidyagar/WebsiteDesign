angular
		.module("fiboApp", [])
		.directive('onlyDigits', function () {
			return {
			  require: 'ngModel',
			  restrict: 'A',
			  link: function (scope, element, attr, ctrl) {
				function inputValue(val) {
				  if (val) {
					var digits = val.replace(/[^0-9.]/g, '');
		
					if (digits.split('.').length > 2) {
					  digits = digits.substring(0, digits.length - 1);
					}
		
					if (digits !== val) {
					  ctrl.$setViewValue(digits);
					  ctrl.$render();
					}
					return parseFloat(digits);
				  }
				  return undefined;
				}            
				ctrl.$parsers.push(inputValue);
			  }
			};
		 })
		 .controller(
				'orderController',
				[
						'$scope',
						'$http',
						'$rootScope',
						function($scope, $http, $rootScope) {
							$scope.pageTitle='Build your Order';
							$scope.pageNumber = 1;
							
							let lightUnit = {
								'number' : 0,
								'type':'LIGHT',
								'id': 'LIGHT1',
								'url':'images/order/units/light.png'
							};
							let fanUnit = {
								'number' : 1,
								'type':'FAN',
								'id': 'FAN1',
								'url':'images/order/units/fan.png'
							};
							let usbUnit= {
								'number' : 2,
								'type':'USB',
								'id': 'USB1',
								'url':'images/order/units/usb.png'
							};
							
							$scope.unitList = [
								lightUnit, fanUnit, usbUnit
							];

							$scope.selectedFrame = '';
							$scope.setFrame = function(frameSize) {
								$scope.selectedFrame = frameSize;
							}

							$scope.slot1 = {'number' : 1, 
							'assignedUnit': {
								'number' : 0,
								'type':'LIGHT',
								'id': 'LIGHT1',
							}};
							$scope.slot2 = {'number' : 2, 'assignedUnit': {
								'number' : 1,
								'type':'FAN',
								'id': 'FAN1',
							}};
							$scope.slot3 = {'number' : 3, 'assignedUnit': {
								'number' : 2,
								'type':'USB',
								'id': 'USB1',
							}};
							$scope.slot4 = {'number' : 4, 'assignedUnit': {
								'number' : 0,
								'type':'LIGHT',
								'id': 'LIGHT1',
							}};
							$scope.slot5 = {'number' : 5, 'assignedUnit': {
								'number' : 0,
								'type':'LIGHT',
								'id': 'LIGHT1',
							}};
							$scope.slot6 = {'number' : 6, 'assignedUnit': {
								'number' : 0,
								'type':'LIGHT',
								'id': 'LIGHT1',
							}};
							$scope.slot7 = {'number' : 7, 'assignedUnit': {
								'number' : 0,
								'type':'LIGHT',
								'id': 'LIGHT1',
							}};
							$scope.slot8 = {'number' : 8, 'assignedUnit': {
								'number' : 0,
								'type':'LIGHT',
								'id': 'LIGHT1',
							}};
							$scope.getNextUnitTypeNumberByCurrentNumber = function (currentNumber) {
								let nextNumber = 1 + currentNumber;
								if(nextNumber > 2) {
									nextNumber = 0;
								}
								return nextNumber;
							}
							$scope.getCurrentNumber = function (unitSelected) {
								if(unitSelected.assignedUnit) {
									return unitSelected.assignedUnit.number;
								}
								return -1;
							}
							$scope.changeSlotUnit = function(slot) {
								let currentNumber = $scope.getCurrentNumber(slot);
								let nextUnitTypeNumber = $scope.getNextUnitTypeNumberByCurrentNumber(currentNumber);

								if(slot.number == 1) {
									$scope.slot1.assignedUnit = $scope.unitList[nextUnitTypeNumber];
								} else if(slot.number == 2) {
									$scope.slot2.assignedUnit = $scope.unitList[nextUnitTypeNumber];
								} else if(slot.number == 3) {
									$scope.slot3.assignedUnit = $scope.unitList[nextUnitTypeNumber];
								} else if(slot.number == 4) {
									$scope.slot4.assignedUnit = $scope.unitList[nextUnitTypeNumber];
								} else if(slot.number == 5) {
									$scope.slot5.assignedUnit = $scope.unitList[nextUnitTypeNumber];
								} else if(slot.number == 6) {
									$scope.slot6.assignedUnit = $scope.unitList[nextUnitTypeNumber];
								} else if(slot.number == 7) {
									$scope.slot7.assignedUnit = $scope.unitList[nextUnitTypeNumber];
								} else if(slot.number == 8) {
									$scope.slot8.assignedUnit = $scope.unitList[nextUnitTypeNumber];
								} 
							}

							$scope.selectedThemeUrl = '../images/order/units/default.png';
							$scope.setTheme = function (themeId, themeUrl) {
								$scope.selectedThemeUrl = themeUrl;
								$scope.selectedThemeId = themeId;
							}
							
							$scope.getBoxThemeStyle = function() {
								return  {
									'background-image':'url('+ $scope.selectedThemeUrl  + ' )',
									'background-repeat': 'no-repeat',
									'background-size': 'cover',
									'position': 'absolute',
									'background-position':'center',
								}
							}

							$scope.getCellStyle = function(slot) {
							return {
								'light-bg-image' : slot.assignedUnit.type == 'LIGHT', 
								'fan-bg-image' : slot.assignedUnit.type == 'FAN',
								 'usb-bg-image' : slot.assignedUnit.type == 'USB'
								};
								}
							this.$onInit = function() {
								$http.get('https://fibologic-app.herokuapp.com/', {responseType: 'string'}).success(function(data){
								$scope.backendConnectivity = data;
								console.log(data);
    							});
							};
							
							$scope.nextPage = function() {
								if ( $scope.pageNumber < 4) {
									$scope.pageNumber  =  $scope.pageNumber + 1 ;
								}
							}

							$scope.prevPage = function() {
								if ( $scope.pageNumber > 1) {
									$scope.pageNumber  =  $scope.pageNumber  - 1 ;
								}
							}
							
						}

				]
				);

