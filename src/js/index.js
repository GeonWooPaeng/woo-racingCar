import { getCarName } from "./getCarName.js";
import { doRestart } from "./doRestart.js";

export default function RacingCar() {
  const $carNameSubmit = document.querySelector("#car-name-submit");
  const $restartBtn = document.querySelector("#restart-btn");

  $carNameSubmit.addEventListener("click", getCarName);
  $restartBtn.addEventListener("click", doRestart);
}

new RacingCar();
