// A 2D array representing scores for different tests
const scores = [
    [78, 81, 84], // Scores for student 1
    [55, 54, 62], // Scores for student 2
    [89, 71, 90], // Scores for student 3
  ];

// Finding the minimum value in the 2D array using forEach
let min = 100;
scores.forEach((score) => { // Iterate through each row
  score.forEach((value) => { // Iterate through each value in the row
    if (value < min) {
      min = value; 
    }
  });
});
console.log(min)