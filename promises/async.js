const resolveStatus = false;

const myPromise = new Promise((resolve, reject) => {
  resolveStatus
    ? setTimeout(() => resolve("I have succeeded"), 1000)
    : setTimeout(() => reject("I have failed"), 1000);
});

myPromise.then(console.log).catch(console.error);
