import "./styles.css";

const makeStarRating = (noOfStars = 5) => {
  let rating = 0;
  let starComponent;

  function changeRating(newRating) {
    rating = newRating;
  }

  function getStarComponent() {
    if (!starComponent) {
      starComponent = document.createElement("ul");
      starComponent.className = "stcomp";
      for (let i = 0; i < noOfStars; i++) {
        const li = document.createElement("li");
        li.setAttribute("data-rating", i + 1);
        li.className = "star";
        if (i === 0) li.tabIndex = 0;
        starComponent.append(li);
      }

      starComponent.addEventListener("click", onMouseClick);
      starComponent.addEventListener("mouseover", onMouseOver);
      starComponent.addEventListener("mouseleave", onMouseLeave);
      starComponent.addEventListener("keyup", onKeyUp);
    }

    return starComponent;
  }

  function renderChanges(rating) {
    for (let i = 0; i < rating; i++) {
      starComponent.children[i].classList.add("star-filled");
    }
    for (let i = rating; i < noOfStars; i++) {
      starComponent.children[i].classList.remove("star-filled");
    }
  }

  function onMouseClick(e) {
    let star = e.target ?? e;
    let isStar = star.classList.contains("star");
    if (isStar) {
      activate(star);
      let { rating } = star.dataset;
      //when user does toggle on the selected stars so remove everything
      if (e.key !== "Tab" && rating === getRating()) {
        rating = 0;
        resetTabIndex();
        starComponent.firstElementChild.tabIndex = 0;
      }
      changeRating(rating);
      renderChanges(rating);
    }
  }

  function onMouseOver(e) {
    const isStar = e.target.classList.contains("star");

    if (isStar) {
      const { rating } = e.target.dataset;

      renderChanges(rating);
    }
  }

  function onMouseLeave(e) {
    console.log(rating);
    renderChanges(rating);
  }

  function focusNextStar() {
    let focusedStar = document.activeElement;
    if (focusedStar.nextElementSibling) {
      onMouseClick(focusedStar.nextElementSibling);
    }
  }

  function focusPrevStar() {
    let focusedStar = document.activeElement;
    if (focusedStar.previousElementSibling) {
      onMouseClick(focusedStar.previousElementSibling);
    }
  }
  function onKeyUp(e) {
    switch (e.key) {
      case "Tab": {
        onMouseClick(e);
        break;
      }

      case "ArrowLeft": {
        focusPrevStar(e);
        break;
      }

      case "ArrowRight": {
        focusNextStar(e);
        break;
      }

      default:
        return;
    }
  }

  function activate(element) {
    resetTabIndex();
    element.tabIndex = 0;
    element.focus();
  }

  function resetTabIndex() {
    starComponent.childNodes.forEach((item) => {
      item.tabIndex = -1;
    });
  }
  function getRating() {
    return rating;
  }

  return {
    getRating,
    getStarComponent
  };
};

const starRatingModule1 = makeStarRating(5);
const starComponent1 = starRatingModule1.getStarComponent();
const container = document.getElementById("app");
container.append(starComponent1);
container.append(starRatingModule1.getRating());
