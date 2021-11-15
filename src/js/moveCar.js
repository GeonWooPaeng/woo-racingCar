import { getRandomNum } from "./getRandomNum.js";
import { getResult } from "./getResult.js";

const updateCarMove = (car) => {
  const $carPlayerActions = document.querySelectorAll(".car-player-action");

  $carPlayerActions.forEach(($carPlayerAction) => {
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
  });
};

export const moveCar = (carTry, carList) => {
  for (let i = 0; i < carTry; i++) {
    carList.forEach((car) => {
      if (!getRandomNum()) {
        car.cnt += 1;
        updateCarMove(car);
      }
    });
  }
  console.log(carList);
  return getResult(carList);
};
