$(window).scroll(function(){
    var scrollPop = $(this).scrollTop();
    $(".background").css({
        'background-size': 100 + scrollPop + '%'
    });
});
sal();
