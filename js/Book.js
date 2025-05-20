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

async function bookData() {
   try {
      const querys = ['요리'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         // for문 (10개)
         const divs = $('#book1-1 .bookbox')

         for (let j = 0; j < divs.length; j++) {
            divs.eq(j).append(`
               <a href="">
                  <div class="bookbox1">
                     <img src=${data.documents[j].thumbnail}>
                  </div>
                  <div class="titbox">
                     <h3>${data.documents[j].title}</h3>
                  </div>
               </a>`);
         }
      })
   } catch (error) {
      console.log('에러발생', error);
   }
}

async function bookData1() {
   try {
      const querys = ['요리','사람은 무엇으로 사는가'];

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

// bookData();
bookData1();