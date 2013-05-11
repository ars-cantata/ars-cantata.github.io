$(document).ready(function() { 
	
	$('ul.image-descriptions li:last-child').addClass('last-child');
   
	$('.inner').center();

});

AudioPlayer.setup("js/audio-player/player.swf", {  
	width: 180,  
	initialvolume: 50,  
	transparentpagebg: "yes",  
	animation: "no",
	remaining: "no",
	bg: "111111",				// Background
	leftbg: "111111", 			// Speaker icon/Volume control background
	lefticon: "333333", 		// Speaker icon
	voltrack: "666666", 		// Volume track
	volslider: "eeeeee", 		// Volume slider
	rightbg: "111111", 			// Play/Pause button background
	rightbghover: "000000", 	// Play/Pause button background (hover state)
	righticon: "5555555", 		// Play/Pause icon
	righticonhover: "eeeeee", 	// Play/Pause icon (hover state)
	loader: "666666", 			// Loading bar
	track: "111111", 			// Loading/Progress bar track backgrounds
	tracker: "333333", 			// Progress track
	border: "111111",			// Progress bar border
	skip: "666666", 			// Previous/Next skip buttons
	text: "eeeeee"	 			// Text
}); 

jQuery(function($) {

	$('.gallery').addClass('gallery_demo');
	
	$('ul.gallery_demo').galleria( {
		history   : false, 
		clickNext : false,
		insert    : '#photo',
		onImage   : function(image,caption,thumb) { 
			
			if(! ($.browser.mozilla && navigator.appVersion.indexOf("Win")!=-1) ) 
			{ 
				image.css('display','none').fadeIn(1000);
			}
			caption.css('display','none').fadeIn(1000);
			
			caption.css('background-position', image.width()-165 + 'px');
			
			// fetch the thumbnail container
			var _li = thumb.parents('li');
			
			// fade out inactive thumbnail
			_li.siblings().children('img.selected').fadeTo(500,1);
			
			// fade in active thumbnail
			thumb.fadeTo('fast',1).addClass('selected');
		},
		onThumb : function(thumb) 
		{ 
			// fetch the thumbnail container
			var _li = thumb.parents('li');
			
			// if thumbnail is active, fade all the way.
			var _fadeTo = _li.is('.active') ? '1' : '1';
			
			// fade in the thumbnail when finnished loading
			thumb.css ({ display:'none', opacity:_fadeTo } ).fadeIn(1500);
			
			// hover effects
			thumb.hover(
				function() { thumb.fadeTo('fast',1); },
				function() { _li.not('.active').children('img').fadeTo('fast',1); } // don't fade out if the parent is active
			)
		}
	});
});