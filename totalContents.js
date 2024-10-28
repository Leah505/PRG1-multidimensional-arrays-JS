// A 2D array representing scores for different tests
const scores = [
    [78, 81, 84],
    [55, 54, 62],
    [89, 71, 90],
  ];

// Nested loop to access individual elements (scores) in the 2D array
let total = 0
for (const score of scores) {
    for (const element of score) {
      total = (total)+(element)
    }
  }

console.log(total);