const checkRandomNum = (randomNum) => {
  if (randomNum > 4) return 1;
  return 0;
};

export const getRandomNum = () => {
  let randomNum = Math.floor(Math.random() * 10);
  return checkRandomNum(randomNum);
};
