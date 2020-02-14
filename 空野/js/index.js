var $win = $(window);

$win.on('load resize', function() {
  var windowWidth = window.innerWidth;

  if (windowWidth > 481) {
		// PCの処理
		function loadApp() {

			// Create the flipbook
		
			$('.flipbook').turn({
					// Width
		
					width:1100,
					
					// Height
		
					height:400,
		
					// Elevation
		
					elevation: 50,
					
					// Enable gradients
		
					gradients: true,
					
					// Auto center this flipbook
		
					autoCenter: true,
		
					direction: "rtl"
		
			});
		}
		
		// Load the HTML4 version if there's not CSS transform
		
		yepnope({
			test : Modernizr.csstransforms,
			yep: ['../js/turn.js'],
			nope: ['../js/turn.html4.min.js'],
			both: ['../css/basic.css'],
			complete: loadApp
		});

	} else {
		// SPの処理
		function loadApp() {

			// Create the flipbook
		
			$('.flipbook').turn({
					// Width
		
					width:480,
					
					// Height
		
					height:300,
		
					// Elevation
		
					elevation: 50,
					
					// Enable gradients
		
					gradients: true,
					
					// Auto center this flipbook
		
					autoCenter: true,
		
					direction: "rtl"
		
			});
		}
		
		// Load the HTML4 version if there's not CSS transform
		
		yepnope({
			test : Modernizr.csstransforms,
			yep: ['../js/turn.js'],
			nope: ['../js/turn.html4.min.js'],
			both: ['../css/basic.css'],
			complete: loadApp
		});

  }
});