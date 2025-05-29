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
      const querys = ['빛들의 환대', '사과', '감정수업', '탁영', '파과', '도전', '호랑골동품점', '호의', '사랑', '행복'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         const divs = $('#book1-1 .bookbox')

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

               </div>
                <div id="authorsbox1">
                  <p>${data.documents[0].authors}<p>
               </div>
            </a>`);
      })

   } catch (error) {
      console.log('에러발생', error);
   }
}

async function bookData1() {
   try {
      const querys = ['대통령', '경제', '에세이'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         //썸네일이 빈 문자열인것은 제외
         const origin = data.documents;
         let book = origin.filter((val) => {
            return val.thumbnail != '' && val.contents != '';
         })

         // for문 (8개)
         for (let j = 0; j < 6; j++) {

            $('.book2box').eq(i).append('<div class="book2box1"></div>');
            const div = $('.book2box').eq(i).find('.book2box1').last();
            let content = data.documents[j].contents;
            let str = content.substring(0, 40);
            div.append(`<a href="">
                  <div class="book2box1-Thumnail">
                     <img src=${data.documents[j].thumbnail}>
                  </div>
                  <div class="titbox2">
                     <h5>${data.documents[j].title}</h5>
          <p>
  ${data.documents[j].authors[0].length > 8
                  ? data.documents[j].authors[0].substring(0, 8) + '...'
                  : data.documents[j].authors[0]
               }
</p>
                     <p>${str}...</p>
                  </div>
               </a>`)





         }
      })
   } catch (error) {
      console.log('에러발생', error);
   }
}

async function bookData2() {
   try {
      const querys = ['빛들', '사람은 무엇으로 사는가', '감정수업', '미움받을용기', '파과', '나는 어떻게 삶의 해답을 찾는가', '호랑골동품점'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         const divs = $('.book3-1 .bookimg')

         divs.eq(i).append(`
            <a href="">
        <img src=${data.documents[0].thumbnail}>
            </a>`);
      })

   } catch (error) {
      console.log('에러발생', error);
   }
}


async function bookData4() {
   try {
      const querys = ['사랑'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         //썸네일이 빈 문자열인것은 제외
         const origin = data.documents;
         let book = origin.filter((val) => {
            return val.thumbnail != '' && val.contents != '';
         })

         // for문 (18개)
         for (let j = 0; j < 18; j++) {

            // $('.TLankbox').append('<div class="TLankbox1"></div>');
            // const div = $('.TLankbox').eq(i).find('.TLankbox1');
            let content = data.documents[j].contents;
            let str = content.substring(0, 40);

            let appendtag= `
               <div class="TLankbox1">
                  <a href="">                
                     <div class="book2box1-Thumnail"> 
                     <p>${j+1}</p>
                        <img src=${data.documents[j].thumbnail}>
                     </div>
                     <div class="titbox2">
                        <h4>${data.documents[j].title}</h4>
                        <p>${data.documents[j].authors}</p>
                        <p>${str}...</p>
                     </div>
                  </a>
               </div>`

            if(j<9){
               $('.TLankbox2').eq(0).append(appendtag)
            }else if(9<j<18)  {$('.TLankbox2').eq(1).append(appendtag)}
            
         }
      })
   } catch (error) {
      console.log('에러발생', error);
   }
}

async function bookData5() {
   try {
      const querys = ['마음', '성공', '감정수업', '탁영', '자긍심', '나는 어떻게 삶의 해답을 찾는가', '나비','해답','피곤','우유'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         const divs = $('#book4-1 .bookbox')

         divs.eq(i).append(`
            <a href="">
               <div class="bookbox1">
                  <img src=${data.documents[0].thumbnail}>
               </div>
               <div class="titbox1">
                  <h4>${data.documents[0].title}</h4>
               </div>
                 <div class="authorsbox1">
                  <p>${data.documents[0].authors}</p>
               </div>
            </a>`);
      })

   } catch (error) {
      console.log('에러발생', error);
   }
}
async function bookData6() {
   try {
      const querys = ['항구', '기회', '조아', '배려', '젤라또', '나는 어떻게 삶의 해답을 찾는가', '나비','우유','포용','마음'];

      querys.forEach(async (query, i) => {
         const data = await fetchBooks(query);

         const divs = $('#book5-1 .bookbox')

         divs.eq(i).append(`
            <a href="">
               <div class="bookbox1">
                  <img src=${data.documents[0].thumbnail}>
               </div>
               <div class="titbox1">
                  <h4>${data.documents[0].title}</h4>
               </div>
                 <div class="authorsbox1">
                  <p>${data.documents[0].authors}</p>
               </div>
            </a>`);
      })

   } catch (error) {
      console.log('에러발생', error);
   }
}


bookData0();
bookData1();
bookData2();
bookData4();
bookData5();
bookData6();
