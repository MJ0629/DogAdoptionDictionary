$(function () {
    var forFamily = $(".adobt_info_family")
        forFamilyTitle =    $(".adobt_menu_01");
    var forGoods =  $(".adobt_info_goods")
        forGoodsTitle = $(".adobt_menu_02");
    var adobt_conts = $(".adobt_info_family>div");
        // 가족이 되는법 사진 클릭했을 때 애니메이션 시작

        forFamily.on('click',function(){
                forFamily.addClass("active");
                forFamilyTitle.addClass("active");
                forGoods.hide();
                forGoodsTitle.hide();
                adobt_conts.fadeIn().css({display:"flex"});
                $(".adobt_info_title").fadeOut();
                $(".adobt_btn").animate({
                    right: 0,
                    top: 0,
                }).css({background : "#f4d35e"}).fadeIn(1000);
        }); 
        // 가족이 되는법 사진 클릭했을 때 애니메이션 끝


        //필요한 물품 클릭했을 때 애니메이션 시작

        forGoods.on('click',function(){
            forGoods.addClass("active");
            forGoodsTitle.addClass("active");
            forFamily.hide();
            forFamilyTitle.hide();
            $(".adobt_info_title").fadeOut();
            $(".adobt_btn").animate({
                right: 0,
                top: 0,
            }).css({background : "#ee964b"}).fadeIn(1000);
        }); 
        //필요한 물품 클릭했을 때 애니메이션 시작


        // 닫기버튼
        $(".adobt_btn").on("click",function(){
            forFamily.removeClass("active");
            forGoods.removeClass("active");
            forFamilyTitle.removeClass("active");
            forGoodsTitle.removeClass("active");
            $('.adobt_btn').fadeOut;
            forFamily.fadeIn();
            forGoods.fadeIn();
            forFamilyTitle.fadeIn();
            forGoodsTitle.fadeIn();


            adobt_conts.hide()

            $(".adobt_info_title").fadeIn();
            $(".close_btn").hide();
            $(".adobt_btn").fadeOut();
        });





        //가족이되는 방법
        var breeder = $(".breeder");
            shelter = $(".shelter");
            breederBtn = breeder.find($('.plus_btn'));
            shelterBtn = shelter.find($('.plus_btn'));
            breederModal = breeder.find($('.howto'));
            shelterModal = shelter.find($('.howto'));
            closeModal = $(".howto").find(("button"));

        breederBtn.on("click",function(){
            breederModal.fadeIn().css("display", "flex");
            $("html").css("overflow","hidden");
            $("header").fadeOut();
        });
        
        shelterBtn.on("click",function(){
            shelterModal.fadeIn().css("display", "flex");
            $("html").css("overflow","hidden");
            $("header").fadeOut();
        });

        closeModal.on("click",function(){
            breederModal.fadeOut();
            shelterModal.fadeOut();
            $("html").css("overflow","unset");
            $("header").fadeIn();
        })
});