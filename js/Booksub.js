const REST_API_KEY = "ae7ed16e4ebfc183e568ffdeaeedc76d"

async function fetchBooks(query) {
   const params = new URLSearchParams({
      target: "person",
      query,
      size: 10
   });
   const url = `https://dapi.kakao.com/v3/search/book?${params}`;

   const response = await fetch(url, {
      method: 'GET',
      headers: {
         Authorization: `KakaoAK ${REST_API_KEY}`
      }
   });

   if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
   }

   return response.json();
}



async function bookData0() {
   try {
      const querys = ['유시민'];

      const data = await fetchBooks(querys);
      const divs = $('#AuthorWorks .bookbox')

      for(let i in divs){
         divs.eq(i).append(`
            <a href="">
               <div class="bookbox1">
                  <img src=${data.documents[i].thumbnail}>
               </div>
               <div class="titbox1"> 
               <h4>
                   ${data.documents[i].title.length > 9
               ? data.documents[i].title.substring(0, 9) + '...'
               : data.documents[i].title
            }</h4>
            </a>`
         )
      }
   } catch (error) {
      console.log('에러발생', error);
   }
}
bookData0();






async function fetchBooks1(query) {
   const params = new URLSearchParams({
      target: "title",
      query,
      size: 50
   });
   const url = `https://dapi.kakao.com/v3/search/book?${params}`;

   const response = await fetch(url, {
      method: 'GET',
      headers: {
         Authorization: `KakaoAK ${REST_API_KEY}`
      }
   });

   if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
   }

   return response.json();
}





async function bookData1() {
   try {
      const querys = ['빛들의 환대', '사과', '감정수업', '탁영', '파과', '도전', '호랑골동품점', '호의', '사랑', '행복'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks1(query);

         const divs = $('#book1 .bookbox')

         divs.eq(i).append(`
            <a href="">
               <div class="bookbox1">
                  <img src=${data.documents[0].thumbnail}>
               </div>
               <div class="titbox1"> 
               <h4>
                   ${data.documents[0].title.length > 9
               ? data.documents[0].title.substring(0, 9) + '...'
               : data.documents[0].title
            }</h4>
<p>${data.documents[0].authors}</p>
            </div>
            </a>`);
      })

   } catch (error) {
      console.log('에러발생', error);
   }
}
bookData1();

async function bookData2() {
   try {
      const querys = ['빛들의 환대', '사과', '감정수업', '탁영', '파과', '도전', '호랑골동품점', '호의', '사랑', '행복'];


      querys.forEach(async (query, i) => {
         const data = await fetchBooks1(query);

         const divs = $('#book2 .bookbox')

         divs.eq(i).append(`
            <a href="">
               <div class="bookbox1">
                  <img src=${data.documents[0].thumbnail}>
               </div>
               <div class="titbox1"> 
               <h4>
                   ${data.documents[0].title.length > 9
               ? data.documents[0].title.substring(0, 9) + '...'
               : data.documents[0].title
            }</h4>
        <p>${data.documents[0].authors}</p>

            </div>
            </a>`);
      })

   } catch (error) {
      console.log('에러발생', error);
   }
}
bookData2();






