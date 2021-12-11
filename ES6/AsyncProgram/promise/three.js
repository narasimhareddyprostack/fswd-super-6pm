let goForMovie = new Promise((resolve, reject) => {
  let money = 1600;
  if (money > 1000) {
    resolve("Go to Movie");
  } else {
    reject("Go to PG");
  }
});
goForMovie
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
