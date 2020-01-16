const promise = new Promise((resolve => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
}));

promise.then((data) => {
  data.toLoweCase();
});
