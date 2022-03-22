function zoom(img){
  var img = +getComputedStyle(document.body).zoom;
  document.body.style.zoom = img+0.5;
}
function zoomout(img){
  var img = +getComputedStyle(document.body).zoom;
  document.body.style.zoom = img-0.5;
}

function changeBg() {
    document.querySelector(".clickme").style.background = "#0000ff";
};
function changeBg3() {
    document.querySelector(".clickme").style.background = "#ffff00";
};
function changeBg1() {
    document.querySelector(".click").style.background = "#ffff00";
};
function changeBg2() {
    document.querySelector(".click").style.background = "#0000ff";
};

 