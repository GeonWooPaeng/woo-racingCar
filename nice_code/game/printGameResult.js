import { GAME } from "../utils/constant.js";
import { getWinners } from "./getWinners.js";
import { restartGame } from "./restartGame.js";

const alertGameResult = (winners) => {
  if (!winners) {
    alert("Error: 우승자를 찾지 못했습니다.");
    throw new Error("우승자를 찾지 못했습니다.");
  }

  alert(`축하드립니다! 우승자는 ${winners}입니다.`);
};

export const printGameResult = () => {
  const $gameResultText = document.querySelector("#game-result-text");
  const $gameRestartButton = document.querySelector("#game-restart-button");
  const winners = getWinners();

  $gameResultText.innerHTML = `최종 우승자: ${winners}`;
  $gameRestartButton.addEventListener("click", restartGame);

  settimeout(() => alertGameResult(winners), GAME.RESULT_ALERT_DELAY);
};
