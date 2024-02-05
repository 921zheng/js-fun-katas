// Please do not change the name of this function
function tillAddition(cash) {
  const keys = Object.keys(cash);
  let sum = 0;
  for (let i = 0; i < keys.length; i++) {
    if (keys[i][0] === "£") {
      sum += Number(cash[keys[i]]) * Number(keys[i].slice(1));
    } else {
      sum += (Number(cash[keys[i]]) * Number(keys[i].slice(0, -1))) / 100;
    }
  }
  return "£" + toString(sum);
}

module.exports = tillAddition;
