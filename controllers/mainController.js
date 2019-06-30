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
						function($scope, $http,$rootScope) {
							$scope.title='Fibologic Technology';
							$scope.filters=[{'id':'*','name':'ALL','class':'active'},
											{'id':'.diff','name':'Different','class':''},
											{'id':'.animal','name':'Animal','class':''},
											{'id':'.music','name':'Music','class':''},
											{'id':'.places','name':'Places','class':''},
											{'id':'.blackwhite','name':'Black & White','class':''},
											{'id':'.flower','name':'Flowers','class':''}
											];
							$scope.mainfilters=[{'id':'.4unit','name':'4 Units','class':'active'},
											{'id':'.6unit','name':'6 Units','class':''},
											{'id':'.3unit','name':'3 Units','class':''},
											{'id':'.1unit','name':'1 Unit','class':''}
											];
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
				);

