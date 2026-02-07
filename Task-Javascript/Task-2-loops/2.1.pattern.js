//This function prints a right-angled triangle

function printPattern(rows) {
  // I used outer loop for running loop based on input like if 5  runs= 5 times rows
  for (let i = 1; i <= rows; i++) {

    // Variable to store stars 
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars = stars + "*";
    }
    // Print the stars for the current row
    console.log(stars);
  }
}

//Test Case

console.log("Pattern with 5 rows:");
printPattern(5);

console.log("\nPattern with 3 rows:");
printPattern(3);

console.log("\nPattern with 1 row:");
printPattern(1);
