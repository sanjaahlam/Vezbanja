function Puppy() {
  // var self = this;
  this.name;
  this.hunger = 0;
  this.feed = setInterval(() => {
    this.hunger++;
    console.log(this);
    console.log(this.hunger);
  }, 1000);
}
//Umesto ovoga koristimo ARROW FUNCTION!
//(function() {
//self.hunger++;
//console.log(self.hunger);
//console.log(self);
// }, 1000);
//}
var marla = new Puppy();
marla.name = "Marla";
marla.feed;
