var u1 = "Sanja";
var u2 = "Marla";
//console.log("Novi korisnik je: " + u1 + " a korisnik stari je " + u2 + ".");
console.log(`Novi korisnik je: ${u1} a korisnik stari je ${u2}.`);

var div = document.getElementById("wrapp");
var newclass;
if (div.id === "wrapp") {
  newclass = "xx";
} else {
  newclass = "xx1";
}
//wrapp.innerHTML = '<h1 class="' + newclass + ' box"> Neki naslov</h1>';       (umesto ovoga koristimo back ticks)

wrapp.innerHTML = `<h1 class="${newclass} box"> Neki naslov</h1>`;
//function Humans(name) {
// this.name = name;

//this.info = function () {
console.log(`Ime Humana je ${this.name}`);
// };

//var sanja = new Humans("Sanja");
//sanja.info();
//var name = "JavaScript";
//console.log(`ime programa %s`, name);//
