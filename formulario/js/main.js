var onDocumentReady = function() {
	var sponsor         = $('#sponsorContainer'),
	    state           = $('#state'),
	    city            = $('#city'),
	    btnCedis        = $('#showCEDIS'),
	    cedis           = $('.cedis'),
	    cedisList       = $('#cedisList'),
	    addressShopping = $('#shopping'),
	    progressbar     = $('.c-form--progressbar li');
  
  $("input[type='radio']").click(function() {
    var sponsorValue = $("input[name='hasSponsor']:checked").val();
    var cedisValue = $('input[name="cedis"]:checked').val();

    if (sponsorValue === 'yes') {
      sponsor.show(1000);
    } else {
      sponsor.hide(1000);
    }

    if (cedisValue === 'yes') {
    	state.css({'display':'block'});
    	cedis.css({'display':'block'});
    	addressShopping.css({'display': 'none'});

    	state.on('change', function() {
				if (state.val() != 0) {
   				city.css({'display':'block'});
   				city.on('change', function() {
						if (city.val() != 0) {
		   				btnCedis.css({'display':'block'});
						} 
						else {
		   				btnCedis.css({'display':'none'});
						}
					});
				} 
				else {
   				city.css({'display':'none'});
   				state.css({'display':'none'});
   				btnCedis.css({'display':'none'});
   				cedisList.css({'display':'none'});
   				addressShopping.css({'display': 'block'});
				}
			});
    } else {
    	state.css({'display':'none'});
    	cedis.css({'display':'none'});
    	cedisList.css({'display': 'none'});
    	addressShopping.css({'display': 'block'});
    }
  });

  btnCedis.on('click', function() {
  	cedisList.css({'display':'block'});
  });

  var firstStep          = $('#btnFirstStep'),
      banner             = $('.form--banner'),
      secondStep         = $('#btnSecondStep'),
      previousFirstStep  = $('#btnPreviousFirstStep'),
      confirmPayment     = $('#btnPayment'),
      previousSecondStep = $('#btnPreviousSecondStep');

  firstStep.on('click', function () {
  	banner.css({
  		'background': "url('img/banner-header2.png')"
  	});
  	progressbar.removeClass('t-orange-progress').addClass('t-cyan-progress').css({'width': '66.66666%'});
  });

  secondStep.on('click', function () {
  	banner.addClass({
  		'background': "url('img/banner-header3.png')"
  	});
  	progressbar.removeClass('t-cyan-progress').addClass('t-red-progress').css({'width': '100%'});
  });

  previousFirstStep.on('click', function () {
  	banner.css({
  		'background': "url('img/banner-header.png')"
  	});
  	progressbar.removeClass('t-cyan-progress').addClass('t-orange-progress').css({'width': '33.3333%'});
  });

  previousSecondStep.on('click', function () {
  	banner.css({
  		'background': "url('img/banner-header2.png')"
  	});
  	progressbar.removeClass('t-red-progress').addClass('t-cyan-progress').css({'width': '66.66666%'});
  });

  confirmPayment.on('click', function () {
  	banner.css({
  		'background': "url('img/banner-header4.png')"
  	});
  });



  var current_fs, next_fs, previous_fs; // Fieldsets
  var left, opacity, scale; // Properties for Fieldset
  var animating; // Flag to prevent quick multi-click glitches

  $(".next").on('click', function() {
  	if(animating) return false;
  	animating = true;

  	current_fs = $(this).parent();
  	next_fs = $(this).parent().next();

  	// Show the next fieldset 
  	next_fs.show();

  	// Hide the current fieldset
  	current_fs.animate({ opacity: 0 }, {
  		step: function(now, mx) {
  			// 1. Scale current_fs down to 80%
  			scale = 1 - (1 - now) * 0.2;
  			// 2. Bring next_fs from the right (50%)
  			left = (now * 50)+"%";
  			// 3. Increase opacity of next_fs to 1 as it move in
  			opacity = 1 - now;
  			current_fs.css({ 'transform': 'scale(' + scale + ')'});
  			next_fs.css({ 'left': left, 'opacity': opacity });
  		},
  		duration: 800,
  		complete: function() {
  			current_fs.hide();
  			animating = false;
  		},
  		easing: 'easeInOutBack'
  	})
  });

	$(".previous").click(function(){
		if(animating) return false;
		animating = true;
	
		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();
	
		//De-Activate current step on progressbar
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
		// Show the previous fieldset
		previous_fs.show(); 
		//Hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				// As the opacity of current_fs reduces to 0 - stored in "now"
				// 1. scale previous_fs from 80% to 100%
				scale = 0.8 + (1 - now) * 0.2;
				// 2. take current_fs to the right(50%) - from 0%
				left = ((1-now) * 50)+"%";
				// 3. increase opacity of previous_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'left': left});
				previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
	});
}

$(document).on('ready', onDocumentReady);