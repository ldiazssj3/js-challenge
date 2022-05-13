const getNonConstructibleChange = (input) => {
  const coins = input.sort((a, b) => a - b);

  let currentChange = 0;

  coins.forEach((coint) => {
    const aimedChange = currentChange + 1;

    if (coint > aimedChange) return aimedChange;
    
    currentChange += coint;
  });

  return currentChange + 1;
};

console.log(getNonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));

const getSortedSquaredArray = (input) => {
  /*
  const squaredInput = input.map((number) => number ** 2);

  return squaredInput.sort((a, b) => a - b);
  */
  
  let l = 0;
  let r = input.length - 1;
  let p = input.length - 1;
  let result = [];
  
  while (l <= r) {
    const lValue = input[l];
    const rValue = input[r];
    
    if(Math.abs(lValue) > Math.abs(rValue)) {
      result[p] = lValue ** 2;
      l += 1;
    }
    else {
      result[p] = rValue ** 2;
      r -= 1;
    }
    p -= 1
  }
  
  return result;
};
console.log(getSortedSquaredArray([-10, -5, 0, 5, 10]));
