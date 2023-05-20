const div = document.getElementById("1");
function clickMe() {
  console.log("clicked me");
}

const throttle = function (func, delay = 300) {
  let toggle = false;

  return function (...args) {
    if (toggle) {
      return;
    }
    toggle = true;
    func.apply(this, args);
    setTimeout(() => {
      toggle = false;
    }, delay);
  };
};

const debounceCall = debounce(() => clickMe(), 1000);
// const throttleCall = throttle(() => clickMe(), 1000);
div.addEventListener("click", function (e) {
  throttleCall();
});
