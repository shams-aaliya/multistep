var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

var progress = document.getElementById("progress");

Next1.onclick = function(){
    form1.style.left = "-120%";
    form2.style.left = "12%";
    progress.style.width = "66%"
}

Back1.onclick = function(){
    form1.style.left = "12%";
    form2.style.left = "120%";
progress.style.width = "33%"
}

Next2.onclick = function(){
    form2.style.left = "-120%";
    form3.style.left = "12%";
    progress.style.width = "100%"
}

Back2.onclick = function(){
    form2.style.left = "12%";
    form3.style.left = "120%";
    progress.style.width = "66%";
}