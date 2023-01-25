function sayHi() {
  alert("Hello");
}

var div2 = document.getElementById("div2");
div2.onclick = function () {
  alert("hi hi hi ");
};

var div3 = document.getElementById("div3");
div3.addEventListener("click", sayName);
function sayName() {
  alert("ćao ćao ćao");
}
div3.addEventListener("click", plus);
function plus() {
  alert("Sanja");
}
