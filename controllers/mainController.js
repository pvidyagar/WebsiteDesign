angular
		.module("fiboApp", [])
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

						}

				]);

		// <li class="active"><a href="#" data-filter="*">All</a></li>
		// 					<li><a href="#" data-filter=".diff">Different</a></li>
		// 					<li><a href="#" data-filter=".animal">Animal</a></li>
		// 					<li><a href="#" data-filter=".music">Music</a></li>
		// 					<li><a href="#" data-filter=".places">Places</a></li>
		// 					<li><a href="#" data-filter=".blackwhite">Black & White</a></li>
		// 					<li><a href="#" data-filter=".flower">Flowers</a></li>



// <div
// 						class="isotope-container row grid-space-10 centered text-center" 
// 						ng-repeat="product in products track by $index">
					
// <div
// 						class="isotope-container row grid-space-10 centered text-center" 
// 						ng-repeat="product in products track by $index">
						
// 						<div class ='col-xs-4 col-sm-4 col-md-4 isotope-item ' class={{product.class}}>
// 							<div class="image-box shadow bordered  text-center  mb-10">
// 								<div class="overlay-container">
// 									<img src={{product.img}} alt="">
// 									<div class="overlay-top">
// 										<div class="text">
// 											<h3>
// 												<a href="portfolio-item.html">{{product.title}}</a>
// 											</h3>
// 											<p class="small">{{product.desc}}</p>
// 										</div>
// 									</div>
// 									<div class="overlay-bottom">
// 										<div class="links">
// 											<a href="portfolio-item.html"
// 												class="btn btn-gray-transparent btn-animated btn-sm">View
// 												Details <i class="pl-10 fa fa-arrow-right"></i>
// 											</a>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>

