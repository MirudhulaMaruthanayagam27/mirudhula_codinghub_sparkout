function canVote(age) {
  if(age>=18){
    return "Eligible to vote";
  }
  else{
    return "Not eligible to vote";
  }
}

// Test cases
console.log(canVote(20)); // "Eligible to vote"
console.log(canVote(16)); // "Not eligible to vote"