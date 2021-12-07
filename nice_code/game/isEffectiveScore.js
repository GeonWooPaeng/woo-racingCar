import { GAME } from "../utils/constant.js";

export const isEffectoveScore = (num) => {
  return num >= GAME.EFFECTIVE_SCORE;
};
