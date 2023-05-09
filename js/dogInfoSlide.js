$(function(){

    var container = $(".dog_info_visual_wrap");  // 슬라이드가 표시되는 영역
    var slideGroup = container.find("ul"); // 실제 움직여주는 역할을 하는 박스
    var slides = slideGroup.find("li"); // 슬라이드 이미지들
    var nav = container.find(".btn");   // 이전, 다음 버튼들
    var indicator = $('.dog_info_title');    // 인디케이터
    var slideCount = slides.length; // 슬라이드 개수
    var currentIdx = 0; // 현재 보여지는 슬라이드의 인덱스 번호를 담을 변수
    var duration = 500; // 슬라이드 전환 시간(장이 넘어가는 속도)
    var easing = "swing";   // 슬라이드 가속도
    var interval = 2000;    // 슬라이드 자동 실행 간격
    var timer;  // 아래쪽에서 interval을 걸어줄 변수를 선언
    console.log($(window).outerWidth);
    // // 슬라이드 위치 설정 및 인디케이터 생성
    for(var i = 0; i < slideCount; i++) {

        // slides.eq(i).css({
        //     left: 100 * i + "%"
        // });
        // 각 슬라이드의 위치 설정
        // (left 값에 0, 100%, 200%... 를 넣어서 일렬로 배치)

        indicator.append("<span></span>");
        // 인디케이터를 슬라이드 개수만큼 for문이 반복되면서 생성해준다.

    }
    // indicator.children("span:first-child").append("<span class='txtBlind'>"+"말티즈버튼"+"</span>");
    // indicator.children("span:nth-child(2)").append("<span class='txtBlind'>"+"푸들버튼"+"</span>");
    // indicator.children("span:nth-child(3)").append("<span class='txtBlind'>"+"시츄버튼"+"</span>");
    // indicator.children("span:last-child").append("<span class='txtBlind'>"+"비숑버튼"+"</span>");

    // 슬라이드 실행 함수
    function goToSlide(index) {

        slideGroup.animate({
            left: - 100 * index + "%"
        }, duration, easing);
        // 전체 슬라이드를 움직이는 코드
        // console.log(currentIdx);

        currentIdx = index;
        // 현재 슬라이드의 인덱스값을 저장해서 넘겨주는 역할
        // 함수가 실행될 때마다 인덱스번호가 업데이트

        update();
        // 슬라이드 실행함수(goToSlide())가 실행될 때마다 함께 실행되면서 내비게이션 상태 업데이트


    }

    goToSlide(currentIdx);
    // 함수 실행시 바로 값을 전달하면서(매개변수에)


    // 내비게이션 버튼 클릭 이벤트
    nav.click(function(){
    // .btn을 클릭하면 if-else문을 통해서 그 버튼이 이전/다음 여부를 확인한 다음 그것에 맞는 코드를 실행

        if( $(this).hasClass("prev") ) {
            // 클릭한 요소가 .prev을 갖고있는지 확인 : prev버튼을 클릭했을 때
            // 선택자.hasClass("클래스명") : 선택자에 클래스가 있는지 여부를 확인 true/false

            goToSlide(currentIdx - 1);
            // goToSlide함수를 실행(currentIdx에서 1을 뺀 값을 바로 함수의 매개변수인 index로 전달하면서 인덱스번호를 변경한다.)

        } else {

            goToSlide(currentIdx + 1);

        }

    });



    // 슬라이더의 상태(인덱스 번호)에 따라 내비게이션, 인디케이터를 업데이트 하는 함수
    function update() {

        var navPrev = nav.filter(".prev");
        // .btn 클래스를 가지고 있는 것 중 .prev 클래스를 가지고 있는 것
        // 선택자.filter("선택자"); 선택한 요소를 필터링 하는 선택 메서드
        var navNext = nav.filter(".next");

        
        if( currentIdx == 0 ) {             // 현재 슬라이드 번호가 0이면(첫번째 슬라이드면)
            navPrev.addClass("disabled");   // disabled 클래스 추가(이전 버튼 없앰)
        } else {                                // 첫번째가 아니면
            navPrev.removeClass("disabled");    // disabled 클래스 제거(이전 버튼 살리기)
        }

        if( currentIdx == slideCount - 1 ) {
            // 인덱스 번호 4번 == 슬라이드의 개수(5개) - 1 같아지면
            // 마지막 슬라이드에 도달하면
            navNext.addClass("disabled");
        } else {
            navNext.removeClass("disabled");
        }


        // 현재 슬라이드의 인덱스에 맞는 인디케이터에 active 추가(불켜기)
        // indicator.find("li")
        // // 인디케이터 요소 선택
        //          .removeClass("active")
        //         //  혹시 먼저 active가 붙어있을 수도 있으니 전체적으로 다 클래스 삭제해줌
        //          .eq(currentIdx).addClass("active");
        //         //  해당 인덱스 번호에 맞는 요소만 선택해서 active 붙여줌


    }




    // 인디케이터 클릭 이벤트
    indicator.children().click(function(){
        // 인디케이터 버튼을 클릭하면

        if( !$(this).hasClass("active") ) {
            // 클릭한 해당 요소가 active클래스를 가지고있지 '않은' 경우만 실행
            // active상태가 아닌 인디케이터를 클릭했을 때

            goToSlide( $(this).index() );
            // 선택자.index() : 선택자의 인덱스 번호를 반환하는 메서드
            // 클릭한 요소의 인덱스 번호를 가져와 goToSlide함수의 매개변수로 전달하며 같은 인덱스번호로 이동하도록 실행한다.

        }

    });

$(function(){

    var brContainer = $(".bringup_conts");  // 슬라이드가 표시되는 영역
    var brSlideGroup = brContainer.find("ul"); // 실제 움직여주는 역할을 하는 박스
    var brSlides = brSlideGroup.find("li"); // 슬라이드 이미지들
    var brNav = $("bringup_slideBtn>btn");   // 이전, 다음 버튼들
    var brSlideCount = brSlides.length; // 슬라이드 개수
    var brCurrentIdx = 0; // 현재 보여지는 슬라이드의 인덱스 번호를 담을 변수
    var duration = 500; // 슬라이드 전환 시간(장이 넘어가는 속도)
    var easing = "swing";

    // 슬라이드 실행 함수
    function goToSlide(index) {

        brSlideGroup.animate({
            left: - 100 * index + "%"
        }, duration, easing);
        // 전체 슬라이드를 움직이는 코드
        brCurrentIdx = index;
        update();
    }

    goToSlide(brCurrentIdx);

    brNav.click(function(){

        if( $(this).hasClass("prev") ) {
            goToSlide(brCurrentIdx - 1);
        } else {
            goToSlide(brCurrentIdx + 1);
        }
    });


    function update() {

        var navPrev = brNav.filter(".prev");
        var navNext = brNav.filter(".next");

        if( brCurrentIdx == 0 ) {
            navPrev.addClass("disabled");  
        } else {                               
            navPrev.removeClass("disabled");
        }

        if( brCurrentIdx == brSlideCount - 1 ) {
            navNext.addClass("disabled");
        } else {
            navNext.removeClass("disabled");
        }
    }
});


    //양육정보 버튼
        var brContsSlider = $(".bringup_visual_wrap>ul");            
        var brContsSlideImg = brContsSlider.find(".bringup_conts");   
        //모든 슬라이드 이미지들을 가려놓고
        brContsSlideImg.hide();
        // 첫번째 슬라이드만 보여지게 세팅
        brContsSlideImg.first().show();
        $(".training_btn").click(function(){
            brContsSlideImg.hide();
            brContsSlideImg.first().fadeIn();
            $(".bringup_menu button").not($(this)).removeClass("bringup_btnEvents");
            $(this).addClass("bringup_btnEvents");
        });
        $(".signal_btn").click(function(){
            brContsSlideImg.hide();
            brContsSlideImg.eq(1).fadeIn();
            $(".bringup_menu button").not($(this)).removeClass("bringup_btnEvents");
            $(this).addClass("bringup_btnEvents");
        });
        $(".small_know_btn").click(function(){
            brContsSlideImg.hide();
            brContsSlideImg.last().fadeIn();
            $(".bringup_menu button").not($(this)).removeClass("bringup_btnEvents");
            $(this).addClass("bringup_btnEvents");
        });

        
        if ($(".training").show()){
            $('.training_btn').addClass("bringup_btnEvents");
        } else {
            $(".signal_btn .small_know_btn").removeClass("bringup_btnEvents");
        }
        



// 양육정보 슬라이드
$(function(){

    var brContainer = $(".bringup_conts");  // 슬라이드가 표시되는 영역
    var brSlideGroup = brContainer.find("ul"); // 실제 움직여주는 역할을 하는 박스
    var brNav = $(".bringup_slideBtn>.btn");   // 이전, 다음 버튼들
    var brSlideCount = 3; // 슬라이드 개수
    var brCurrentIdx = 0; // 현재 보여지는 슬라이드의 인덱스 번호를 담을 변수
    var duration = 500; // 슬라이드 전환 시간(장이 넘어가는 속도)
    var easing = "swing";

    // 슬라이드 실행 함수
    function goToSlide(index) {

        brSlideGroup.animate({
            left: - 100 * index + "%"
        }, duration, easing);
        // 전체 슬라이드를 움직이는 코드
        brCurrentIdx = index;
        update();
    }

    goToSlide(brCurrentIdx);

    brNav.click(function(){

        if( $(this).hasClass("prev") ) {
            goToSlide(brCurrentIdx - 1);
        } else {
            goToSlide(brCurrentIdx + 1);
        }
    });


    function update() {

        var navPrev = brNav.filter(".prev");
        var navNext = brNav.filter(".next");

        if( brCurrentIdx == 0 ) {
            navPrev.addClass("disabled");  
        } else {                               
            navPrev.removeClass("disabled");
        }

        if( brCurrentIdx == brSlideCount - 1 ) {
            navNext.addClass("disabled");
        } else {
            navNext.removeClass("disabled");
        }
    }
});


});