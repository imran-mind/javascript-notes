const div = document.getElementById("1");
function clickMe() {
  console.log("clicked me");
}
const debounce = function (func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(args);
    }, delay);
  };
};

const debounceCall = debounce(() => clickMe(), 1000);
div.addEventListener("click", function (e) {
    debounceCall();
});
