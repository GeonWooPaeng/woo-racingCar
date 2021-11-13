import { getCarName } from "./getCarName.js";

const getRandomNum = () => {
  let randomNum = Math.floor(Math.random() * 10);
  return checkRandomNum(randomNum);
};

// const checkRandomNum = (randomNum) => {
//   if (randomNum > 4) return 1;
//   return 0;
// };

// const checkCarTry = (carTry) => {
//   return carTry > -1 && carTry < 10;
// };

// const moveCar = (carTry, carList) => {
//   const $carPlayerActions = document.querySelectorAll(".car-player-action");

//   for (let i = 0; i < carTry; i++) {
//     $carPlayerActions.forEach(($carPlayerAction) => {
//       if (getRandomNum()) {
//         moveCarPlayer($carPlayerAction);
//       }
//     });
//   }
// };

// const getCarTry = (carList) => {
//   const $carTryInput = document.querySelector("#car-try-input");
//   const carTry = $carTryInput.value;

//   if (!checkCarTry(carTry)) {
//     $carTryInput.value = "";
//     alert("자동차 시도 횟수가 잘못되었습니다.");
//     return;
//   }
//   return moveCar(carTry, carList);
// };

export default function RacingCar() {
  const $carNameSubmit = document.querySelector("#car-name-submit");
  // const $carTrySubmit = document.querySelector("#car-try-submit");

  $carNameSubmit.addEventListener("click", getCarName);
  // $carTrySubmit.addEventListener("click", getCarTry);
}

new RacingCar();
