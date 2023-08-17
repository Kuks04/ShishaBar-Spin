var klik = 0, click = 0;
const x = document.getElementById("klik");
const y = document.getElementById("click");
function navbar() {
    x.style.transition = "all 1.5s ease";
    if (klik % 2 == 0) {
        x.style.transform = "rotate(405deg)";
    }
    else if (klik % 2 != 0) {
        x.style.transform = "rotate(0deg)";
    }
    klik++;
}
function gallery() { 
    y.style.transition = "all 0.9s ease";
    if (click % 2 == 0) {
        y.style.transform = "rotate(135deg)";
    }
    else if (click % 2 != 0) {
        y.style.transform = "rotate(0deg)";
    }  
    setTimeout(function(){
        document.getElementById('scroll').scrollIntoView();
    }, 1000); 
    click++;
}