async function review() {
   const nickname = ['ads***', '8w5***', 'hunm***', '56jk***', 'huy7***', 'c1qr***', 'jsu***', 'lov***', 'kim***', 'n7unu***', '8dk***', 'gugu7***', 'pbo1***', 'dsww***', '7tb***'];

   const reviewcontent = [
      "유시민 특유의 통찰력으로 풀어낸 책 속 메시지들이 마음에 깊이 남았습니다.",
      "청춘의 방황과 고민에 대해 진심으로 이야기해주는 책이에요.", "음... 솔직히 기대 너무 많이 했던 내 잘못인가 싶기도 함. 다들 인생책이라길래 설레는 마음으로 펼쳤는데, 좀... ‘아재 감성’ 느낌 많이 남. 작가 본인 얘기가 너무 많아서 독서 이야기라기보단 자서전 느낌이고, 책 추천한다기보단 본인 지식 자랑 같달까. ‘꼰대력이 살짝 있다’는 생각도 들었음ㅠ 내용 자체가 나쁘진 않은데 요즘 청춘들 감성에는 안 맞는 듯. 그냥 내 취향은 아니었음",
      "짧은 글 속에서도 인생의 방향을 고민하게 만드는 힘이 있습니다.",
      "고전과 현대문학을 넘나드는 해석이 인상 깊었습니다.", "책 읽는 거 국룰 아니었는데 이건 진짜 몰입감 미쳤음. 작가가 소개하는 책들도 좋은데, 그걸 해석하는 방식이 개신박함. 유시민식 뇌세포 자극 글쓰기랄까? 나도 모르게 ‘그니까 나도 그 생각 했었는데...!’ 하면서 공감하고 있음. 솔직히 좀 진지한 척하나 싶었는데 읽다 보면 인정할 수밖에 없음. 청춘이라면 한 번쯤 뇌 때리고 가는 책임. 그냥.. 미친 책이에요 이거. ㄹㅇ 추천함.",
      "청춘의 방황과 성장, 그리고 사유에 대해 유시민 작가 특유의 통찰력으로 풀어내 감명 깊게 읽었습니다. 단순한 독서 에세이가 아니라 삶의 방향성을 고민하게 하는 철학서에 가깝습니다.",
      "이 책을 읽고 나니 책을 대하는 태도도 조금 달라졌어요.",
      "무엇을 읽고 어떻게 생각할 것인가에 대한 깊은 메시지를 줍니다.",
      "기대한 것보다 내용이 무겁고, 작가 개인의 독서 경험에 너무 의존한 느낌이라 공감이 잘 되지 않았습니다. 청춘을 위한 책이라기보다는 작가의 지적 과시처럼 느껴졌어요.",
      "청춘에게 건네는 따뜻한 조언과 함께 독서의 힘을 다시 느끼게 해줍니다.",
      "책을 읽으면서 나 자신과 마주하게 되었고, 고전 문학과 현실 사회를 엮는 방식이 인상적이었습니다. 작가가 추천한 책들을 하나씩 찾아 읽고 싶은 욕구가 생겼어요.", "이 책... ㄹㅇ 인생 책임. 처음엔 그냥 유명하니까 읽어볼까 했는데, 읽다 보니까 TMI처럼 보였던 작가 얘기가 갑자기 찐명언으로 다가옴ㅋㅋ ‘아 이래서 다들 유시민 유시민 하는구나’ 싶었음. 인생 현타 올 때, 진짜 뭐라도 붙잡고 싶을 때 읽으면 생각 정리도 되고 멘탈도 어느 정도 회복됨. 자기계발서 느낌은 아닌데, 묘하게 동기부여 오지는 책. 나만 알고 싶었는데 또 공유하고 싶은 그 느낌 아시죠?", "좋아요", "내가 말이지, 책이라는 걸 참 많이 읽어봤지만, 요즘 젊은이들한테 이렇게 어울리는 책은 드물어. 유시민이라는 양반, 글을 아주 조리 있게 잘 써. 세상 사는 데 필요한 생각거리도 많고, 고전 읽는 재미도 있고 말이야. 청춘들이 이 책 한 번 정독하면 괜히 헛되이 살지는 않을 거야. 나 같아도 손자한테 이 책 한 권 권해주고 싶을 정도야. 세월이 흘러도 통하는 이야기들이 들어 있어"
   ];

   const date = ['2025.03.05', '2025.03.25', '2025.04.15', '2025.04.18', '2025.05.05', '2025.05.12', '2025.05.20', '2025.06.01', '2025.06.08', '2025.06.11'];

   const divs = $('#reviewarry li');
   const starSVG = `
<svg viewBox="0 0 48 48" fill="currentColor" class="rigrid-5pzvtg">
  <path d="M23.3202 1.68653C23.6004 1.12182 24.4143 1.12214 24.6941 1.68707L31.5031 15.4371C31.6142 15.6614 31.83 15.8171 32.0799 15.8531L47.3444 18.0533C47.9707 18.1436 48.2217 18.9041 47.7698 19.3425L36.7178 30.0645C36.5388 30.2382 36.4572 30.4876 36.4994 30.7321L39.1075 45.8503C39.2143 46.4693 38.5564 46.9403 37.9953 46.6464L24.3655 39.5078C24.1417 39.3905 23.8737 39.3905 23.6498 39.5076L10.0043 46.6474C9.44322 46.9409 8.78559 46.47 8.89236 45.8511L11.5006 30.7321C11.5428 30.4876 11.4612 30.2382 11.2822 30.0645L0.230204 19.3425C-0.221654 18.9041 0.0293132 18.1436 0.655609 18.0533L15.9205 15.853C16.1701 15.817 16.3858 15.6616 16.497 15.4376L23.3202 1.68653Z">
  </path>
</svg>
`;

   const repeatedStars = `${starSVG.repeat(5)}`;

   for (let i = 0; i < divs.length && i < nickname.length; i++) {
      const reviewHTML = `
      <div id="UserRating">
        <div>
          ${repeatedStars}
        </div>
        <p class="reviewcontent">${reviewcontent[i]}</p>
        <div>
          <p>구매자</p>
          <p class="nickname">${nickname[i]}</p>
        </div>
        <div id="UserRatingBottom">
          <div>
            <span class="date">${date[i]}</span>
            <span>신고·차단</span>
          </div>
          <div>
            <button>댓글 0</button>
            <button>
             <svg width="1em" height="1em" viewBox="0 0 13 13">
                                    <path
                                       d="M5.45042 1.18981C5.45042 0.932079 5.65934 0.723145 5.91708 0.723145H6.67091C7.8055 0.723145 8.76174 1.60478 8.76174 2.73948V4.96676H10.1449C11.3518 4.96676 12.2983 6.05315 12.0176 7.24085C12.0133 7.25881 12.0081 7.27651 12.0017 7.29384L10.2747 12.0135C10.2074 12.1975 10.0324 12.3199 9.83648 12.3199H0.633659C0.375926 12.3199 0.166992 12.1109 0.166992 11.8532V5.62192C0.166992 5.36418 0.375926 5.15525 0.633659 5.15525H2.97713C4.39349 5.15525 5.45042 4.18688 5.45042 2.94219V1.18981ZM6.38375 1.65647V2.94219C6.38375 4.63712 5.0686 5.86195 3.4438 6.06031V11.3866H9.51031L11.1146 7.00197C11.2269 6.45788 10.7924 5.9001 10.1449 5.9001H8.29508C8.03735 5.9001 7.82841 5.69116 7.82841 5.43343V2.73948C7.82841 2.16106 7.33182 1.65647 6.67091 1.65647H6.38375ZM2.51046 11.3866V6.08858H1.10033V11.3866H2.51046Z"
                                       fill="#787878"></path>
                                 </svg> 0
            </button>
          </div>
        </div>
      </div>
    `;

      divs.eq(i).append(reviewHTML);
   }
}

