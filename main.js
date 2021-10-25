var SpeechRecognition = window.webkitSpeechRegocnition;
var Recongnition = new SpeechRegocnition();

function Start(){
    document.getElementById("textbox").innerHTML="";
    Recongnition.start();
}
recongnition.onresult = function (event);
console.log(event);
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=Content;