const users = [
    { name: "Alice", age: 30, email: "alice@example.com" },
    { name: "Bob", age: 25, email: "bob@example.com" },
    { name: "Charlie", age: 35, email: "charlie@example.com" }
];

for (const{ name, age, email} of users) {
    console.log(name);
    console.log(age);
    console.log(email);
};