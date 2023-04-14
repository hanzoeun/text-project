$(function(){
    /* 모바일 햄버거 버튼 클릭시*/
    $(".hamburger").click( function() {
        $(".mobile.hamburger").hide();
        $(".mobile.close").show();

        /* 모바일 전체 메뉴 show */
        $("#mobile_menu").empty(); // #mobile_menu 하위 태그 초기화

        var nav = $(".nav").clone(); 
        $("#mobile_menu").append(nav);
        $("#mobile_menu").show();
    });

    /* 모바일 닫기 버튼 클릭시*/
    $(".close").click( function() {
        $(".mobile.hamburger").show();
        $(".mobile.close").hide();

        /* 모바일 전체 메뉴 show */
        $("#mobile_menu").hide();
    });


    /* 브라우저 리사이징 될때 모바일 메뉴 보이는 버그 방지 */

    $(window).resize(function() {
        var width = $(window).width();

        if(width >= 767) {
            if ($("#mobile_menu").is(":visible")) {
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();
                $("#mobile_menu").hide();
            }
        }
    });
});