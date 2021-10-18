const carNameLength = (carName) => {
  return carName.length < 6;
};

const carNameCheck = (carNameList) => {
  if (!carNameList.every(carNameLength)) {
    return false;
  }
  return true;
};

export const getCarName = () => {
  const $carNameInput = document.querySelector("#car-name-input");
  const carNameList = $carNameInput.value.replace(/ /gi, "").split(",");

  if (!carNameCheck(carNameList)) {
    $carNameInput.value = "";
    alert("자동차 이름 입력이 잘못되었습니다.");
  }
};
