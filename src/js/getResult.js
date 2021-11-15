const getMaxMove = (carList) => {
  let maxMove = 0;

  carList.forEach((car) => {
    if (maxMove < car.cnt) {
      maxMove = car.cnt;
    }
  });
  return maxMove;
};

const setResult = (result) => {
  const $finalSection = document.querySelector("#final-section");
  let winner = result.join(", ");

  console.log(winner);
  $finalSection.insertAdjacentHTML(
    "afterbegin",
    `<h2 >🏆 최종 우승자: ${winner} 🏆</h2>`
  );
};

export const getResult = (carList) => {
  let result = [];
  let maxMove = getMaxMove(carList);

  carList.forEach((car) => {
    if (car.cnt === maxMove) {
      result.push(car.name);
    }
  });
  return setResult(result);
};
