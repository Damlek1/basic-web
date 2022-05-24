// jquery scroll

const slides = [1, 2, 3, 4]
$.each(slides, function(index, value) {
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;

         if ( docScroll1 >= offsetSection ){
             $('li a').removeClass('active');
             $('li a:link').addClass('inactive');
             $('li a').eq(index).addClass('active');
             $('li a:link').eq(index).removeClass('inactive');
         }
     });
    $('li a').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 800)
    });
});

$(document).ready(function(){
    $('li a:link').addClass('inactive');
    $('li a').eq(0).addClass('active');
    $('li a:link').eq(0).removeClass('inactive');
});