$(function () {
  $(".AllCatsub").hover(function (e) {

    $(".AllCatsub").not(this).find(".subs").slideUp();


    $(this).find(".subs").stop().slideToggle();

    e.stopPropagation();
  });
  // 푸터 사업자 정보 슬라이드토글
  $(".BizInfo").click(function () {
    $(this).nextAll("p").first().stop().slideToggle();
  });
  //메인메뉴 


  let isOpen = false;


  $("#AllCat").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (isOpen) {
      $(".subwrap").stop().slideUp();
      $("#AllCat").removeClass("selected");
    } else {
      $(".subwrap").stop().slideDown();
      $(this).addClass("selected");
    }
    isOpen = !isOpen;
  });

  $(window).click(function () {
    isOpen = false;
    $(".subwrap").stop().slideUp();
    $("#AllCat").removeClass("selected");
  })
  // 버튼박스 글씨 호버
  $(".circlebutton").hover(
    function () {
      const index = $(".circlebutton").index(this);
      $("#mbuttonbox p").eq(index).css({

        transition: "transform 0.2s",
        fontWeight: "600"
      });
    },
    function () {
      const index = $(".circlebutton").index(this);
      $("#mbuttonbox p").eq(index).css({

        transition: "transform 0.2s",
        fontWeight: "500"
      });
    }
  );
// 메인슬라이더
    $(".contents").not(":first").css({ "width": "60px" })
     $(".contents .Twrap:first").css({ "display": "block" })
         $(".contents .pagewrap:first").css({ "display": "block" })

    const prev = () => {
      $(".contents:last").css({ width: 0 }).prependTo(".s1sliderbox");
      $(".contents:first").stop(true).animate({ "width": 1134 }, "slow", "linear");
      $(".contents").eq(1).stop().animate({ "width": 60 }, "slow", "linear");
       
$(".contents:first").find(".Twrap").fadeIn("slow");
         $(".contents:first").find(".pagewrap").fadeIn("slow");
         $(".contents").eq(1).find(".Twrap").fadeOut("slow");
        $(".contents").eq(1).find(".pagewrap").fadeOut("slow");
 ;
    };

    const next = () => {
      $(".contents:first").stop().animate({ "width": 0 }, "slow", "linear");
      $(".contents").eq(1).stop(true).animate({ "width": 1134 }, "slow", "linear", function () {
        $(".contents:first").appendTo(".s1sliderbox");
        $(".contents:last").css({ "width": "60px" });
        $(".contents:last").find(".Twrap").fadeOut("slow");
        $(".contents:last").find(".pagewrap").fadeOut("slow");
        $(".contents:first .Twrap").fadeIn("slow");
        $(".contents:first .pagewrap").fadeIn("slow");
          // $(".contents").eq(1).find(".Twrap").fadeOut("slow");
          //  $(".pagewrap").eq(1).fadeIn("slow");
    // $(".pagewrap").eq(0).fadeOut("slow");
      })
    }

let sliderInterval = setInterval(next, 7000);

$(".s1sliderbox").hover(
  function () {
    
    clearInterval(sliderInterval);
    $(this).css("cursor", "pointer"); 
  },
  function () {
  
    sliderInterval = setInterval(next, 7000);
  }
);

    // 버튼 이벤트
    $('.s1 .leftbutton').click(prev);
    $('.s1 .rightbutton').click(next);

    // 오늘리디의발견 슬라이드
    
});