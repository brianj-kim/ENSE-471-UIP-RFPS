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

    if((currentInput == "" && newKey == 9) || (currentInput == "9" && newKey == 1) || (currentInput == "91" && newKey == 1)) {
        targetInput.innerHTML += newKey;
        correctButton.pause();
        correctButton.currentTime = 0;
        correctButton.play();

    } else if(idString != "key-delete") {        
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

    if(targetInput.innerHTML == "911" && idString == "key-send") {
        wrongButton.pause();
        wrongButton.currentTiem = 0;

        targetInput.innerHTML == "";
        sequence01.play();
    }

    //console.log(targetInput.innerHTML);
    
}