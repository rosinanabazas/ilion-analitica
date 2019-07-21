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



var slideShow = function(container, time, effect) {
  container = document.querySelector(container);
  this.images = [];
  this.curImage = 0;

  if (effect === "fade") {
    for (i = 0; i < container.childElementCount; i++) {
      this.images.push(container.children[i]);
      this.images[i].style.opacity = 0;
    }

    // Handle going to to the next slide
    var nextSlide = function() {
      for (var i = 0; i < this.images.length; i++) {
        if (i != this.curImage) this.images[i].style.opacity = 0;
      }
      this.images[this.curImage].style.opacity = 1;
      this.curImage++;
      if (this.curImage >= this.images.length) {
        this.curImage = 0;
      }
      window.setTimeout(nextSlide.bind(document.getElementById(this)), time);
    };
    nextSlide.call(this);
  } else if (effect === "clickFade") {
    for (i = 0; i < container.childElementCount; i++) {
      this.images.push(container.children[i]);
      this.images[i].style.opacity = 0;
    }

    // Handle going to to the next slide
    var nextSlideClick = function() {
      for (var i = 0; i < this.images.length; i++) {
        if (i != this.curImage) this.images[i].style.opacity = 0;
      }
      this.images[this.curImage].style.opacity = 1;
      this.curImage++;

      if (this.curImage >= this.images.length) {
        this.curImage = 0;
      }
      window.setTimeout(nextSlideClick.bind(document.getElementById(this)), time);
    };
    nextSlideClick.call(this);
  }

};
slideShow(".slideshow", 5000, "fade");
