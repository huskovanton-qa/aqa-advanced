const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30
};

person.email = "alice.smith@example.com";
delete person.age;

console.log(person);