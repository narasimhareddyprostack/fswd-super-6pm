let goForMovie = (success, failure) => {
  let money = 1600;
  money > 1000 ? success("Buy the tiket and watch movie") : failure("Go to PG");
};

goForMovie(
  (msg) => {
    console.log(msg);
  },
  (err) => {
    console.log(err);
  }
);
