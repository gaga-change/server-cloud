/**
 * Created by dong on 2016/11/24.
 */
$(window).on('scroll', function (e) {
    var top = $(document).scrollTop();
    if(top > 140){
        $('#banner').css({backgroundPositionY: (top-100) / 2 + 'px'});

    }
});