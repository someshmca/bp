// When the DOM is ready, run this function
$(document).ready(function() {
     
	$('.homeBannerCarousel').owlCarousel({
		loop:true,
		items:1,
		nav:false,
		dots:false
	}); 
	 
	$('.homeImagesCarousel').owlCarousel({
    loop:true,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        }
    },
		navText : ["<i class='fa fa-chevron-left fa-4x'></i>","<i class='fa fa-chevron-right fa-4x'></i>"]
	});
});