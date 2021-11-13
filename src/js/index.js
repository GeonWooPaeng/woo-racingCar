import { getCarName } from "./getCarName.js";

const getRandomNum = () => {
  return Math.floor(Math.random() * 10);
};

export default function RacingCar() {
  const $carNameSubmit = document.querySelector("#car-name-submit");

  $carNameSubmit.addEventListener("click", getCarName);
}

new RacingCar();
