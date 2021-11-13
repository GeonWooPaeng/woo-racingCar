import { initGame } from "./initGame.js";

function Car(name) {
  this.name = name;
}

const actionPlayerHTML = (carName) => {
  const $playerAction = document.querySelector("#player-action");

  $playerAction.insertAdjacentHTML(
    "beforeend",
    `<div class="mr-2 car-player-action">
        <div class="car-player">${carName.name}</div>
        <div class="d-flex justify-center mt-3">
          <div class="relative spinner-container">
            <span class="material spinner"></span>
          </div>
      </div>
      </div>`
  );
};

export const setCarName = (carNameList) => {
  const carList = carNameList.map((carName) => new Car(carName));
  carList.forEach((carName) => {
    carName.cnt = 0;
    actionPlayerHTML(carName);
  });
  return initGame(carList);
};
