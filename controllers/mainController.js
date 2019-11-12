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
				'mainController',
				[
						'$scope',
						'$http',
						'$rootScope',
						function($scope, $http, $rootScope) {
							$scope.title='Fibologic Technology';
							$scope.backendConnectivity = '';
							$scope.filters=[{'id':'*','name':'ALL','class':'active'},
							{'id':'.Switch','name':'Switch','class':''},
							{'id':'.Bell','name':'Calling Bell','class':''},];
							// $scope.filters=[{'id':'*','name':'ALL','class':'active'},
							// 				{'id':'.diff','name':'Different','class':''},
							// 				{'id':'.animal','name':'Animal','class':''},
							// 				{'id':'.music','name':'Music','class':''},
							// 				{'id':'.places','name':'Places','class':''},
							// 				{'id':'.blackwhite','name':'Black & White','class':''},
							// 				{'id':'.flower','name':'Flowers','class':''}
							// 				];
							$scope.mainfilters=[{'id':'.4unit','name':'4 Units','class':'active'},
											{'id':'.6unit','name':'6 Units','class':''},
											{'id':'.3unit','name':'3 Units','class':''},
											{'id':'.1unit','name':'1 Unit','class':''}
											];
							$scope.AllContactQuery = [];
							$scope.ContactQuery = {
								'name' : '',
								'emailId' : '',
								'mobile' : '',
								'message' : ''
							};

							$scope.saveVisitor = function() {
								console.log("$scope.ContactQuery");
								console.log($scope.ContactQuery);
								$scope.displayEmailSuccessful = true;
								$scope.postVisitor();
								$scope.resetContactQuery();
							}
							$scope.postVisitor = function() {
								//Call the services
								var data = {
									name: $scope.ContactQuery.name,
									emailId: $scope.ContactQuery.emailId,
									mobile: $scope.ContactQuery.mobile,
									message: $scope.ContactQuery.message
								};
								var config = {
									headers : {
										'Access-Control-Allow-Credentials': true,
										'Access-Control-Allow-Origin': '*',
										'Access-Control-Allow-Headers' : 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
										'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,OPTIONS'
									}
								}
								$http.post('https://fibologic-app.herokuapp.com/saveVisitor/', JSON.stringify(data), config)
								.success(function (data, status, headers, config) {	
									console.log("Post Data Submitted Successfully!");
								})
								.error(function (data, status, header, config) {
									
									console.log("Post Data Failed !");
									console.log(data);
									console.log(header);
								});
							}

							$scope.resetContactQuery =  function () {
								$scope.ContactQuery.name = '';
								$scope.ContactQuery.emailId = '';
								$scope.ContactQuery.mobile = '';
								$scope.ContactQuery.message =  '';
							};
							$scope.displayEmailSuccessful = false;

							$scope.shoppingCartDetails = {
								'subTotal' : 0.0,
								'shippingAndHandlingFees':0.0,
								'discount':0.0,
								'subTotalAftrDiscount' : 0.0,
								'cgst': 0.0 ,
								'sgst': 0.0,
								'totalPayableAmount': 0.0,
								'totalSaving':0.0
							};
							$scope.shoppingCartProducts =[
								{
									'name':'FIBOLOGIC DESIGNER SWITCH BOARD',
									'subName':'',
									'unitPrice': 2599,
									'quantity':0,
									'total': 0 
								},
								{
									'name':'FIBOLOGIC 4 TOUCH LIGHT SWITCH',
									'subName':'',
									'unitPrice': 2399,
									'quantity':0,
									'total': 0 
								},
								{
									'name':'FIBOLOGIC 4 STEP TOUCH FAN SWITCH',
									'subName':'',
									'unitPrice': 2299,
									'quantity':0,
									'total': 0 
								},
								{
									'name':'FIBOLOGIC SMART USB SWITCH',
									'subName':'',
									'unitPrice': 399,
									'quantity':0,
									'total': 0 
								},
								{
									'name':'FIBOLOGIC HIGH POWER TOUCH SWITCH',
									'subName':'',
									'unitPrice': 1799,
									'quantity':0,
									'total': 0 
								},
								{
									'name':'FIBOLOGIC SMART TOUCH DOORBELL',
									'subName':'',
									'unitPrice': 2199,
									'quantity':0,
									'total': 0 
								},
								{
									'name':'FIBOLOGIC 3 PIN POWER SOCKET BIG',
									'subName':'',
									'unitPrice': 299,
									'quantity':0,
									'total': 0 
								},
								{
									'name':'FIBOLOGIC 3 PIN POWER SOCKET SMALL',
									'subName':'',
									'unitPrice': 249,
									'quantity':0,
									'total': 0 
								}
							];
							$scope.products=[
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item animal blackwhite',
								'img':"images/portfolio/animal-bw-elephant.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item animal ',
								'img':"images/portfolio/animal-lion.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item  animal blackwhite',
								'img':"images/portfolio/animal-bw-tawny.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item  animal',
								'img':"images/portfolio/animal-horse.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item animal',
								'img':"images/portfolio/animal-horses2.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item animal',
								'img':"images/portfolio/animal-lion.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item animal',
								'img':"images/portfolio/animal-lion3.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item animal',
								'img':"images/portfolio/animal-lion4.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item animal',
								'img':"images/portfolio/animal-winter.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item animal',
								'img':"images/portfolio/animal-wolf.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item animal blackwhite',
								'img':"images/portfolio/bw-nature.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item diff',
								'img':"images/portfolio/diff-aroma.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item diff',
								'img':"images/portfolio/different-fashion.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item diff',
								'img':"images/portfolio/diff-fantasy-girl.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item diff',
								'img':"images/portfolio/diff-precious.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item flower blackwhite',
								'img':"images/portfolio/flower-bw-sunflower.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item flower',
								'img':"images/portfolio/flower-hyacinth.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item music',
								'img':'images/portfolio/music-guitar.jpg',
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item music',
								'img':"images/portfolio/music-guitar2.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item music',
								'img':"images/portfolio/music-guitarist.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item music',
								'img':"images/portfolio/music-microphone.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item places',
								'img':"images/portfolio/places-beach.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item places',
								'img':"images/portfolio/places-clock-tower.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item places',
								'img':"images/portfolio/places-copenhagen.jpg",
								'title':'',
								'desc':''
								},
							{'class':'col-xs-4 col-sm-4 col-md-4 isotope-item places',
								'img':"images/portfolio/places-golden-gate-bridge.jpg",
								'title':'',
								'desc':''
								}		];

							this.$onInit = function() {
								console.log("controller inialized")
								$http.get('https://fibologic-app.herokuapp.com/', {responseType: 'string'}).success(function(data){
								$scope.backendConnectivity = data;
								console.log(data);
    							});
							};

							$scope.check = function() {
								console.log('Chec method ccalled');
							}
							$scope.updateDiscountAndTotal = function (quantity){
								if(quantity === undefined) {
									this.shoppingCartDetails.discount = 0;
								}
								if(!parseFloat(quantity)) {
									this.shoppingCartDetails.discount = 0;
								}

								let subTotal = 0;
								angular.forEach(this.shoppingCartProducts, function (value, key) {
									if(!parseInt(value.quantity)){
										value.quantity = 0;
									}
									value.total = value.unitPrice * value.quantity;
									subTotal = subTotal + value.total; 
								});
								if(this.shoppingCartDetails.discount > 0 ) {
									if(this.shoppingCartDetails.discount > 60 ) {
										this.shoppingCartDetails.discount = 60;
									}
									this.shoppingCartDetails.subTotalAftrDiscount = (subTotal*((100-this.shoppingCartDetails.discount)/100));
								} else {
									this.shoppingCartDetails.subTotalAftrDiscount = subTotal;
								}
								this.shoppingCartDetails.subTotal = subTotal;
								if(subTotal > 0 ){
									this.shoppingCartDetails.shippingAndHandlingFees = 1000;
								} else {
									this.shoppingCartDetails.shippingAndHandlingFees = 0;
								}
								this.shoppingCartDetails.cgst = this.shoppingCartDetails.subTotalAftrDiscount * 0.09;
								this.shoppingCartDetails.sgst = this.shoppingCartDetails.subTotalAftrDiscount * 0.09;
								this.shoppingCartDetails.totalPayableAmount = this.shoppingCartDetails.subTotalAftrDiscount
									+ this.shoppingCartDetails.shippingAndHandlingFees + this.shoppingCartDetails.cgst + this.shoppingCartDetails.sgst;
								
								this.shoppingCartDetails.totalSaving = this.shoppingCartDetails.subTotal - this.shoppingCartDetails.subTotalAftrDiscount;

								this.shoppingCartDetails.totalPayableAmount = this.shoppingCartDetails.totalPayableAmount.toFixed(2);
								this.shoppingCartDetails.subTotalAftrDiscount = this.shoppingCartDetails.subTotalAftrDiscount.toFixed(2);
								this.shoppingCartDetails.cgst = this.shoppingCartDetails.cgst.toFixed(2);
								this.shoppingCartDetails.sgst = this.shoppingCartDetails.sgst.toFixed(2);
								this.shoppingCartDetails.totalSaving = this.shoppingCartDetails.totalSaving.toFixed(2);
							}
							$scope.updateQuantityAndTotal = function (quantity, index){
								if(quantity === undefined) {
									this.shoppingCartProducts[index].quantity = 0;
								}
								if(!parseFloat(quantity)) {
									this.shoppingCartProducts[index].quantity = 0;
								}
								this.updateDiscountAndTotal(this.shoppingCartDetails.discount);
							}
							}

				]
				)
				.directive('phoneInput', function($filter, $browser) {
					return {
						require: 'ngModel',
						link: function($scope, $element, $attrs, ngModelCtrl) {
							var listener = function() {
								var value = $element.val().replace(/[^0-9]/g, '');
								$element.val($filter('tel')(value, false));
							};
				
							// This runs when we update the text field
							ngModelCtrl.$parsers.push(function(viewValue) {
								return viewValue.replace(/[^0-9]/g, '').slice(0,10);
							});
				
							// This runs when the model gets updated on the scope directly and keeps our view in sync
							ngModelCtrl.$render = function() {
								$element.val($filter('tel')(ngModelCtrl.$viewValue, false));
							};
				
							$element.bind('change', listener);
							$element.bind('keydown', function(event) {
								var key = event.keyCode;
								// If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
								// This lets us support copy and paste too
								if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
									return;
								}
								$browser.defer(listener); // Have to do this or changes don't get picked up properly
							});
				
							$element.bind('paste cut', function() {
								$browser.defer(listener);
							});
						}
				
					};
				})
				.filter('tel', function () {
					return function (tel) {
						console.log(tel);
						if (!tel) { return ''; }
				
						var value = tel.toString().trim().replace(/^\+/, '');
				
						if (value.match(/[^0-9]/)) {
							return tel;
						}
				
						var country, city, number;
				
						switch (value.length) {
							case 1:
							case 2:
							case 3:
								city = value;
								break;
				
							default:
								city = value.slice(0, 3);
								number = value.slice(3);
						}
				
						if(number){
							if(number.length>3){
								number = number.slice(0, 3) + '-' + number.slice(3,7);
							}
							else{
								number = number;
							}
				
							return ("(" + city + ") " + number).trim();
						}
						else{
							return "(" + city;
						}
				
					};
				});

