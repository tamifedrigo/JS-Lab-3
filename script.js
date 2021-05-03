//WORKING!
function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
  };
  const newPassed = newScore > 60;
  newSubmission.passed = newPassed;

  array.push(newSubmission);
}

//WORKING!
function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

//WORKING!
function deleteSubmissionByName(array, name) {
  const index = array.findIndex((object) => object.name === name);
  array.splice(index, 1);
}

// //NOT WORKING
function editSubmission (array, index, newScore) {
    array[index].score = newScore;
    array[index].passed = score >= 60;
    // if (newScore >= 60) {
    //     return array[index].passed = true;
    // } else {
    //     return false;
    }



//WORKING!
function findSubmissionByName(array, name) {
  return array.name === "Jane";
}

//NOT WORKING!
function findLowestScore (array) {
    let min_value = array[0].score;
    array.forEach(element => {
        if (element.score < min_value){
        min_value = element.score;
    } 
    return min_value;   
})    
}
    

//WORKING
function findAverageScore (array) {
    let totalScore = 0;
    for (const num of array) {
        totalScore += num.score;
    }
        return totalScore / array.length;
    }

//WORKING
function filterPassing (array) {
    const passingScore = array.filter(function(submission) {
        return submission.score >= 60;
    }) 
    return passingScore;
}

//WORKING
    function filter90AndAbove (array) {
        const score90AndAbove = array.filter(function(submission) {
            return submission.score >= 90;
        }) 
        return score90AndAbove;
    }


let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
//addSubmission(submissions, "Tami", 95, "2021-04-28");
//deleteSubmissionByIndex(submissions, 4);
//deleteSubmissionByName(submissions, "Jack");
//findSubmissionByName(submissions, "Jane");
//console.log(filterPassing(submissions));
//console.log(submissions.find(findSubmissionByName));
//console.log(filter90AndAbove(submissions));
//editSubmission(submissions, 1, 59);
//console.log(findAverageScore(submissions));
//console.log(submissions);
console.log(findLowestScore(submissions));