review();



$(function () {
   const $slider = $('#book1 .arrybox');
   const totalItems = $slider.find('.arrybox').length;
   const visibleCount = 5;
   let currentIndex = 0;

   // 초기 상태: 왼쪽 버튼 투명하고 클릭 불가, 오른쪽 버튼 보이고 클릭 가능
   $('#book1 .leftbutton').css({
      opacity: 0,
      'pointer-events': 'none'
   });
   $('#book1 .rightbutton').css({
      opacity: 1,
      'pointer-events': 'auto'
   });

   $('#book1 .leftbutton').click(function () {
      if ($slider.is(':animated')) return;

      $slider.find('.bookbox:last').prependTo($slider);
      $slider.css('margin-left', -172.42);
      $slider.stop().animate({ marginLeft: 0 }, 700, function () {
         currentIndex--;
         updateButtons();
      });
   });

   $('#book1 .rightbutton').click(function () {
      if ($slider.is(':animated')) return;

      $slider.stop().animate({ marginLeft: -172.42 }, 700, function () {
         $slider.find('.bookbox:first').appendTo($slider);
         $slider.css({ marginLeft: 0 });
         currentIndex++;
         updateButtons();
      });
   });

   function updateButtons() {
      if (currentIndex <= 0) {
         currentIndex = 0;
         $('#book1 .leftbutton').css({
            opacity: 0,
            'pointer-events': 'none'
         });
         $('#book1 .rightbutton').css({
            opacity: 1,
            'pointer-events': 'auto'
         });
      } else if (currentIndex >= totalItems - visibleCount) {
         currentIndex = totalItems - visibleCount;
         $('#book1 .rightbutton').css({
            opacity: 0,
            'pointer-events': 'none'
         });
         $('#book1 .leftbutton').css({
            opacity: 1,
            'pointer-events': 'auto'
         });
      } else {
         $('#book1 .leftbutton, #book6 .rightbutton').css({
            opacity: 1,
            'pointer-events': 'auto'
         });
      }
   }

   updateButtons();
});

