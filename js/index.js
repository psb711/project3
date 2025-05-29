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
      $('.s1 .leftbutton, .rightbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    }
  }
});


});

  // 오늘리디의발견 슬라이드

// $(function () {
//   const $slider = $('#book1 .arrybox');
//   const $leftBtn = $('#book1 .leftbutton');
//   const $rightBtn = $('#book1 .rightbutton');
//   const slideWidth = 215;
//   const totalSlides = $slider.find('.bookbox').length;
//   let currentIndex = 0;

//   updateButtons();

//   $leftBtn.click(function () {
//     if ($slider.is(':animated') || $leftBtn.css('opacity') == '0') return;

//     currentIndex--;
//     if (currentIndex < 0) currentIndex = 0;

//     $slider.find('.bookbox:last').prependTo($slider);
//     $slider.css('margin-left', -slideWidth);
//     $slider.stop().animate({ marginLeft: 0 }, 700, function () {
//       updateButtons();
//     });
//   });

//   $rightBtn.click(function () {
//     if ($slider.is(':animated') || $rightBtn.css('opacity') == '0') return;

//     currentIndex++;
//     if (currentIndex >= totalSlides - 1) currentIndex = totalSlides - 1;

//     $slider.stop().animate({ marginLeft: -slideWidth }, 700, function () {
//       $slider.find('.bookbox:first').appendTo($slider);
//       $slider.css({ marginLeft: 0 });
//       updateButtons();
//     });
//   });

