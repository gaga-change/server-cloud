/**
 * Created by dong on 2016/11/24.
 */
$(window).on('scroll', function (e) {
    var top = $(document).scrollTop();
    if(top > 140){
        $('#banner').css({backgroundPositionY: (top-100) / 2 + 'px'});

    }
});
//
$(document).ready(function() {
    $(".edu-chu a, .edu-gao a").addClass('wow bounceIn');
    $('.wow').addClass("wow-show");
    new WOW().init();
});