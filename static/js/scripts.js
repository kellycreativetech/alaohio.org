//@codekit-prepend "hoverIntent.js";
//@codekit-prepend "superfish.js";
//@codekit-prepend "jquery.matchHeight.js";
//@codekit-prepend "KCT-mobilenav.js";
//@codekit-prepend "slick.js";
//@codekit-prepend "jquery.fancybox.js";
//@codekit-prepend "jquery.fancybox-media.js";
//@codekit-prepend "jquery.ui.totop.js";

document.createElement( "picture" );
document.createElement( "main" );

//scrollto plugin:
$('.carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000
});

$("document").ready(function () {
    $(".fancybox, [href*='youtube.com'], [href*='youtu.be']").fancybox({
          helpers : {
              media: true
          },
           width       : 800,
            height      : 450,
          aspectRatio: true,
          padding:0,
          scrolling   : 'no'
    });

    $('iframe').wrap('<div class="video-wrap" />');

    //a scroll-to-top plugin. This calls it.
    $().UItoTop({ scrollSpeed: 300 });


});

// fire something at the end of a resize event
function resizedw(){
    // Haven't resized in 250ms!
}

var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizedw, 250);
};