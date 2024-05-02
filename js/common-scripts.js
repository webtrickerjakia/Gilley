
(function($){
	$(function(){



        $('.tropical-tab-trigar ul li').click(function(){
            $('.tropical-tab-trigar ul li').removeClass('active-btn');
            $(this).addClass('active-btn');
            $('.accordion').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        //FAQs Accordion Function
        $(".accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h5").on("click touch", function(){
                $(".accordion-item").removeClass("active")
                $(".accordion-item .accordion-text").slideUp();
                if($this.find(".accordion-text:visible").length){
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                    $this.find(" > .accordion-text").slideDown();
                }
            })
        })
        
 
        if ($('#marque-slider').length) {
            $('#marque-slider').slick({
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: false,
                swipe: false,
                cssEase: 'linear',
                slidesToShow:1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
                pauseOnHover: false,
            });
        }
        
        if($('#review-slider').length){
            $('#review-slider').slick({
                dots: true,
                arrows: false,
                autoplay: false,
                infinite: false,
                navigation: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
            });
        }
        

      
        if($('.shop-gilley-silder').length){
            $('.shop-gilley-silder').slick({
                dots: true,
                arrows:true,
                autoplay:false,
                autoplaySpeed:5000,
                infinite: true,
                navigation:false,
                speed: 300,
                slidesToShow:1,
                slidesToScroll: 1,
            });
        }
        




        if ($('.insta-slider-wrap').length) {
            $('.insta-slider-wrap').slick({
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: false,
                swipe: false,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
                pauseOnHover: false,
            });
        }


        if ($('select').length) {
            $('select').selectric({
                disableOnMobile: false,
                nativeOnMobile: false
            });
        }

        $(".product-accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h5").on("click touch", function(){
                $(".product-accordion-item").removeClass("active")
                $(".product-accordion-item .product-details").slideUp();
                if($this.find(".product-details:visible").length){
                    $(".product-accordion-item").removeClass("active")
                    $(".product-accordion-item .product-details").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".product-accordion-item .product-details").slideUp();
                    $this.find(" > .product-details").slideDown();
                }
            })
        })
        

// add to cart 


  






        $('.cart-trigger').on('click', function(){
            $('body').addClass('cartShow')
        })
        $('.back-arrow, .product-cart-wrap').on('click', function(){
            $('body').removeClass('cartShow')
        })
        $('.product-cart-main-area').on('click', function(e){
            e.stopPropagation()
        })




        $('.newsletter-input').on('click', function(){
            $('body').addClass('modalShow')
        })
        $('.close-arrow, .newsletter-modal-wrap').on('click', function(){
            $('body').removeClass('modalShow')
        })
        $('.newsleter-modal-inner').on('click', function(e){
            e.stopPropagation()
        })



        if ($('.products-item-wrap').length) {
            $(window).on('load resize', function() {
                if ($(window).width() <= 991) {
                    $('.products-item-wrap').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 1000,
                        infinite: true,
                        variableWidth: false,
                        
                    });
                } else {
                 
                    if ($('.products-item-wrap').hasClass('slick-initialized')) {
                        $('.products-item-wrap').slick('unslick');
                    }
                }
            });
        }



        $('.accordion').hide();
        $('#product').show();
    
        // Dropdown change event
        $('#select-box').change(function () {
            var dropdown = $('#select-box').val();
    
            // Hide all accordions
            $('.accordion').hide();
    
            // Show the selected accordion
            $('#' + dropdown).show();
        });


        $('.anchor-link').click(function(e){
            e.preventDefault();
            var target = $($(this).attr('href'));
            if(target.length){
                var scrollTo = target.offset().top;
                $('body, html').animate({scrollTop: scrollTo + 'px'}, 1000); 
            }
        });





	})// End ready function.
   
 


   






})(jQuery)


function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}


function increaseCount1(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount1(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}