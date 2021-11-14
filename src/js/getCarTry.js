import { getRandomNum } from "./getRandomNum.js";

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

const checkCarTry = (carTry) => {
  return carTry > -1 && carTry < 10;
};

const moveCar = (carTry, carList) => {
  for (let i = 0; i < carTry; i++) {
    carList.forEach((car) => {
      if (!getRandomNum()) {
        car.cnt += 1;
        updateCarMove(car);
      }
    });
  }
  console.log(carList);
};

export const getCarTry = (carList) => {
  const $carTryInput = document.querySelector("#car-try-input");
  const carTry = $carTryInput.value;

  if (!checkCarTry(carTry)) {
    $carTryInput.value = "";
    alert("자동차 시도 횟수가 잘못되었습니다.");
    return;
  }
  return moveCar(carTry, carList);
};
