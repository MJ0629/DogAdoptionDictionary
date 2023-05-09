$(function(){

    // 아래로 스크롤시 헤더 가려짐
    var lastScrollTop = 0;
    var headerHeight = $("header").outerHeight();   // 헤더의 높이
    var navHeight = $("nav").outerHeight();
    var didScroll;

    $(window).scroll(function(){

        didScroll = true;
        // 스크롤이벤트가 발생하면 didScroll 변수에 true 저장
        var scrollTop = $(window).scrollTop();
        if (scrollTop == 0) {
            $(".header").addClass("header_top").removeClass("header_down");
        }
        
    });
    function hasScrolled() {

        var scrollTop = $(this).scrollTop();
        // 현재 스크롤의 위치 저장
        if( scrollTop > lastScrollTop && scrollTop > headerHeight ) {
            // 스크롤을 다운했을 때 :true
            $(".header").animate({
                top : -headerHeight
            },500).removeClass("header_top",500);
        }
        else if (scrollTop < lastScrollTop &&scrollTop > headerHeight ){
            $(".header").animate({
                top : -(headerHeight-navHeight)
            }).addClass("header_down");
        }
        
        lastScrollTop = scrollTop;
    }
    setInterval(function(){
        if(didScroll) {
            hasScrolled();
            didScroll = false;
        }
    },500);
    
});

