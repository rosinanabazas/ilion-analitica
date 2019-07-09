$(document).foundation()

$(".smooth-scroll").click(function() {
	var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 800);
    });

$(".show").click(function(){
  $(".hidden-mobile-nav").toggleClass("show-nav");
});
