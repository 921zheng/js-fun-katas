// Please do not change the name of this function
function dnaPairs(dna) {
  // Write your code here

  if (dna.length == 0) return [];
  if (dna.length == 1) {
    if (dna == "G") return [["G", "C"]];
    else if (dna == "A") return [["A", "T"]];
    else if (dna == "C") return [["C", "G"]];
    else return [["T", "A"]];
  }
  if (dna.length > 1) {
    let newArr = [];

    let dnaPairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C",
    };
    for (let item in dna) {
      let temp = [];
      temp.push(dna[item], dnaPairs[dna[item]]);
      newArr.push(temp);
    }
    return newArr;
  }
}

module.exports = dnaPairs;
