// input function
function takeInput(clsName, outname) {

let namArray=[],counterId, counter=0,i=0,msg1,msg2;

 if(clsName==="loveBtn"){
    
 namArray = document.getElementsByClassName(clsName);

  for ( i = 0; i < namArray.length; i++) {
    namArray[i].addEventListener("click", function () {
      counterId =document.getElementById(outname);

     counter=parseInt(counterId.innerText);

      counter=counter+1
      counterId.innerText=counter;
     
    });
  }



 }

 else if(clsName==="callbtn" ){
    namArray = document.getElementsByClassName(clsName);
    
    
    for ( i = 0; i < namArray.length; i++) {

    namArray[i].addEventListener("click", function () {
        let card= this.closest(".card");
        msg1=card.querySelector(".cardSubTitle").innerText ;
        msg2=card.querySelector(".phn").innerText ;
       
        alert("Calling "+ msg1+" "+msg2+"...");
      
    });
  }

 }
  


  
}

takeInput("loveBtn", "loveCount");
takeInput("callbtn","cardSubTitle");

