//1.
var a = 5;
var b = 5;
var c = 10;
console.log(a == b);

//2.
var a = ["Aca", "Mira", "Branimir", "Dule"];
console.log(a[3]);

//3.
var licnaKarta = {
  ime: "Sanja",
  prezime: "Milić",
  god: "1984",
  pol: "ž",
};
console.log(licnaKarta.ime);

//4.
function uCelzijuse(f) {
  return (5 / 9) * (f - 32);
}
console.log(uCelzijuse(50));

//5.
var imena = ["Aca", "Mira", "Branimir", "Dule"];
imena.shift();
console.log(imena);

//6.

var names = ["Aca", "Mira", "Branimir", "Dule", "Aca", "Mira", "Aca"];

var obj = {};
for (var i = 0; i < names.length; i++) {
  obj[names[i]] = obj[names[i]] + 1 || 1;
}
console.log(obj);
//7.

function fun() {
  console.log("Dobro došli");
}
fun();

//8.
var d;
var time = 11;
if (time < 10) {
  console.log("Good morning");
} else {
  console.log("Good day");
}

//9.
var text = "Posle sledeće vežbe je pauza";
console.log(text[16]);
console.log(text[6]);

//10.
var a = 1;
var b = 2;
if (a < b) {
  console.log("A je manje od B");
}

//11.
var a = 3;
var b = 2;
if (a > b) {
  console.log("B je manje od A");
}

//12.
var broj = 7;
if (broj > 10) {
  console.log("Broj je veći od 10");
} else if (broj < 8) {
  console.log("Broj je manji od 8");
} else {
  console.log("Broj je između 8 i 10");
}

//13.
var sat = 20;
if (sat > 6 && sat < 10) {
  console.log("Dobro jutro");
} else if (sat >= 10 && sat < 18) {
  console.log("Dobar dan");
} else {
  console.log("Dobro veče");
}
//14.
var ime = "Sanja";
var prezime = "Milić";
if (ime >= prezime) {
  console.log("Ime jednako prezime");
} else if (ime < prezime) {
  console.log("Ime manje od prezime");
} else {
  console.log("Ime jednako prezime");
}

var ime = "Sanja";
var prezime = "Milić";
if (ime >= prezime) {
  console.log("Sanja");
} else if (prezime >= ime) {
  console.log("Milić");
} else {
  console.log("Ime jednako prezime");
}

//15.
var imePrezime = 9;
var datum = 23;

if (imePrezime >= datum) {
  console.log("Whooo");
} else if (imePrezime < datum) {
  console.log("Meeeh");
}
//16.Napisati reč tekst pet puta.
for (i = 0; i < 5; i++) {
  console.log("tekst");
}
//17. Ispisati elementa niza koji su deljivi sa pet.

var niz = [2, 5, 2, 1, 6, 725, 45, 9, 6, 65];
for (i = 0; i < niz.length; i++) {
  if (niz[i] % 5 == 0) console.log(niz[i] + " ");
}

//18. Ispisati na stranici zbir svih elemenata niza.
var niz = [2, 5, 2, 1, 6, 7, 25, 45, 9, 6, 65];
var zbir = 0;
for (i = 0; i < niz.length; i++) {
  zbir = zbir + niz[i];
  console.log("Zbir svih elemenata niza je : " + zbir);
}
//19.Napraviti funkciju koja množi dva broja.
var a = 4;
var b = 5;
var zbir = a + b;
console.log(zbir);
