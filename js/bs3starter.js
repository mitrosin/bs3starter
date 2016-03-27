$(function() {
	/* 
	Change active state for the website navigation links 
	This was inspired from
	http://stackoverflow.com/questions/11533542/twitter-bootstrap-add-active-class-to-li
	*/
	function stripTrailingSlash(str) {
		if(str.substr(-1) == '/') {
		  return str.substr(0, str.length - 1);
		}
		return str;
	  }

	  var url = window.location.pathname;  
	  var activePage = stripTrailingSlash(url);

	  $('.nav li a').each(function(){  
		var currentPage = stripTrailingSlash($(this).attr('href'));

		if (activePage == currentPage) {
		  $(this).parent().addClass('active'); 
		} 
	  });
	
	/* Smooth scroll inside single pages 
	This was inspired from
	http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
	*/
	$('.scroll a').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 50
	    }, 900, 'swing', function () {
	        window.location.hash = target.offset().top - 50
	    });
	});
	
});

/* 
Remove hashtag from URL
This was inspired from
http://stackoverflow.com/questions/23312006/remove-hashtag-from-url
*/
$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});

/*
Flexslider initialization
This was inspired from
http://flexslider.woothemes.com/
*/
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

/* MatchHeights initialization
This was inspired from
https://github.com/liabru/jquery-match-height
*/

$(function() {
    $('.item-a').matchHeight();
	$('.item-b').matchHeight();
	$('.item-c').matchHeight();
});