$(document).ready(function(){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var input = $(this).find("input, select");
      var label = $(this).find("label");
			// on focus add class active to label
			input.focus(function(){
				input.prev().addClass("active");
			});
			// if errors, add class active on filled input
			if(input.val() != ""){
				input.prev().addClass("active");
			}; 
			//on blur check field and remove class if needed
			input.blur(function(){
				if(input.val() === '' || input.val() === 'blank'){
					label.removeClass("active");
				}
			});
		});
	}
	floatLabel(".float-label");
});