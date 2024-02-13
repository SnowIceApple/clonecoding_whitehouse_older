$(document).ready(function(){
    $(window).on('scroll', function(){
    
        if($(window).scrollTop() > 30){
            $('.header').addClass('on');
        }
        else{
            $('.header').removeClass('on');
        }
    });

    const accBtn1 = $('.acc_menu ul li:first-child button');

    accBtn1.on('click', function(){
        $('body').toggleClass('contrast');
    });

    const allBtn = $('.all_menu button');
    const allList = $('.all_menu_box');

    allBtn.on('click', function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            allList.addClass('on');
        }
        else{
            allList.removeClass('on');
        }
    });

    const listShow = $('.amb_inner .amb_list.left>ul>li>a.list_show');

    listShow.on('click', function(e){
        $(this).parents().siblings().find('.floor2').removeClass('on');
        $(this).parents().siblings().find(listShow).removeClass('on');
        $(this).toggleClass('on');
        $(this).siblings('.floor2').toggleClass('on');
    });

});

