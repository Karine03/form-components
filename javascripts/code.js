$(document).ready(function(){
	openCode('#rounded-form-code', '#rounded-form-code-container');
	openCode('#subscribe-form-code', '#subscribe-form-code-container');
	openCode('#search-form-code', '#search-form-code-container');
	openCode('#user-form-code', '#user-form-code-container');
});


function openCode(selector, target) {
	$(selector).on( "click", function() {
	   $(target).toggleClass('hide');
	   $("html, body").animate({
	   	"scrollTop": window.scrollY+150
	   }, 1000)
	});
}
;
