const REST_API_KEY = "ae7ed16e4ebfc183e568ffdeaeedc76d"

async function fetchBooks(query) {
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
// 오픈ai카카오 불러오기



async function bookData0() {
   try {
      const querys = ['빛들의 환대','사람은 무엇으로 사는가','감정수업','탁영','파과','나는 어떻게 삶의 해답을 찾는가','호랑골동품점'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         const divs = $('#book1-1 .bookbox')
   
         divs.eq(i).append(`
            <a href="">
               <div class="bookbox1">
                  <img src=${data.documents[0].thumbnail}>
               </div>
               <div class="titbox1">
                  <h4>${data.documents[0].title}</h4>
               </div>
            </a>`);
      })
   
   } catch (error) {
      console.log('에러발생', error);
   }
}
async function bookData1() {
   try {
      const querys = ['소설','기욤뮈소','박완서'];
     querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         // for문 (10개)
   const firstBox = $('.book2box1');

         for (let j = 0; j<6; j++) {
            firstBox.eq(j).append(`
               <a href="">
                  <div class="book2box1-Thumnail">
                     <img src=${data.documents[j].thumbnail}>
                  </div>
                  <div class="titbox2">
                     <h4>${data.documents[j].title}</h4>
                     <p>${data.documents[j].title}</p>
                  </div>
               </a>`);
         }
      })
   } catch (error) {
      console.log('에러발생', error);
   }
}


bookData0();
bookData1();