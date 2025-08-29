// input function
function takeInput(clsName, outname) {
  let namArray = [],
    counterId,
    counter = 0,
    i = 0,
    msg1,
    msg2,
    msg3,
    card;
    // his = [];

  if (clsName === "loveBtn") {
    namArray = document.getElementsByClassName(clsName);

    for (i = 0; i < namArray.length; i++) {
      namArray[i].addEventListener("click", function () {
        // counterId = idClick(outname);

        // counter = parseInt(counterId.innerText);

        // counter = counter + 1;
        // counterId.innerText = counter;

        incCounter(outname);
      });
    }
  } else if (clsName === "callbtn") {
    namArray = document.getElementsByClassName(clsName);

    for (i = 0; i < namArray.length; i++) {
      namArray[i].addEventListener("click", function () {
        let card = this.closest(".card");
        msg1 = card.querySelector(".cardSubTitle").innerText;
       msg3 = card.querySelector(".card-title").innerText;
        msg2 = card.querySelector(".phn").innerText;

        //call histry data making
        const data = {
          calltitle: msg3,
          callnumber: msg2,
          date: new Date().toLocaleTimeString(),
        };

        // his.push(data);
        const div = document.createElement("div");
        div.innerHTML = `

         <div class=" w-65 bg-base-100 card-xs shadow-sm flex mx-auto  justify-between items-center m-2 rounded-lg">
            <div class="card-body">
              <h2 class="font-bold text-[16px]" card-title font-bold">${data.calltitle}</h2>
              <p class="text-[12px]" >${data.callnumber}</p>
            </div>
                <div class="card-actions pr-2">
                   <p class="text-[12px]">${data.date}</p>
 
                </div>

          </div>




         `;

        msg2 = msg2 + " ...";

        counterId = idClick("coinNum");
        counter = parseInt(counterId.innerText);

        if (counter >= 20) {
          counter = counter - 20;

          counterId.innerText = counter;
          alertText("Calling","fa-solid fa-phone text-red-600");

          showpop(msg1, msg2);
          hiscontainer.appendChild(div);
        } else {
          
          alertText("","fa-solid fa-xmark text-red-600");
          let newmgs1 = "You have not enough coin!";
          let newmgs2 = "AT least 20 coins need for calling.";
          showpop(newmgs1, newmgs2);
        }
      });
    }
    //copy button
  }else if( clsName ==="copybtn"){
        
     namArray = document.getElementsByClassName(clsName);
     for (i = 0; i < namArray.length; i++){
       namArray[i].addEventListener("click", function (){

         card = this.closest(".card");
        msg2 = card.querySelector(".phn").innerText;
        msg1="Successfully Copied";
         alertText("","");

        navigator.clipboard.writeText(msg2)
        .then(()=>{
          showpop(msg1,msg2);
           incCounter(outname);
        }

      )


       })

     }

  }
}

// popUp show function
function showpop(nam1, nam2) {
  let popup = document.getElementById("callpop");
  let msg = document.getElementById("callMsg");

  msg.innerText = ` ${nam1} ${nam2}`;
  popup.classList.remove("hidden");
}

// popUp close function
function closepop() {
  document.getElementById("callpop").classList.add("hidden");
}

// clear button
let hisCont=idClick("hiscontainer")
idClick("clear").addEventListener("click",function(){
  hisCont.innerHTML="";
});

//aleart template

function alertText(text,iconClass){
  let miscall = idClick("textCall");
          miscall.innerText = text;
          let oldIcon = idClick("iconCall");
          oldIcon.className = iconClass;

        

}
//increase counter

function incCounter(id){
 let counterId = idClick(id);

         let counter = parseInt(counterId.innerText);

        counter = counter + 1;
        counterId.innerText = counter;
}





// when click id
function idClick(id) {
  let idname = document.getElementById(id);
  return idname;
}




takeInput("loveBtn", "loveCount");
takeInput("callbtn", "cardSubTitle");
takeInput("copybtn", "coinCount");
