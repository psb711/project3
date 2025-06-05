// 텍스트파일가져오기  
async function textcall() {
   try {
      const response = await fetch("./text/책상세설명.txt");
      
      if (!response.ok) {
         throw new Error("Network response was not ok");
      }
      const data = await response.text();
      console.log(data)
      document.getElementById("subtxt1").innerHTML = data;
   } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
   }
};
  
textcall();



// 작품정보메뉴 클릭
$(document).ready(function () {
   const $items = $('#ContentInfoUL > li');

   // ⭐ 초기 설정: 첫 번째 li 열기 및 스타일 적용
   $items.eq(0).children('ul').show(); // ul 보이기
   $items.eq(0).css({
      'background-color': '#fff',
      'color': '#000',
      'border-bottom': 'none'
   });

   // 클릭 이벤트 설정
   $items.click(function (e) {
      // 다른 li들의 ul은 닫기
      $items.not(this).children('ul').hide();

      // 스타일 초기화
      $items.css({
         'background-color': '',
         'color': '',
         'border-bottom': ''
      });

      // 현재 li의 ul 토글
      $(this).children('ul').toggle();

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