//   function updateButtons() {
//     if (currentIndex <= 0) {
//       $leftBtn.css({ opacity: 0, pointerEvents: 'none' });
//       $rightBtn.css({ opacity: 1, pointerEvents: 'auto' });
//     } else if (currentIndex >= totalSlides - 1) {
//       $leftBtn.css({ opacity: 1, pointerEvents: 'auto' });
//       $rightBtn.css({ opacity: 0, pointerEvents: 'none' });
//     } else {
//       $leftBtn.css({ opacity: 1, pointerEvents: 'auto' });
//       $rightBtn.css({ opacity: 1, pointerEvents: 'auto' });
//     }
//   }
// });
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
  $('#book2 .leftbuttone').click(function () {
    $('#book2 #pol .book2box1:last').prependTo('#book2 #pol');
    $('#book2 #pol').css('margin-left', -403);
    $('#book2 #pol').stop().animate({ marginLeft: 0 }, 700);
  });

  $('#book2 .rightbuttone').click(function () {
    $('#book2 #pol').stop().animate({ marginLeft: -403 }, 700, function () {
      $('#book2 #pol .book2box1:first').appendTo('#book2 #pol');
      $('#book2 #pol').css({ marginLeft: 0 });
    });
  });

  // 경제
  $('#book2 .leftbuttonr').click(function () {
    $('#book2 #econ .book2box1:last').prependTo('#book2 #econ');
    $('#book2 #econ').css('margin-left', -403);
    $('#book2 #econ').stop().animate({ marginLeft: 0 }, 700);
  });

  $('#book2 .rightbuttonr').click(function () {
    $('#book2 #econ').stop().animate({ marginLeft: -403 }, 700, function () {
      $('#book2 #econ .book2box1:first').appendTo('#book2 #econ');
      $('#book2 #econ').css({ marginLeft: 0 });
    });
  });
  // 에세이
  $('#book2 .leftbuttont').click(function () {
    $('#book2 #Ess .book2box1:last').prependTo('#book2 #Ess');
    $('#book2 #Ess').css('margin-left', -403);
    $('#book2 #Ess').stop().animate({ marginLeft: 0 }, 700);
  });

  $('#book2 .rightbuttont').click(function () {
    $('#book2 #Ess').stop().animate({ marginLeft: -403 }, 700, function () {
      $('#book2 #Ess .book2box1:first').appendTo('#book2 #Ess');
      $('#book2 #Ess').css({ marginLeft: 0 });
    });
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

  //지금 많이 읽고있는 작품
$(function () {
  const $slider5 = $('#TLankDiv .TLankbox');
  const $leftBtn = $('#TLankDiv .leftbutton');
  const $rightBtn = $('#TLankDiv .rightbutton');
  const slideWidth = 1260;

  updateButtons();

  $leftBtn.click(function () {
    if ($slider5.is(':animated') || $leftBtn.css('opacity') === '0') return;

    $slider5.find('.TLankbox2:last').prependTo($slider5);
    $slider5.css('margin-left', -slideWidth);
    $slider5.stop().animate({ marginLeft: 0 }, 1200, function () {
      updateButtons();
    });
  });

  $rightBtn.click(function () {
    if ($slider5.is(':animated') || $rightBtn.css('opacity') === '0') return;

    $slider5.stop().animate({ marginLeft: -slideWidth }, 1200, function () {
      $slider5.find('.TLankbox2:first').appendTo($slider5);
      $slider5.css({ marginLeft: 0 });
      updateButtons();
    });
  });

  function updateButtons() {
    const firstId = $slider5.find('.TLankbox2').first().attr('id');
    const lastId = $slider5.find('.TLankbox2').last().attr('id');

    // 시작 슬라이드 ID와 마지막 슬라이드 ID를 여기에 맞게 설정하세요
    if (firstId === 'TLankbox2slide1') {
      $leftBtn.css({ opacity: 0, pointerEvents: 'none' });
      $rightBtn.css({ opacity: 1, pointerEvents: 'auto' });
    } else if (lastId === 'TLankbox2slide2') {
      $leftBtn.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn.css({ opacity: 0, pointerEvents: 'none' });
    } else {
      $leftBtn.css({ opacity: 1, pointerEvents: 'auto' });
      $rightBtn.css({ opacity: 1, pointerEvents: 'auto' });
    }
  }
});




  // $('#TLankDiv .leftbutton').click(function () {
  //   $('#TLankDiv .TLankbox2:last').prependTo('#TLankDiv .TLankbox');
  //   $('#TLankDiv .TLankbox').css('margin-left', -1260);
  //   $('#TLankDiv .TLankbox').stop().animate({ marginLeft: 0 }, 1200);

  // });

  // $('#TLankDiv .rightbutton').click(function () {
  //   $('#TLankDiv .TLankbox').stop().animate({ marginLeft: -1260 }, 1200, function () {
  //     $('#TLankDiv .TLankbox2:first').appendTo('#TLankDiv .TLankbox');
  //     $('#TLankDiv .TLankbox').css({ marginLeft: 0 });
  //   });
  // });

// 지금리디에서만? 선출간 신작

$('#book4 .leftbutton').click(function () {
  const $slider = $('#book4 .arrybox');
  if ($slider.is(':animated')) return;

  $slider.find('.bookbox:last').prependTo($slider);
  $slider.css('margin-left', -215);
  $slider.stop().animate({ marginLeft: 0 }, 700);
});

$('#book4 .rightbutton').click(function () {
  const $slider = $('#book4 .arrybox');
  if ($slider.is(':animated')) return;

  $slider.stop().animate({ marginLeft: -215 }, 700, function () {
    $slider.find('.bookbox:first').appendTo($slider);
    $slider.css({ marginLeft: 0 });
  });
});

// 새로나온작품


$
  const $slider = $('#book5 .arrybox');
  const totalItems = $slider.find('.bookbox').length;
  const visibleCount = 4;
  let currentIndex = 0;

  // 초기 상태: 왼쪽 버튼 투명하고 클릭 불가, 오른쪽 버튼 보이고 클릭 가능
  $('#book5 .leftbutton').css({
    opacity: 0,
    'pointer-events': 'none'
  });
  $('#book5 .rightbutton').css({
    opacity: 1,
    'pointer-events': 'auto'
  });

  $('#book5 .leftbutton').click(function () {
    if ($slider.is(':animated')) return;

    $slider.find('.ebox1:last').prependTo($slider);
    $slider.css('margin-left', -368.66);
    $slider.stop().animate({ marginLeft: 0 }, 700, function() {
      currentIndex--;
      updateButtons();
    });
  });

  $('#book5 .rightbutton').click(function () {
    if ($slider.is(':animated')) return;

    $slider.stop().animate({ marginLeft: -368.66 }, 700, function () {
      $slider.find('.bookbox:first').appendTo($slider);
      $slider.css({ marginLeft: 0 });
      currentIndex++;
      updateButtons();
    });
  });

  function updateButtons() {
    if (currentIndex <= 0) {
      currentIndex = 0;
      $('#book5 .leftbutton').css({
        opacity: 0,
        'pointer-events': 'none'
      });
      $('#book5 .rightbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    } else if (currentIndex >= totalItems - visibleCount) {
      currentIndex = totalItems - visibleCount;
      $('#book5 .rightbutton').css({
        opacity: 0,
        'pointer-events': 'none'
      });
      $('#book5 .leftbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    } else {
      $('#book5 .leftbutton, #book5 .rightbutton').css({
        opacity: 1,
        'pointer-events': 'auto'
      });
    }
  }


// $('#book5 .leftbutton').click(function () {
//   const $slider = $('#book5 .arrybox');
//   if ($slider.is(':animated')) return;

//   $slider.find('.bookbox:last').prependTo($slider);
//   $slider.css('margin-left', -215);
//   $slider.stop().animate({ marginLeft: 0 }, 700);
// });

// $('#book5 .rightbutton').click(function () {
//   const $slider = $('#book5 .arrybox');
//   if ($slider.is(':animated')) return;

//   $slider.stop().animate({ marginLeft: -215 }, 700, function () {
//     $slider.find('.bookbox:first').appendTo($slider);
//     $slider.css({ marginLeft: 0 });
//   });
// });

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


