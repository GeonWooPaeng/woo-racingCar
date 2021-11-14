const checkRandomNum = (randomNum) => {
  if (randomNum > 4) return 0;
  return 1;
};

export const getRandomNum = () => {
  let randomNum = Math.floor(Math.random() * 10);
  return checkRandomNum(randomNum);
};
