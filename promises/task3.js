async function todos() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const todo = await response.json();

    return todo;
  } catch (error) {
    console.log(error);
  }
}

async function users() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    );

    const user = await response.json();

    return user;
  } catch (error) {
    console.log(error);
  }
}

const allPromises = Promise.all([todos(), users()]);

allPromises.then((result) => {
  console.log(result);
});

const racePromises = Promise.race([todos(), users()]);

racePromises.then((result) => {
  console.log(result);
});
