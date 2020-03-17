/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                              *
 *	Single window load event                        *
 *   "use strict" mode on                            *
 *****************************************************
 */
$(window).on('load', function() {

    "use strict";
    var preLoader = $('.loading');
    var fancyboxImg = $('.fancybox');
    var fancyboxIframe = $('.fancybox-iframe');
	var firstdatepicker = $('#datepicker-13');
	var seconddatepicker = $('#datepicker-14');
	var MixItUp1 =  $('#MixItUp1');
	 var countNumber = $(".count-number");
    var accordionFAQ = $("#accordion");
   
	
	
	
	
	// ========================================
	//	PreLoader On window Load
	// ========================================
   
    if (preLoader.length) {
        preLoader.fadeOut();
    }



    //========================================
    // Image and Video Fancy Box
    //======================================== 



    if (fancyboxImg.length) {
        fancyboxImg.fancybox();
    }
    if (fancyboxIframe.length) {
        fancyboxIframe.fancybox({
            type: "iframe",
            // other API options
        });
    }

    //========================================
    // FAQ Accordion
    //======================================== 

    if (accordionFAQ.length) {
        accordionFAQ.accordion();
    }
	
	
	
     //========================================
     //Datepicker Setting
     //========================================
   
	
	if (firstdatepicker.length) {		
        firstdatepicker.datepicker();          
    }

	if (seconddatepicker.length) {
        seconddatepicker.datepicker();          
    }
	
	//============================================
	// MixItUp settings
	//============================================
	
	if(MixItUp1.length){    
		  MixItUp1.mixItUp({
				  selectors: {
				  filter: '.filter-1'
			  }
		  });
	}
	//========================================
    // Fun Factor / Counter
    //======================================== 
	countNumber.appear(function() {
        $(this).each(function() {
            var datacount = $(this).attr('data-count');
            $(this).find('.counter').delay(6000).countTo({
                from: 10,
                to: datacount,
                speed: 3000,
                refreshInterval: 50,
            });
        });
    });


    //========================================
    // Owl Carousel functions Calling
    //======================================== 	

    owlCarouselInit();

    //***************************************
	// Map initialization function Calling
	//****************************************
 
	initMap();

});


//***************************************
// Contact Page Map
//****************************************  

 function initMap() {
  "use strict";
 
   var mapDiv = $('#gmap_canvas'); 
   
   if (mapDiv.length) {  
     var myOptions = {
         zoom: 10,
   scrollwheel: false,
         center: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
     var marker = new google.maps.Marker({
         map: map,
         position: new google.maps.LatLng(-37.81614570000001, 144.95570680000003)
     });
     var infowindow = new google.maps.InfoWindow({
         content: '<strong>Envato</strong><br>Envato, King Street, Melbourne, Victoria<br>'
     });
     google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map, marker);
     });
  
     infowindow.open(map, marker);
   }
   
 }

//========================================
// Owl Carousel functions
//======================================== 	

function owlCarouselInit() {

    "use strict";

    var sliderMain = $('#slider');
    var testimonialSlider = $('#testimonialslider');
    var partnerSlider = $('#partnerslider');

   if (sliderMain.length) {
        sliderMain.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
			autoplay:true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
	
if (testimonialSlider.length) {
        testimonialSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }
	   if (partnerSlider.length) {
        partnerSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
			autoplay:true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
    }
	

}

/*
*****************************************************
*	END OF THE JS 									*
*	DOCUMENT                       					*
*****************************************************
*/