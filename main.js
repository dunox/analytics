$(document).ready(function(){

    if($(window).width() <= 1150){
        $('.store-wrap').addClass('tiles-wrap');
    }
    if($(window).height() <= 500){
        $('.store-content__item').addClass('landscape');
    }else{
        $('.store-content__item').removeClass('landscape');
    }

//////////////////////////////////////////////////КОД ДЛЯ НАВИГАЦИИ МЕЖДУ ВИДЕОКУРСАМИ И ПАКЕТАМИ//////////////////////////////////


$(".store-wrap__nav_left ul li:nth-child(1)").addClass("filter_left");
$(".store-wrap__nav_left ul li:nth-child(1)").click(function(){
    $(".store-wrap__nav_left ul li:nth-child(2)").removeClass("filter_left");
    $(".store-wrap__nav_left ul li:nth-child(3)").removeClass("filter_left");
    $(".store-wrap__nav_left ul li:nth-child(1)").addClass("filter_left");
    $(".store-content__item").show();
});
$(".store-wrap__nav_left ul li:nth-child(2)").click(function(){
    $(".store-wrap__nav_left ul li:nth-child(1)").removeClass("filter_left");
    $(".store-wrap__nav_left ul li:nth-child(3)").removeClass("filter_left");
    $(".store-wrap__nav_left ul li:nth-child(2)").addClass("filter_left");
    $(".store-content__item").hide();
    $(".studyCourse").show();
});
$(".store-wrap__nav_left ul li:nth-child(3)").click(function(){
    $(".store-wrap__nav_left ul li:nth-child(1)").removeClass("filter_left");
    $(".store-wrap__nav_left ul li:nth-child(2)").removeClass("filter_left");
    $(".store-wrap__nav_left ul li:nth-child(3)").addClass("filter_left");
    $(".store-content__item").hide();
    $(".packCourse").show();
});





////////////////////КОД ДЛЯ СМЕНЫ РАСПОЛОЖЕНИЯ ЕЛЕМЕНТОВ (СЕТКА, СПИСОК) И ИЗМЕНЕНИЯ ИЗОБРАЖЕНИЙ//////////////////


$('.list_choice').click(function(){
    $('.store-wrap').toggleClass('tiles-wrap');
});


$(window).resize(function () {
    if ( $(".store-wrap").not(".tiles-wrap") && $(window).width() <= 1124) {
        $('.store-wrap').addClass('tiles-wrap');
    }
})


//////////////////////////////////////////////////КОД ДЛЯ НАВИГАЦИИ ПО ФИЛЬТРАМ//////////////////////////////////


$(".fg-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
    template += '<span class="fg-select-trigger">' + $(this).attr("data-label") + '</span>';
    template += '<div class="fg-options">';
    $(this).find("option").each(function() {
        template += '<span class="fg-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="fg-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$().addClass("selection");
$(".fg-option:first-of-type").hover(function() {
    $(this).parents(".fg-options").addClass("option-hover");
}, function() {
    $(this).parents(".fg-options").removeClass("option-hover");
});
$(".fg-select-trigger").on("click", function(event) {
    $('html').one('click',function(event) {
        $(".fg-select").removeClass("opened");
    });
    $(this).parents(".fg-select").toggleClass("opened");
    event.stopPropagation();
});
$(".fg-option").on("click", function() {
    $(this).parents(".fg-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".fg-options").find(".fg-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".fg-select").removeClass("opened");
    $(this).parents(".fg-select").find(".fg-select-trigger").text($(this).text());
});
$("span[data-value='acad']").click(function(){
    $(".store-content__item").hide();
    $(".academy").show();
});
$("span[data-value='top']").click(function(){
    $(".store-content__item").hide();
    $(".display_top").show();
});
$("span[data-value='sale']").click(function(){
    $(".store-content__item").hide();
    $(".sales").show();
});
$("span[data-value='recomend']").click(function(){
    $(".store-content__item").hide();
    $(".rec").show();
});



    /////////////////////////// КОД ДЛЯ РАМКИ ВОКРУГ БЛОКОВ ПРИ HOVER /////////////////////////


    $('.store-content__item').hover(
        function() {
            $(this).find('.overlay').addClass('overlay_shadow')
        },
        function() {
            $(this).find('.overlay').removeClass('overlay_shadow')
        });


        ///////////////////////////////КОД ДЛЯ МОДАЛЬНОГО ОКНА////////////////////////////////////////


        $('.packVidNone .play_video').removeClass('play_video');

        var vidItems = $(".wrap_modal");
        var vidButtons = $(".dark .play_video");
        var count = 0;
        var iframes = $("iframe");

        $(vidButtons).click(function(){
                count =(vidButtons.index(this));
                $(this).parent().parent().parent().next('.wrap_modal').css('display', 'block');
        });

        $(".modal button").click(function(){
            $('.wrap_modal').css('display', 'none');
            jQuery("iframe").each(function(){
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
                })
            })

        $(function(){
            $(document).mouseup(function(e){
                var div = $("iframe");
                if(!div.is(e.target)
                    && div.has(e.target).length === 0){
                        $('.wrap_modal').css('display', 'none');
            jQuery("iframe").each(function(){
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
                })
                }
            })
        })


    /////////////////////////////////КОД ДЛЯ НАВИГАЦИИ МЕЖДУ ВИДЕОКУРСАМИ И ПАКЕТАМИ В МОБИЛЬНЫХ ВЕРСИЯХ/////////////////////////


    $("span[data-value='allOffers']").click(function(){
        $(".store-content__item").show();
    });

    $("span[data-value='studyCourses']").click(function(){
        $(".store-content__item").hide();
        $(".studyCourse").show();
    });

    $("span[data-value='tradingPack']").click(function(){
        $(".store-content__item").hide();
        $(".packCourse").show();
    })

});

//////////////////////////////////////////ПЕРЕХОД НАВИГАЦИИ В МЕНЮ МЕЖДУ ТИПАМИ НОВОСТЕЙ///////////////////////////////
$(function() {
    $( 'ul.fg-analytics_list li' ).on( 'click', function() {
        $( this ).parent().find( 'li.list__active' ).removeClass( 'list__active' );
        $( this ).addClass( 'list__active' );
    });
});

/////////////////////////////////////////PopUp СЧЕТЧИКА ВРЕМЕНИ///////////////////////////////////////////////////////

//функция отображения PopUp

// function PopUpShow(){
//     $(".fg-news_countdown").show();
//     document.getElementById("countdown_popup").style.opacity = "1";
// }
// //функция скрытия PopUp
// function PopUpHide(){
//     $(".fg-news_countdown").hide();
//     document.getElementById("countdown_popup").style.opacity = "0";
// }

$(function() {
    $('.countdown_popup').click(function() {
        $('.countdown_popup').toggleClass('countdown__active');
    });
});
$(document).on('click', '.video-play_first', function() {
	var $video = $('#fg-video_first'),
        src = $video.attr('src');

	$video.attr('src', src + '&autoplay=1');
});

$(document).on('click', '.video-play_last', function() {
	var $video = $('#fg-video_last'),
        src = $video.attr('src');

	$video.attr('src', src + '&autoplay=1');
});