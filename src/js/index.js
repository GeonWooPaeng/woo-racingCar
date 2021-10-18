import { getCarName } from "./getCarName.js";

const getRandomNum = () => {
  return Math.floor(Math.random() * 10);
};

const getCarTry = () => {
  const $carTryInput = document.querySelector("#car-try-input");
};

export default function RacingCar() {
  const $carNameSubmit = document.querySelector("#car-name-submit");
  const $carTrySubmit = document.querySelector("car-try-submit");

  $carNameSubmit.addEventListener("click", getCarName);
  // $carTrySubmit.addEventListener("click", getCarTry);
}

new RacingCar();
