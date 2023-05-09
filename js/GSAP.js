gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); 
gsap.registerPlugin(TextPlugin);




// 스크롤 트리거 . observe ({ 
//     target : window , // 모든 요소가 될 수 있음(선택자 텍스트는 괜찮음) 
//     type : "wheel,touch" , // 쉼표로 구분된 목록("wheel,touch,scroll,pointer") 
//     onUp : () => 이전 (),  
//     onDown : () => 다음 (), });