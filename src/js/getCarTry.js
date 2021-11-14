import { getRandomNum } from "./getRandomNum.js";

const checkCarTry = (carTry) => {
  return carTry > -1 && carTry < 10;
};

const moveCar = (carTry, carList) => {
  const $carPlayerActions = document.querySelectorAll(".car-player-action");

  for (let i = 0; i < carTry; i++) {
    $carPlayerActions.forEach(($carPlayerAction) => {
      if (getRandomNum()) {
        moveCarPlayer($carPlayerAction);
      }
    });
  }
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
