function Person(name) {
    this.name = name
}
Person.prototype.greet = function (){
    console.log( `Hello !!! . My Name Is ${this.name}`)
}

let Kshitiz = new Person ("Kshitiz Aman .")
Kshitiz.greet()