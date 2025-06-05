  
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