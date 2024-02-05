// Please do not change the name of this function
function updateRemoteStudents(people) {
  let newArray = [];
  if (people.length == 0) return [];
  if (people.length >= 1) {
    for (let i = 0; i < people.length; i++) {
      if (!people[i].location) {
        people[i].location = "remote";

        newArray.push(people[i]);
      } else {
        newArray.push(people[i]);
      }
    }
    return newArray;
  }
}

module.exports = updateRemoteStudents;
