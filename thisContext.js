const person = {
    name: "Kshitiz",
    greet() {
        console.log(`Hi. My name is ${this.name}`);
    }
};

person.greet();

const greetfunction = person.greet
greetfunction();

const boundGreet = person.greet.bind({name: "Kshitiz Aman"})
boundGreet();

const greets = person.greet.call({name:"Aman"})
greets()

const newgreet = person.greet.apply(person)
newgreet()