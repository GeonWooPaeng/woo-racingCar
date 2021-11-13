export const initGame = (carList) => {
  const $carTrySubmit = document.querySelector("#car-try-submit");

  $carTrySubmit.addEventListener("click", () => {
    getCarTry(carList);
  });
};
