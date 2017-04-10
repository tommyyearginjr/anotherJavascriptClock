//function runCode(){
  var myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("01").innerHTML = d.toLocaleTimeString();
}
// }
