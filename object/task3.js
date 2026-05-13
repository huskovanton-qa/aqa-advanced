const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
};

const car2 = {
    brand: "Honda",
    model: "Civic",
    owner: 2019,  //так і не зрозумів де саме опечатка в тасці в ключі чи в значенні. 
};

const car3 = {...car1, ...car2};  

console.log(car3);