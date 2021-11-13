import { setCarName } from "./setCarName.js";

const carNameLength = (carName) => {
  return carName.length < 6;
};

const checkCarName = (carNameList) => {
  if (!carNameList.every(carNameLength)) {
    return false;
  }
  return true;
};

export const getCarName = () => {
  const $carNameInput = document.querySelector("#car-name-input");
  const carNameList = $carNameInput.value.replace(/ /gi, "").split(",");

  if (!checkCarName(carNameList)) {
    $carNameInput.value = "";
    alert("자동차 이름 입력이 잘못되었습니다.");
    return;
  }
  return setCarName(carNameList);
};
