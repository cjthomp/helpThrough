/**
 * @author CJ Thompson
 * @link http://github.com/cjthomp/helpThrough
 * 
 */

(function( $ ) {
	$.fn.helpThrough = function(options) {
		
		var options		= $.extend({
			selector:			".stepthrough",
			charsPerTime:		15,
			orientation:		"right",
			verticalOffset:	75,
			currentColor:		"#37D932"
		}, options);
		
		var $selected		= $(options.selector);
		
		$("<style type='text/css'> .stepover-current{border-color:"+options.currentColor+" !important;box-shadow:0 0 10px "+options.currentColor+" !important;}</style>").appendTo("head");
		
		this.on('click', function(){
			helpWalk( $selected );
		});
		
		var helpWalk = function(elements) {
			element = elements[0];
			if( element ) {
				
				// Cache the selector since we'll be using it a handful of times
				var $element = $(element);
				
				// The 'help' data attribute for this field
				var msg 	= $element.data('help');
				
				// The amount of time (in seconds) to display this help box
				var wait 	= 0;
				var loc 	= $element.data('loc') != undefined ? $element.data('loc') : options.orientation;
				
				// If the msg value is empty or missing, return here, otherwise compute the length of time to display the help box
				if( msg != undefined && msg.length > 0 ) {
					wait = 1000 * (Math.ceil( msg.length / options.charsPerTime ) + 1);
				}
				else {
					return;
				}
	
				// Scroll the window down to the element (with a little space above it for aesthetics)
				$('html, body').animate({
					scrollTop:	$element.offset().top - options.verticalOffset
								}, 500);
	
				// Highlight the target field (by applying the stepover-current class)
				$element.addClass('stepover-current');
	
				// Initialize and display the help box
				$element.popover({
					animation:	true,
					html:		false,
					placement:	loc,
					selector:		false,
					trigger:		'manual',
					title:		"Help",
					content:		msg,
					delay:		0
				}).popover('show');
				
				// After the 'wait' timeout, close the help box and recursively dig down to the next
				setTimeout( function(){
							$element.popover('destroy');
							$element.removeClass('stepover-current');
							
							helpWalk( elements.slice(1) );
						}, 
						wait 
				);
			}
		}

		return this;
	};

})( jQuery );