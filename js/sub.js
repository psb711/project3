// 텍스트파일가져오기  
// async function textcall() {
//    try {
//       const response = await fetch("./text/책상세설명.txt");
      
//       if (!response.ok) {
//          throw new Error("Network response was not ok");
//       }
//       const data = await response.text();
//       console.log(data)
//       document.getElementById("subtxt1").innerHTML = data;
//    } catch (error) {
//       console.error("There was a problem with the fetch operation:", error);
//    }
// };
  
// textcall();


const txtarry = ["./text/책상세설명.txt", "./text/목차상세설명.txt", "./text/출판사서평.txt", 
   "./text/작가프로필.txt", "./text/작가소개.txt", "./text/리뷰작성유의사항.txt"

];

async function textcall() {
   for (let i = 0; i < txtarry.length; i++) {
      try {
         const response = await fetch(txtarry[i]);
         if (!response.ok) {
            throw new Error("Network response was not ok");
         }
         const data = await response.text();
     
         document.getElementById("subtxt" + i).innerHTML = data;
      } catch (error) {
         console.error("There was a problem with the fetch operation:", error);
      }
   }
}

textcall();















// 작품정보,작가메뉴 클릭
$(document).ready(function () {
   const $items = $('#ContentInfoUL > li');
   const $con = $('.mL')

   
   $(".ML").eq(0).children('ul').show(); 
   $items.eq(0).css({
      'background-color': '#fff',
      'color': '#000',
      'border-bottom': 'none'
   });


   $items.click(function (e) {
   
      $(".ML").not(this).hide();

      
      $items.css({
         'background-color': '',
         'color': '',
         'border-bottom': ''
      });
$('#ContentInfoUL li').click(function () {
    const index = $(this).index(); // 몇 번째 li인지 확인
    $('#ContentInfoULbottom .ML').hide().eq(index).css('display', 'block');
  });
    
     

    
      $(this).css({
         'background-color': '#fff',
         'color': '#000',
         'border-bottom': 'none'
      });

      e.stopPropagation(); 
   });

   
   $('#ContentInfoUL .More').click(function (e) {
      e.stopPropagation();
   });
});

$(document).ready(function () {
   const $items = $('#AuthorInfoUL > li');

   // 초기 설정: 첫 번째 li 열기 및 스타일 적용
   $('#AuthorInfoULTop li').eq(0).children('ul').show(); // ul 보이기
   $items.eq(0).css({
      'background-color': '#fff',
      'color': '#000',
      'border-bottom': 'none'
   });

   // 클릭 이벤트 설정
   $items.click(function (e) {
      // 다른 li들의 ul은 닫기
         $('#AuthorInfoULTop >li').not(this).hide();

      // 스타일 초기화
      $items.css({
         'background-color': '',
         'color': '',
         'border-bottom': ''
      });

      // 현재 li의 ul 토글
    $('#AuthorInfoUL > li').click(function () {
    const index = $(this).index(); // 몇 번째 li인지 확인
    $('#AuthorInfoULTop> li').hide().eq(index).css('display', 'block');
  });

      // 스타일 적용
      $(this).css({
         'background-color': '#fff',
         'color': '#000',
         'border-bottom': 'none'
      });

      e.stopPropagation(); // 이벤트 버블링 방지
   });

   // 내부 버튼 클릭 시 이벤트 전파 방지 (접힘 방지용)
   $('#ContentInfoUL .More').click(function (e) {
      e.stopPropagation();
   });
});


document.querySelectorAll('[id^="subtxt"],#bookdetail').forEach(el => {
  el.addEventListener('click', function(e) {
    e.stopPropagation(); // 이벤트 전파 방지
    e.preventDefault();  // 기본 동작 방지 (필요한 경우)
  });
});

// 이미지 뒷면 보임
$(".book_imgs").click(function () {
  $(this).toggleClass("rotate");
});
// 모달창보임
$("#PRVBTN").click(function(){
   $("#PRVModal").toggle();
})

document.querySelectorAll('button[data-target]').forEach(button => {
  button.addEventListener('click', () => {
    const targetSelector = button.getAttribute('data-target'); // ex) "#content2"

    // 모든 콘텐츠 숨기기
    document.querySelectorAll('div[id^="ridi_link_c"]').forEach(div => {
      div.style.display = 'none';
    });

    // 클릭한 버튼에 해당하는 콘텐츠만 보이기
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      targetElement.style.display = 'block';
    }
  });
});

// 글씨크기조정
$(document).ready(function () {$(".smaller_button").click(function(){
   let currentSize =parseInt($(".modalleftbottom p,.modalleftbottom h5").css('font-size'));
   $( ".modalleftbottom p,.modalleftbottom h5").css('font-size', currentSize-2+"px")
})

   $(".bigger_button").click(function(){
   let currentSize =parseInt($(".modalleftbottom p,.modalleftbottom h5").css('font-size'));
   $( ".modalleftbottom p,.modalleftbottom h5").css('font-size', currentSize+2+"px")
})

});

// 별점남기기


  $(".BuyerStar1 svg").hover(function(){
  $(this).css("color","#e54c43");
  $(this).prevAll().css("color","#e54c43");
},function(){
  $(this).css("color","#e6e6e6");
  $(this).prevAll().css("color","#e6e6e6");
});
// 더보기
$(document).ready(function () {
  $('.More').click(function () {
    const index = $('.More').index(this);
    const target = $('.ML').eq(index);

    target.addClass('expanded');
    $(this).hide();
    $('.less').eq(index).show();
  });

  $('.less').click(function () {
    const index = $('.less').index(this);
    const target = $('.ML').eq(index);

    target.removeClass('expanded');
    $(this).hide();
    $('.More').eq(index).show();
  });
});



$(document).ready(function () {
   $('.page1 li').hover(function(){
      $(this).css('cursor','pointer')
   })
  $('.page1 li').click(function () {
    const index = $(this).index();
    

    // 1. li 색상 변경
    $('.page1 li').removeClass('active1');
    $(this).addClass('active1');

    // 2. 슬라이더 이동
    const move = -866 * index;
    $('#reviewarry').css('transform', `translateX(${move}px)`);
  });

  // 처음에 첫 번째 li 활성화
  $('.page1 li').eq(0).addClass('active1');
  $('#reviewarry').css('transform', 'translateX(0px)');
});



$(document).ready(function () {
  $('#reviewtop3 span').click(function () {
    // 텍스트 영역 토글
    $('#subtxt5').slideToggle(200);

    // svg 회전 토글
    $(this).toggleClass('active3');
  });
});