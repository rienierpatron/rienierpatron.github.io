/*  JPRELOADER
==================================================== */
	$(document).ready(function() {
		$('body').jpreLoader();
	});

/*  SKILLS LEVEL
==================================================== */
	$(function(){
		jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
		},3000);
		});
	});
	
/*  CENTER DIV
==================================================== */
	$(document).ready(function()
		{
	$('.heading').css(
		{
      position: 'absolute',
      left: ($(window).width() - $('.heading').outerWidth()) / 2,
      top: ($(window).height() - $('.heading').outerHeight()) / 2
		});

	$(window).resize(function()
		{
    $('.heading').css(
		{
      position: 'absolute',
      left: ($(window).width() - $('.heading').outerWidth()) / 2,
      top: ($(window).height() - $('.heading').outerHeight()) / 2
		});
	});

	$(window).resize();
	});
	
	$(document).ready(function()
		{
	$('.navigation').css(
		{
      position: 'absolute',
      left: ($(window).width() - $('.navigation').outerWidth()) / 2,

		});

	$(window).resize(function()
		{
    $('.navigation').css(
		{
      position: 'absolute',
      left: ($(window).width() - $('.navigation').outerWidth()) / 2,
     
		});
	});

	$(window).resize();
	});
	
/*  TOOLTIP
==================================================== */
	$(document).ready(function() {
		$('.tooltip').tooltipster({
		animation: 'grow',
		delay: 200,
		theme: 'tooltipster-default',
		touchDevices: false,
		trigger: 'hover'
		});
	});

/*  FLEXSLIDER
==================================================== */
	$(window).load(function(){
		$('.flexslider').flexslider({
        animation: "fade",
		controlNav: false,
		easing: "easeOutQuad", 
		slideshowSpeed: 4000,
		animationSpeed: 1200,
		useCSS: false, 
		directionNav: false
		});
	});

/*  CONTACT FORM VALIDATE
==================================================== */
	$(window).load(function(){
		$("#contact-form").validate();
	});

/*  PORTFOLIO
==================================================== */
	$(function(){
		$('#Grid').mixitup({
		targetSelector: '.mix',
		effects: ['fadeIn','rotateZ','rotateX','rotateY'],
		easing: 'windback',
		transitionSpeed: 1400,
	});
	});
	
/*  PARALLAX
==================================================== */
	jQuery(document).ready(function ($) {
			$(window).stellar();
	});
	
/*  NAVIGATION
==================================================== */
	$(function(){
		$('.navigation').circleMenu({
		item_diameter: 24,
		circle_radius: 170,
		direction: 'bottom'
		});
	});

/*  SMOOTH SCROLL
==================================================== */
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 3000);
            return false;
			}
		}
	});