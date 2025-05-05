//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let num of array) {
    if (morethan(num,operation)) {
      count++;
    }
  }
  if (count >= 5) {
    return true;
  } else {
    return false;
  }
}

function morethan (score,criteria) {
  if (score >= criteria) {
    return true;
  } else {
    return false;
  }
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;

scoreRoom1Result = atLeastFive(studentScoresRoom1,70);
scoreRoom2Result = atLeastFive(studentScoresRoom2,70);
scoreRoom3Result = atLeastFive(studentScoresRoom3,70);


function printroomresult (room) {
  if (room === true) {
    console.log(`นักเรียนห้องที่ ${room} ผ่านเกณฑ์ ✅`)
  } else {
    console.log(`นักเรียนห้องที่ ${room} ไม่ผ่านเกณฑ์ ❌`)
  }
};

printroomresult(scoreRoom1Result);
printroomresult(scoreRoom2Result);
printroomresult(scoreRoom3Result);
