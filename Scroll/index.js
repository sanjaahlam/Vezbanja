function sleep()


function makeText() {
  var text = "Sublime text";
  var text1 = "Brackets";
  var text2 = "Atom";

  var stext = text.split("");
  var stext1 = text1.split("");
  var stext2 = text2.split("");
  var nasArray = [stext, stext1, stext2];
  return nasArray;
}
var ar = makeText();
var scroll = document.getElementById("scroll");
var loop;

var i = 0;

function start() {
  if (ar[i].length > 0) {
    scroll.innerHTML += ar[i].shift();
    loop = setTimeout(start,200);
  } else {
    i++;
    if (i > 2) {
      i = 0;
      ar = makeText();
    }
    scroll.innerHTML = "";
    start();
  }
}
start();
