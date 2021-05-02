$(window).scroll(function(){
    if($(this).scrollTop()>100)
    {
        $(".bg-light").addClass("ss")
    }
    else
    {
        $(".bg-light").removeClass("ss")
    }
})

$(document).ready(function(){
  $(".owl-corporate-wide").owlCarousel({
  	items:4,
  	margin:20,
  	loop:true,
  	autoplay:true,
    autoplayTimeout:500,
    autoplayHoverPause:true,
    slideTransition:'linear',
    slideSpeed: 200,
  });
});