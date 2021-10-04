var i=0;
var j=0;
var txt= "Saqib Sadiq";
var txt2="Web Developer";
var speed=150;

function typing(){
    if (i<txt.length){
        document.getElementById("myName").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    } else if (i>=txt.length&& i<(txt2.length+txt.length)){
        document.getElementById("myJob").innerHTML += txt2.charAt(i-txt.length);
        i++;
        setTimeout(typing, speed);
    }
}


$(document).ready(function(){$(".nav-item").click(function(){
    $(".offcanvas").fadeOut();
  });});

$(document).ready(function(){$(".navbar-toggler").click(function(){
    $(".offcanvas").fadeIn();
  });});

$(document).ready(function(){$(".viewskills").click(function(){
    $("#htmlskill").animate({borderLeftWidth:"60vw"},"slow");
    $("#cssskill").animate({borderLeftWidth:"60vw"},"slow");
    $("#jsskill").animate({borderLeftWidth:"55vw"},"slow");
    $("#phpskill").animate({borderLeftWidth:"45vw"},"slow");
    $("#pythonskill").animate({borderLeftWidth:"35vw"},"slow");
    $("#sqlskill").animate({borderLeftWidth:"40vw"},"slow");
    $("#reactskill").animate({borderLeftWidth:"20vw"},"slow");
    $("#awsskill").animate({borderLeftWidth:"25vw"},"slow");
});});
