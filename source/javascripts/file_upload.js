$(document).ready(function(){
	$( ".import-file-container label").on( "click", function() {
	   $('#file-upload').focus();
	   return false;
	});
	 

	$('#file-upload').change(function() {  
	    $(".file-return").append(this.value);  
	});
});