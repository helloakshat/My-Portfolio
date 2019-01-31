$(window).scroll(function(){
    if ($(this).scrollTop() > 500){
        $('navigation').css({
            'background': '#FF656C',
            'transition': '0.2s ease-out',
        });
        
    };
});
$(window).scroll(function(){
    if ($(this).scrollTop() <= 500){
        $('navigation').css({
            'background': 'none',
            'transition': '0.2s ease'
        });
    };
});

