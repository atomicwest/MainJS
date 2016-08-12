function Cat (name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`
}

let garfield = new Cat("Garfield", "Jon")
let luna = new Cat("Luna", "Brent")
let furry = new Cat("furry", "J")

console.log(garfield.cuteStatement())
console.log(luna.cuteStatement())
console.log(furry.cuteStatement())

Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}`
}

console.log(garfield.cuteStatement())
console.log(luna.cuteStatement())
console.log(furry.cuteStatement())

Cat.prototype.meow = function() {

}

garfield.meow = function(){ console.log(`${this.name} MEOWSS`)}
// luna.meow = function(){ console.log(`${this.name} is fierce`)}
// furry.meow = function(){ console.log(`${this.name} is hairy`)}
garfield.meow()
luna.meow()
furry.meow()
