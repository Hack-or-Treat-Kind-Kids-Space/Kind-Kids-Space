var input = document.getElementById("code");



// document.body.onkeyup = function(e) {
//   if (e.key === "d") {
//       document.getElementById("myBtn").click();
//     }
// }

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
