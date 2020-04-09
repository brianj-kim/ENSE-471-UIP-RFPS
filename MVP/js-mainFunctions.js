function pushKeybuttons(e) {
    let idString = e.target.id;
    let key = idString.split("-"); // use key[1]
    let newKey = parseInt(key[1], 10);
    let targetInput = document.getElementById("displayUsrInput");
    let currentInput = targetInput.innerHTML;

    if(currentInput == "" && newKey == 9) {
        targetInput.innerHTML += newKey;
    }

    if(currentInput == "9" && newKey == 1) {
        targetInput.innerHTML += newKey;


    }

    if(currentInput == "91" && newKey == 1) {
        targetInput.innerHTML += newKey;
    } 

    if(key[1] == "delete") {
        if(targetInput.innerHTML.length > 0) {
            let str = targetInput.innerHTML;        
            targetInput.innerHTML = str.substr(0, str.length-1);
        }
    }

    console.log(targetInput.innerHTML);

    

    //console.log(newKey);
    
}