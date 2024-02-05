// Please do not change the name of this function
function sentenceToCamelCase(str, x) {
  let result = "";
  const lth = str.split(" ").length;
  if (!str) return result;
  if (lth >= 1) {
    for (let i = 0; i < lth; i++) {
      if (x === "t") {
        result += str[i].charAt(0).toUpperCase() + str[i].slice(1);
      } else {
        result += str[i].charAt(0).toLowerCase() + str[i].slice(1);
      }
    }
  }
  return result;
}
if (!x) {
  str
    .split(/(?=[A-Z])/)

    .charAt(0)
    .toUpperCase() +
    str

      .split(/(?=[A-Z])/)

      .slice(1);
}

module.exports = sentenceToCamelCase;