$(function () {
   const $slider = $('#book2 .arrybox');
   const totalItems = $slider.find('.arrybox').length;
   const visibleCount = 5;
   let currentIndex = 0;

   // 초기 상태: 왼쪽 버튼 투명하고 클릭 불가, 오른쪽 버튼 보이고 클릭 가능
   $('#book2 .leftbutton').css({
      opacity: 0,
      'pointer-events': 'none'
   });
   $('#book2 .rightbutton').css({
      opacity: 1,
      'pointer-events': 'auto'
   });

   $('#book2 .leftbutton').click(function () {
      if ($slider.is(':animated')) return;

      $slider.find('.bookbox:last').prependTo($slider);
      $slider.css('margin-left', -172.42);
      $slider.stop().animate({ marginLeft: 0 }, 700, function () {
         currentIndex--;
         updateButtons();
      });
   });

   $('#book2 .rightbutton').click(function () {
      if ($slider.is(':animated')) return;

      $slider.stop().animate({ marginLeft: -172.42 }, 700, function () {
         $slider.find('.bookbox:first').appendTo($slider);
         $slider.css({ marginLeft: 0 });
         currentIndex++;
         updateButtons();
      });
   });

   function updateButtons() {
      if (currentIndex <= 0) {
         currentIndex = 0;
         $('#book2 .leftbutton').css({
            opacity: 0,
            'pointer-events': 'none'
         });
         $('#book2 .rightbutton').css({
            opacity: 1,
            'pointer-events': 'auto'
         });
      } else if (currentIndex >= totalItems - visibleCount) {
         currentIndex = totalItems - visibleCount;
         $('#book2 .rightbutton').css({
            opacity: 0,
            'pointer-events': 'none'
         });
         $('#book2 .leftbutton').css({
            opacity: 1,
            'pointer-events': 'auto'
         });
      } else {
         $('#book2 .leftbutton, #book6 .rightbutton').css({
            opacity: 1,
            'pointer-events': 'auto'
         });
      }
   }

   updateButtons();
});

$(function () {
   const $slider = $('#AuthorWorks .arrybox');
   const totalItems = $slider.find('.arrybox').length;
   const visibleCount = 5;
   let currentIndex = 0;

   // 초기 상태: 왼쪽 버튼 투명하고 클릭 불가, 오른쪽 버튼 보이고 클릭 가능
   $('#AuthorWorks .leftbutton').css({
      opacity: 0,
      'pointer-events': 'none'
   });
   $('#AuthorWorks .rightbutton').css({
      opacity: 1,
      'pointer-events': 'auto'
   });

   $('#AuthorWorks .leftbutton').click(function () {
      if ($slider.is(':animated')) return;

      $slider.find('.bookbox:last').prependTo($slider);
      $slider.css('margin-left', -172.42);
      $slider.stop().animate({ marginLeft: 0 }, 700, function () {
         currentIndex--;
         updateButtons();
      });
   });

   $('#AuthorWorks .rightbutton').click(function () {
      if ($slider.is(':animated')) return;

      $slider.stop().animate({ marginLeft: -172.42 }, 700, function () {
         $slider.find('.bookbox:first').appendTo($slider);
         $slider.css({ marginLeft: 0 });
         currentIndex++;
         updateButtons();
      });
   });

   function updateButtons() {
      if (currentIndex <= 0) {
         currentIndex = 0;
         $('#AuthorWorks .leftbutton').css({
            opacity: 0,
            'pointer-events': 'none'
         });
         $('#AuthorWorks .rightbutton').css({
            opacity: 1,
            'pointer-events': 'auto'
         });
      } else if (currentIndex >= totalItems - visibleCount) {
         currentIndex = totalItems - visibleCount;
         $('#AuthorWorks .rightbutton').css({
            opacity: 0,
            'pointer-events': 'none'
         });
         $('#AuthorWorks .leftbutton').css({
            opacity: 1,
            'pointer-events': 'auto'
         });
      } else {
         $('#AuthorWorks .leftbutton, #book6 .rightbutton').css({
            opacity: 1,
            'pointer-events': 'auto'
         });
      }
   }

   updateButtons();
});