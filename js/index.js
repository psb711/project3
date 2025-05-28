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






  // 오늘리디의발견 슬라이드$(function () {

$('#book1 .leftbutton').click(function () {
  const $slider = $('#book1 .arrybox');
  if ($slider.is(':animated')) return;

  $slider.find('.bookbox:last').prependTo($slider);
  $slider.css('margin-left', -215);
  $slider.stop().animate({ marginLeft: 0 }, 700);
});

$('#book1 .rightbutton').click(function () {
  const $slider = $('#book1 .arrybox');
  if ($slider.is(':animated')) return;

  $slider.stop().animate({ marginLeft: -215 }, 700, function () {
    $slider.find('.bookbox:first').appendTo($slider);
    $slider.css({ marginLeft: 0 });
  });
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
  $('#TLankDiv .leftbutton').click(function () {
    $('#TLankDiv .TLankbox2:last').prependTo('#TLankDiv .TLankbox');
    $('#TLankDiv .TLankbox').css('margin-left', -1260);
    $('#TLankDiv .TLankbox').stop().animate({ marginLeft: 0 }, 1200);

  });

  $('#TLankDiv .rightbutton').click(function () {
    $('#TLankDiv .TLankbox').stop().animate({ marginLeft: -1260 }, 1200, function () {
      $('#TLankDiv .TLankbox2:first').appendTo('#TLankDiv .TLankbox');
      $('#TLankDiv .TLankbox').css({ marginLeft: 0 });
    });
  });

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

// 한주 한책, 셀렉트 레터

$('#book6 .leftbutton').click(function () {
  const $slider = $('#book6 .ebox');
  if ($slider.is(':animated')) return;

  $slider.find('.ebox1:last').prependTo($slider);
  $slider.css('margin-left', -368.66);
  $slider.stop().animate({ marginLeft: 0 }, 700);
});

$('#book6 .rightbutton').click(function () {
  const $slider = $('#book6 .ebox');
  if ($slider.is(':animated')) return;

  $slider.stop().animate({ marginLeft: -368.66 }, 700, function () {
    $slider.find('.ebox1:first').appendTo($slider);
    $slider.css({ marginLeft: 0 });
  });
});

// 이벤트

$('#book7 .leftbutton').click(function () {
  const $slider = $('#book7 .ebox');
  if ($slider.is(':animated')) return;

  $slider.find('.ebox1:last').prependTo($slider);
  $slider.css('margin-left', -368.66);
  $slider.stop().animate({ marginLeft: 0 }, 700);
});

$('#book7 .rightbutton').click(function () {
  const $slider = $('#book7 .ebox');
  if ($slider.is(':animated')) return;

  $slider.stop().animate({ marginLeft: -368.66 }, 700, function () {
    $slider.find('.ebox1:first').appendTo($slider);
    $slider.css({ marginLeft: 0 });
  });
});




});