
// Delay 5 seconds 
function wait(ms){
    let start = new Date().getTime();
    let end = start;
 
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
function nextSequence(target) {
    document.getElementById("displayUsrInput").innerHTML = "";
    document.getElementById("displayUsrInput").style = "";
    target.pause();
    target.currentTime = 0;
    target.play();
}

function sequenceTwo() {
    nextSequence(sequence02);
}

function sequenceThree() {
    nextSequence(sequence03);
}

function sequenceFour() {
    nextSequence(sequence04);
}

function sequenceFive() {
    nextSequence(sequence05);
}

function sequenceSix() {
    nextSequence(sequence06);
}

function pushKeybuttons(e) {
    let idString = e.target.id;
    let key = idString.split("-"); // use key[1]
    let newKey = parseInt(key[1], 10);
    let targetInput = document.getElementById("displayUsrInput");
    
    let currentInput = targetInput.innerHTML;

    //Sound sources 
    //  when the wrong keypads are pushed
    let wrongButton = document.getElementById("wrongButton");
    let correctButton = document.getElementById("correctButton");
    let sequence01 = document.getElementById("sequence01");
    let sequence02 = document.getElementById("sequence02");
    let sequence03 = document.getElementById("sequence03");
    let sequence04 = document.getElementById("sequence04");
    let sequence05 = document.getElementById("sequence05");
    let sequence06 = document.getElementById("sequence06");

    wrongButton.play();
    wrongButton.pause();
    wrongButton.currentTime = 0;

    correctButton.play();
    correctButton.pause();
    correctButton.currentTime = 0;

    if((currentInput == "" && newKey == 9) || (currentInput == "9" && newKey == 1) || (currentInput == "91" && newKey == 1)) {
        targetInput.innerHTML += newKey;

        wrongButton.pause();
        wrongButton.currentTime = 0;

        correctButton.pause();
        correctButton.currentTime = 0;

        correctButton.play();

    } else if(idString != "key-delete") {   
        correctButton.pause();
        correctButton.currentTime = 0;

        wrongButton.pause();
        wrongButton.currentTime = 0;
        wrongButton.play();
 
    }

    if(key[1] == "delete") {
        if(targetInput.innerHTML.length > 0) {
            let str = targetInput.innerHTML;        
            targetInput.innerHTML = str.substr(0, str.length-1);
        }
    }

    // the training sequence begins from here
    if(targetInput.innerHTML == "911" && idString == "key-send") {
        wrongButton.pause();
        wrongButton.currentTiem = 0;

        targetInput.innerHTML = "";
        sequence01.play();         

        sequence01.onended = function() {
            targetInput.innerHTML = "Next";
            targetInput.style = "cursor: pointer;";
            targetInput.addEventListener("click", sequenceTwo, true);
            // timer start
            //wait(4000);            
            //extSequence(sequence02);
            //console.log('after');
        };
        
        sequence02.onended = function() {
            targetInput.removeEventListener("click", sequenceTwo, true);

            targetInput.innerHTML = "Next";
            targetInput.style = "cursor: pointer;";

            targetInput.addEventListener("click", sequenceThree, true);  

        };
        
        sequence03.onended = function() {   
            targetInput.removeEventListener("click", sequenceThree, true);
            targetInput.innerHTML = "Next";
            targetInput.style = "cursor: pointer;";

            targetInput.addEventListener("click", sequenceFour, true);
        };

        sequence04.onended = function() {
            targetInput.removeEventListener("click", sequenceFour, true);

            targetInput.innerHTML = "Next";
            targetInput.style = "cursor: pointer;";
            targetInput.addEventListener("click", sequenceFive, true);
        }

        sequence05.onended = function() {
            targetInput.removeEventListener("click", sequenceFive, true);

            targetInput.innerHTML = "Next";
            targetInput.style = "cursor: pointer;";
            targetInput.addEventListener("click", sequenceSix, true);
        }

        sequence06.onended = function() {
            targetInput.removeEventListener("click", sequenceSix, true);

            modal.style.display = "block";

        }



        
        //delay(5, nextSequence(document.getElementById("sequence02")));
    
    }

    //console.log(targetInput.innerHTML);
    
}