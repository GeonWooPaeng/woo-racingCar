const carNameLength = (carName) => {
  return carName.length < 6;
};

const carNameCheck = (carNameList) => {
  if (!carNameList.every(carNameLength)) {
    return false;
  }
  return true;
};
i;
const actionPlayerHTML = (carName) => {
  const $playerAction = document.querySelector("#player-action");

  $playerAction.insertAdjacentHTML(
    "beforeend",
    `<div class="mr-2">
      <div class="car-player">${carName}</div>
      <div class="d-flex justify-center mt-3">
        <div class="relative spinner-container">
          <span class="material spnner"></span>
        </div>
      </div>
    </div>`
  );
};

const setCarName = (carNameList) => {
  carNameList.forEach((carName) => {
    actionPlayerHTML(carName);
  });
};

export const getCarName = () => {
  const $carNameInput = document.querySelector("#car-name-input");
  const carNameList = $carNameInput.value.replace(/ /gi, "").split(",");

  if (!carNameCheck(carNameList)) {
    $carNameInput.value = "";
    alert("자동차 이름 입력이 잘못되었습니다.");
  }
  return setCarName(carNameList);
};
