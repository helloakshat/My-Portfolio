sal();
$(function(){
    var responsive = [$('body').attr('href',"mobo_style.css")];
    $(window).on("resize", function(){
        $('body').attr('href', function(){
            return responsive[$(window).width() < 500 ? 0 : 1];
        });
    }).trigger('resize');
        
    });
