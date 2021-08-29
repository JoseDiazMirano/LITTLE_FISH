$(document).ready(function(){
    $('.nav-icon').click(function(){
       $('.full-nav').addClass('open')
    })
    $('.nav-close').click(function(){
        $('.full-nav').removeClass('open')
    })
    $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if( sc > 100){
            $('.nav').addClass('sticky');
        } 
        else{
            $('.nav').removeClass('sticky');
        } 
    })
});

$(document).ready(function () {

    function showPopup(){
        $('.pop-up').addClass('show');
        $('.pop-up-wrap').addClass('show');
    }

    $("#close").click(function(){
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });

    $(".btn-abrir").click(showPopup);
});