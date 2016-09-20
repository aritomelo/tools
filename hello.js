// console.log('Hello, world!');

var page = require('webpage').create();
var system = require('system');
var address = system.args[1];
console.log(address);

page.open(address, function(status) {
  console.log("Status: " + status);
  if(status != "success") {
  	console.log("Unable to access network");
  	phantom.exit();
  }
  else {
    // page.render('example.png');
    // console.log(page.plainText);
    var elem = null;
    localStorage.clear();
    
    //   // code goes here
    // }, 1000);

	    page.evaluate(function() {
	   		var getVoteBtn = document.querySelector(".votebtnpos");
	   		// create a mouse click event
		    var event = document.createEvent( 'MouseEvents' );
		    event.initMouseEvent( "click", true, true, window, 1, 1, 1, 1, 1, false, false, false, false, 0, getVoteBtn );
		    window.setTimeout( function() {
		    	// send click to element
		    	getVoteBtn.dispatchEvent( event );
			}, 6000);			
		});

		var score = page.evaluate(function(){
			return  document.querySelector(".fl.entryVoteCount").textContent;
		});
    
    console.log('Mocadores! - ' + score);
    phantom.exit();
  }
  
});

// else {
// 	console.log('Need to specify the address');
// 	phantom.exit();
// }


