
function sum(fromN, toN) {

  // this 'if' statement is the base case
  if (fromN === toN) {
    return fromN;
  }

  // this is the 'recursive case'. It runs until fromN === toN (as indicated in the base case above)
  return fromN + sum(fromN + 1, toN);

}


// console.log(sum(3, 7));
// console.log(sum(1, 1))

module.exports = sum;
