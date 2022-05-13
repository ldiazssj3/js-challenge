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

const coins = [5, 7, 1, 1, 2, 3, 22];
console.log(getNonConstructibleChange(coins));

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

const numbers = [-2, -1];
console.log(getSortedSquaredArray(numbers));
