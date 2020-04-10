// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//btn.onclick = function() {
//  modal.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



document.getElementById("key-01").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-02").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-03").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-04").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-05").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-06").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-07").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-08").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-09").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-00").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-send").addEventListener("click", pushKeybuttons, true );
document.getElementById("key-delete").addEventListener("click", pushKeybuttons, true );

