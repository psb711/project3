$(function () {
  $(".AllCatsub").hover(function (e) {

    $(".AllCatsub").not(this).find(".subs").slideUp();


    $(this).find(".subs").stop().slideToggle();

    e.stopPropagation();
  });
  // 푸터 사업자 정보 슬라이드토글
  $(".BizInfo").click(function () {
    $(this).nextAll(".hi").first().stop().slideToggle();
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
  $(function() {
  let totalSlides = $('#s1SBox .contents').length;
  let currentIndex = 0; // 현재 슬라이드 인덱스(0부터 시작)

  $(".contents").not(":first").css({ "width": "60px" });
  $(".contents .Twrap:first").css({ "display": "block" });
  $(".contents .pagewrap:first").css({ "display": "block" });

  // 초기 버튼 상태 업데이트
  updateButtons(currentIndex, totalSlides);

  const prev = () => {
    if(currentIndex <= 0) return; // 첫 슬라이드면 동작 금지

    $(".contents:last").css({ width: 0 }).prependTo(".s1sliderbox");
    $(".contents:first").stop(true).animate({ "width": 1134 }, "slow", "linear");
    $(".contents").eq(1).stop().animate({ "width": 60 }, "slow", "linear");

    $(".contents:first").find(".Twrap").fadeIn("slow");
    $(".contents:first").find(".pagewrap").fadeIn("slow");
    $(".contents").eq(1).find(".Twrap").fadeOut("slow");
    $(".contents").eq(1).find(".pagewrap").fadeOut("slow");

    currentIndex--;
    updateButtons(currentIndex, totalSlides);
  };

  const next = () => {
    if(currentIndex >= totalSlides - 1) return; // 마지막 슬라이드면 동작 금지

    $(".contents:first").stop().animate({ "width": 0 }, "slow", "linear");
    $(".contents").eq(1).stop(true).animate({ "width": 1134 }, "slow", "linear", function () {
      $(".contents:first").appendTo(".s1sliderbox");
      $(".contents:last").css({ "width": "60px" });
      $(".contents:last").find(".Twrap").fadeOut("slow");
      $(".contents:last").find(".pagewrap").fadeOut("slow");
      $(".contents:first .Twrap").fadeIn("slow");
      $(".contents:first .pagewrap").fadeIn("slow");

      currentIndex++;
      updateButtons(currentIndex, totalSlides);
    });
  };

  // 버튼에 클릭 이벤트 연결
  $('.s1 .leftbutton').click(prev);
  $('.s1 .rightbutton').click(next);

  // 자동 슬라이드 (옵션)
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

  // 버튼 상태 업데이트 함수
  function updateButtons(currentIndex, totalSlides) {
    if (currentIndex <= 0) {
      $('.s1 .leftbutton').css({
        opacity: 0,
        'pointer-events': 'none'
      });
      $('.s1 .rightbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    } else if (currentIndex >= totalSlides - 1) {
      $('.s1 .rightbutton').css({
        opacity: 0,
        'pointer-events': 'none'
      });
      $('.s1 .leftbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    } else {
      $('.s1 .leftbutton,.s1 .rightbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    }
  }
});


});
// 배너버튼
 
$(function () {

  document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("banner").style.display = "none";
  });});
//  오늘 리디의 발견 슬라이드
$(function () {
  let page = 0;
  const slideWidth = 256;
  const $slider = $('#book1 .arrybox');
  const $leftBtn = $('#book1 .leftbutton');
  const $rightBtn = $('#book1 .rightbutton');
  const maxPage = 5;

  updateButtons();

  $leftBtn.click(function () {
    

    page--;
    $slider.stop().animate({ marginLeft: -slideWidth * page }, 700);
    updateButtons();
    if (page <= 0) return;
  });

  $rightBtn.click(function () {
    

    page++;
    $slider.stop().animate({ marginLeft: -slideWidth * page }, 700);
    updateButtons();
    if (page >= maxPage) return;
  });

  function updateButtons() {
    if (page <= 0) {
      $leftBtn.css({ opacity: 0, pointerEvents: 'none' });
      $rightBtn.css({ opacity: 1, pointerEvents: 'auto' });
    } else if (page >= maxPage) {
      $leftBtn.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn.css({ opacity: 0, pointerEvents: 'none' });
    } else {
      $leftBtn.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn.css({ opacity: 1, pointerEvents: 'auto' });
    }

  }
});

  // 한주,분야별 리디랭킹 슬라이드
  // 정치
$(function () {

  let page = 0;
  const slideWidth = 403;
  const $slider = $('#book2 #pol');
  const $leftBtn = $('#book2 .leftbuttone');
  const $rightBtn = $('#book2 .rightbuttone');
  const maxPage = 3;

  updateButtons();

  $leftBtn.click(function () {
    

    page--;
    $slider.stop().animate({ marginLeft: -slideWidth * page }, 700);
    updateButtons();
    if (page <= 0) return;
  });

  $rightBtn.click(function () {
    

    page++;
    $slider.stop().animate({ marginLeft: -slideWidth * page }, 700);
    updateButtons();
    if (page >= maxPage) return;
  });

  function updateButtons() {
    if (page <= 0) {
      $leftBtn.css({ opacity: 0, pointerEvents: 'none' });
      $rightBtn.css({ opacity: 1, pointerEvents: 'auto' });
    } else if (page >= maxPage) {
      $leftBtn.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn.css({ opacity: 0, pointerEvents: 'none' });
    } else {
      $leftBtn.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn.css({ opacity: 1, pointerEvents: 'auto' });
    }

  }
  });

  // 경제

  $(function () {
  let page1 = 0;
  const slideWidth = 403;
  const $slider1 = $('#book2 #econ');
  const $leftBtn1 = $('#book2 .leftbuttonr');
  const $rightBtn1 = $('#book2 .rightbuttonr');
  const maxPage1 = 3;

  updateButtons();

  $leftBtn1.click(function () {
    

    page1--;
    $slider1.stop().animate({ marginLeft: -slideWidth * page1 }, 700);
    updateButtons();
    if (page1 <= 0) return;
  });

  $rightBtn1.click(function () {
    

    page1++;
    $slider1.stop().animate({ marginLeft: -slideWidth * page1 }, 700);
    updateButtons();
    if (page1 >= maxPage1) return;
  });

  function updateButtons() {
    if (page1 <= 0) {
      $leftBtn1.css({ opacity: 0, pointerEvents: 'none' });
      $rightBtn1.css({ opacity: 1, pointerEvents: 'auto' });
    } else if (page1 >= maxPage1) {
      $leftBtn1.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn1.css({ opacity: 0, pointerEvents: 'none' });
    } else {
      $leftBtn1.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn1.css({ opacity: 1, pointerEvents: 'auto' });
    }

  }
  });


  // 에세이

$(function () {
  let page2 = 0;
  const slideWidth = 403;
  const $slider2 = $('#book2 #Ess');
  const $leftBtn2 = $('#book2 .leftbuttont');
  const $rightBtn2 = $('#book2 .rightbuttont');
  const maxPage2 = 3;

  updateButtons2();

  $leftBtn2.click(function () {
    

    page2--;
    $slider2.stop().animate({ marginLeft: -slideWidth * page2 }, 700);
    updateButtons2();
    if (page2 <= 0) return;
  });

  $rightBtn2.click(function () {
    

    page2++;
    $slider2.stop().animate({ marginLeft: -slideWidth * page2 }, 700);
    updateButtons2();
    if (page2 >= maxPage2) return;
  });

  function updateButtons2() {
    if (page2 <= 0) {
      $leftBtn2.css({ opacity: 0, pointerEvents: 'none' });
      $rightBtn2.css({ opacity: 1, pointerEvents: 'auto' });
    } else if (page2 >= maxPage2) {
      $leftBtn2.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn2.css({ opacity: 0, pointerEvents: 'none' });
    } else {
      $leftBtn2.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn2.css({ opacity: 1, pointerEvents: 'auto' });
    }

  }
  });


  //md'spick
  $('#book3 .leftbutton').click(function () {
    $('#book3 .mdbox1:last').prependTo('#book3 .mdbox');
    $('#book3 .mdbox').css('margin-left', -368.66);
    $('#book3 .mdbox').stop().animate({ marginLeft: 0 }, 700);
  });

  $('#book3 .rightbutton').click(function () {
    $('#book3 .mdbox').stop().animate({ marginLeft: -368.66 }, 700, function () {
      $('#book3 .mdbox1:first').appendTo('#book3 .mdbox');
      $('#book3 .mdbox').css({ marginLeft: 0 });
    });
  });

$(function () {
  let page3 = 0;
  const slideWidth = 426.662;
  const $slider3 = $('#book3 .mdbox');
  const $leftBtn3 = $('#book3 .leftbutton');
  const $rightBtn3 = $('#book3 .rightbutton');
  const maxPage3 = 2;

  updateButtons3();

  $leftBtn3.click(function () {
    

    page3--;
    $slider3.stop().animate({ marginLeft: -slideWidth * page3 }, 700);
    updateButtons3();
    if (page2 <= 0) return;
  });

  $rightBtn3.click(function () {
    

    page3++;
    $slider3.stop().animate({ marginLeft: -slideWidth * page3 }, 700);
    updateButtons3();
    if (page3 >= maxPage3) return;
  });

  function updateButtons3() {
    if (page3 <= 0) {
      $leftBtn3.css({ opacity: 0, pointerEvents: 'none' });
      $rightBtn3.css({ opacity: 1, pointerEvents: 'auto' });
    } else if (page3 >= maxPage3) {
      $leftBtn3.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn3.css({ opacity: 0, pointerEvents: 'none' });
    } else {
      $leftBtn3.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn3.css({ opacity: 1, pointerEvents: 'auto' });
    }

  }
  });

  //지금 많이 읽고있는 작품
$(function () {
  let page4 = 0;
  const slideWidth = 1260;
  const $slider4 = $('#TLankDiv .TLankbox');
  const $leftBtn4 = $('#TLankDiv .leftbutton');
  const $rightBtn4 = $('#TLankDiv .rightbutton');
  const maxPage4 = 1;

  updateButtons4();

  $leftBtn4.click(function () {
    

    page4--;
    $slider4.stop().animate({ marginLeft: -slideWidth * page4 }, 700);
    updateButtons4();
    if (page4 <= 0) return;
  });

  $rightBtn4.click(function () {
    

    page4++;
    $slider4.stop().animate({ marginLeft: -slideWidth * page4 }, 700);
    updateButtons4();
    if (page4 >= maxPage4) return;
  });

  function updateButtons4() {
    if (page4 <= 0) {
      $leftBtn4.css({ opacity: 0, pointerEvents: 'none' });
      $rightBtn4.css({ opacity: 1, pointerEvents: 'auto' });
    } else if (page4 >= maxPage4) {
      $leftBtn4.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn4.css({ opacity: 0, pointerEvents: 'none' });
    } else {
      $leftBtn4.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn4.css({ opacity: 1, pointerEvents: 'auto' });
    }

  }
  });


// 지금리디에서만? 선출간 신작

$(function () {
  let page5 = 0;
  const slideWidth5 = 256;
  const $slider5 = $('#book4 .arrybox');
  const $leftBtn5 = $('#book4 .leftbutton');
  const $rightBtn5 = $('#book4 .rightbutton');
  const maxPage5 = 5;

  updateButtons5();

  $leftBtn5.click(function () {
    

    page5--;
    $slider5.stop().animate({ marginLeft: -slideWidth5 * page5 }, 700);
    updateButtons5();
    if (page5 <= 0) return;
  });

  $rightBtn5.click(function () {
    

    page5++;
    $slider5.stop().animate({ marginLeft: -slideWidth5 * page5 }, 700);
    updateButtons5();
    if (page5 >= maxPage5) return;
  });

  function updateButtons5() {
    if (page5 <= 0) {
      $leftBtn5.css({ opacity: 0, pointerEvents: 'none' });
      $rightBtn5.css({ opacity: 1, pointerEvents: 'auto' });
    } else if (page5 >= maxPage5) {
      $leftBtn5.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn5.css({ opacity: 0, pointerEvents: 'none' });
    } else {
      $leftBtn5.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn5.css({ opacity: 1, pointerEvents: 'auto' });
    }

  }
  });

// 새로나온작품

$(function () {
  let page6 = 0;
  const slideWidth6 = 256;
  const $slider6 = $('#book5 .arrybox');
  const $leftBtn6 = $('#book5 .leftbutton');
  const $rightBtn6 = $('#book5 .rightbutton');
  const maxPage6 = 5;

  updateButtons6();

  $leftBtn6.click(function () {
    

    page6--;
    $slider6.stop().animate({ marginLeft: -slideWidth6 * page6 }, 700);
    updateButtons6();
    if (page6 <= 0) return;
  });

  $rightBtn6.click(function () {
    

    page6++;
    $slider6.stop().animate({ marginLeft: -slideWidth6 * page6 }, 700);
    updateButtons6();
    if (page6 >= maxPage6) return;
  });

  function updateButtons6() {
    if (page6 <= 0) {
      $leftBtn6.css({ opacity: 0, pointerEvents: 'none' });
      $rightBtn6.css({ opacity: 1, pointerEvents: 'auto' });
    } else if (page6 >= maxPage6) {
      $leftBtn6.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn6.css({ opacity: 0, pointerEvents: 'none' });
    } else {
      $leftBtn6.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn6.css({ opacity: 1, pointerEvents: 'auto' });
    }

  }
  });
// 한주 한책, 셀렉트 레터 +
$(function() {
  const $slider = $('#book6 .ebox');
  const totalItems = $slider.find('.ebox1').length;
  const visibleCount = 4;
  let currentIndex = 0;

  // 초기 상태: 왼쪽 버튼 투명하고 클릭 불가, 오른쪽 버튼 보이고 클릭 가능
  $('#book6 .leftbutton').css({
    opacity: 0,
    'pointer-events': 'none'
  });
  $('#book6 .rightbutton').css({
    opacity: 1,
    'pointer-events': 'auto'
  });

  $('#book6 .leftbutton').click(function () {
    if ($slider.is(':animated')) return;

    $slider.find('.ebox1:last').prependTo($slider);
    $slider.css('margin-left', -368.66);
    $slider.stop().animate({ marginLeft: 0 }, 700, function() {
      currentIndex--;
      updateButtons();
    });
  });

  $('#book6 .rightbutton').click(function () {
    if ($slider.is(':animated')) return;

    $slider.stop().animate({ marginLeft: -368.66 }, 700, function () {
      $slider.find('.ebox1:first').appendTo($slider);
      $slider.css({ marginLeft: 0 });
      currentIndex++;
      updateButtons();
    });
  });

  function updateButtons() {
    if (currentIndex <= 0) {
      currentIndex = 0;
      $('#book6 .leftbutton').css({
        opacity: 0,
        'pointer-events': 'none'
      });
      $('#book6 .rightbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    } else if (currentIndex >= totalItems - visibleCount) {
      currentIndex = totalItems - visibleCount;
      $('#book6 .rightbutton').css({
        opacity: 0,
        'pointer-events': 'none'
      });
      $('#book6 .leftbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    } else {
      $('#book6 .leftbutton, #book6 .rightbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    }
  }

  updateButtons();
});

// 이벤트


$(function() {
  const $slider = $('#book7 .ebox');
  const totalItems = $slider.find('.ebox1').length;
  const visibleCount = 4;
  let currentIndex = 0;

  // 초기 상태: 왼쪽 버튼 투명하고 클릭 불가, 오른쪽 버튼 보이고 클릭 가능
  $('#book7 .leftbutton').css({
    opacity: 0,
    'pointer-events': 'none'
  });
  $('#book7 .rightbutton').css({
    opacity: 1,
    'pointer-events': 'auto'
  });

  $('#book7 .leftbutton').click(function () {
    if ($slider.is(':animated')) return;

    $slider.find('.ebox1:last').prependTo($slider);
    $slider.css('margin-left', -368.66);
    $slider.stop().animate({ marginLeft: 0 }, 700, function() {
      currentIndex--;
      updateButtons();
    });
  });

  $('#book7 .rightbutton').click(function () {
    if ($slider.is(':animated')) return;

    $slider.stop().animate({ marginLeft: -368.66 }, 700, function () {
      $slider.find('.ebox1:first').appendTo($slider);
      $slider.css({ marginLeft: 0 });
      currentIndex++;
      updateButtons();
    });
  });

  function updateButtons() {
    if (currentIndex <= 0) {
      currentIndex = 0;
      $('#book7 .leftbutton').css({
        opacity: 0,
        'pointer-events': 'none'
      });
      $('#book7 .rightbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    } else if (currentIndex >= totalItems - visibleCount) {
      currentIndex = totalItems - visibleCount;
      $('#book7 .rightbutton').css({
        opacity: 0,
        'pointer-events': 'none'
      });
      $('#book7 .leftbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    } else {
      $('#book7 .leftbutton, #book7 .rightbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    }
  }

  updateButtons();
});


