import { getRandomNum } from "./getRandomNum.js";
import { getResult } from "./getResult.js";

const setMoveHtml = ($carPlayerAction, car) => {
  const $moveSection = $carPlayerAction.querySelector(".move-section");
  const $spinnerContainer = $moveSection.querySelector(".spinner-container");
  let $carPlayer = $carPlayerAction.querySelector(".car-player");

  if ($spinnerContainer) $moveSection.innerHTML = "";
  if ($carPlayer.innerHTML === car.name) {
    $moveSection.insertAdjacentHTML(
      "beforeend",
      `<div class="forward-icon mt-2">⬇️️</div>`
    );
  }
};

const updateCarMove = (car) => {
  const $carPlayerActions = document.querySelectorAll(".car-player-action");

  $carPlayerActions.forEach(($carPlayerAction, i) => {
    setTimeout(setMoveHtml, i * 1000, $carPlayerAction, car);
  });
};

export const moveCar = (carTry, carList) => {
  let i;
  for (i = 0; i < carTry; i++) {
    carList.forEach((car) => {
      if (!getRandomNum()) {
        car.cnt += 1;
        updateCarMove(car);
      }
    });
  }
  console.log(carList);
  setTimeout(getResult, carList.length * 1000, carList);
};
