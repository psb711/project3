$(document).ready(function () {
  
  $("#AllCat").click(function () {
    $(".sub").stop().slideToggle();
  });

 
  $(".AllCatsub").hover(function (e) {

    $(".AllCatsub").not(this).find(".subs").slideUp();

    
    $(this).find(".subs").stop().slideToggle();

    e.stopPropagation();
  });

  $("#BRN h5").click(function () {
  $(this).next("p").stop().slideToggle();
});
});