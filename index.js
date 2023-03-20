function superbowlWin(array) {
  const yearWon = array.find((game) => game.result === "W");
  return yearWon ? yearWon.year : undefined;
}
