// project slider
$('#portfolio .owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:10,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
            margin:20
        },
        1000:{
            items:1,
            stagePadding:350,
            margin:30

        }
    }
});

// course slider
$('#course-slider .owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:0,
    slideTransition: 'linear',
    autoplaySpeed:50000,
    smartSpeed: 10000,
    dots:false,
    autoplay:true,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3

        }
    }
});

// testimonial slider
var swiper = new Swiper("#testimonial-slider", {
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    speed:2000,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
