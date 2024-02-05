// Please do not change the name of this function
function getTweetData(tweet) {
  let tagNum = 0;
  let mentionNum = 0;
  let tagArray = [];
  let mentionArray = [];
  if (tweet.length == 0)
    return {
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 0,
    };

  if (!tweet.includes("#") && !tweet.includes("@"))
    return {
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: tweet.length,
    };
  let strNew = tweet.split(" ");
  for (let i = 0; i < strNew.length; i++) {
    if (strNew[i].startsWith("#") && !tagArray.includes(strNew[i])) {
      tagArray.push(strNew[i]);
      tagNum += 1;
    }
    if (strNew[i].startsWith("@") && !mentionArray.includes(strNew[i])) {
      mentionArray.push(strNew[i]);
      mentionNum += 1;
    }
  }
  return {
    tags: tagArray,
    mentions: mentionArray,
    tagCount: tagNum,
    mentionCount: mentionNum,
    length: tweet.length,
  };
}

module.exports = getTweetData;
