const clearInput = () => {
  const $carNameInput = document.querySelector("#car-name-input");
  const $carTryInput = document.querySelector("#car-try-input");

  $carNameInput.value = "";
  $carTryInput.value = "";
};

const clearSection = () => {
  const $playerAction = document.querySelector("#player-action");
  const $finalSection = document.querySelector("#final-section");

  while ($playerAction.hasChildNodes()) {
    $playerAction.removeChild($playerAction.firstChild);
  }

  $finalSection.removeChild($finalSection.firstChild);
};

export const doRestart = () => {
  clearInput();
  clearSection();
};
