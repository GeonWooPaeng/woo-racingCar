import { getCarName } from "./getCarName.js";

export default function RacingCar() {
  const $carNameSubmit = document.querySelector("#car-name-submit");
  // const $carTrySubmit = document.querySelector("#car-try-submit");

  $carNameSubmit.addEventListener("click", getCarName);
  // $carTrySubmit.addEventListener("click", getCarTry);
}

new RacingCar();
