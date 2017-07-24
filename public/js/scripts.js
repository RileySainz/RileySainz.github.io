'use strict';

var arrowDown    = $('#arrow-down');
var navbar       = $('.navbar-default');
var navHome      = $('.navHome');
var navAbout     = $('.navAbout');
var navResume    = $('.navResume');
var navPortfolio = $('.navPortfolio');
var navContact   = $('.navContact');
var navBlog      = $('.navBlog'); 

$(document).on('ready', function(){
	var scroll_pos = 0;
	$(document).scroll(function(){
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 800){
			navbar.addClass('navbar-fixed-top');
		}
		else {
			navbar.removeClass('navbar-fixed-top');
		}
	});

	arrowDown.on('click', function() {
		$('body').animate({ scrollTop: 800}, 'slow');
	});

	navHome.on('click', function() {
		$('body').animate({ scrollTop: 800}, 'slow');
	});

	navAbout.on('click', function() {
		$('body').animate({ scrollTop: 900}, 'slow');
	});

	navResume.on('click', function() {
		$('body').animate({ scrollTop: 2000}, 'slow');
	});

	navContact.on('click', function() {
		$('body').animate({ scrollTop: 8400}, 'slow');
	});

	navPortfolio.on('click', function() {
		$('body').animate({ scrollTop: 4600}, 'slow');
	});
	$(function() {
    $('.chart').easyPieChart({
      easing: 'easeOutBounce',
      barColor: '#ddd',
      size: 130,
      lineWidth: 7,
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
  }); 

  $(function() {
  	$(".container").mixItUp();
	})
});