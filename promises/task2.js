function todos () {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}


function users () {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

const allPromises = Promise.all([todos(), users()]);

allPromises.then((result) => {
  console.log(result);
});

const racePromises = Promise.race([todos(), users()]);

racePromises.then((result) => {
  console.log(result);
});