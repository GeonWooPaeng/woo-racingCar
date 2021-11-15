import { getCarName } from "./getCarName.js";

export default function RacingCar() {
  const $carNameSubmit = document.querySelector("#car-name-submit");

  $carNameSubmit.addEventListener("click", getCarName);
}

new RacingCar();
