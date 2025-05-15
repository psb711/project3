$(document).ready(function () {
  
 
 
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

  $(window).click(function(){
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

    
 

});