function range (a,b) {
  if (a === b) {
    return [a];
  }

 return range(a, b-1).concat([b]);
}

function exp(b, n) {
  if (n === 0) {
    return 1;
  }
  return b * exp(b, n - 1);
}

function exp2(b, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  }

  if (n % 2 === 0) {
    let temp = exp2(b, n / 2);
    return temp * temp;
  }else {
    let temp2 = exp2(b, (n-1) / 2);
    return b * (temp2 * temp2);
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [n];
  }else if (n === 2) {
    return [1, 1];
  }
  let prev = fibonacci(n-1);
  let nextNumber = [prev[prev.length - 1] + prev[prev.length - 2]];
  return prev.concat(nextNumber);
}


let bsearch = function(array, target) {

  if ((array.length === 1) && array.indexOf(target) === -1) {
    return null;
  }

  let midIdx = Math.floor(array.length / 2);
  let left = array.slice(0, midIdx);
  let right = array.slice(midIdx, array.length);


  if (array[midIdx] === target) {
    return midIdx;
  } else if (array.length === 0) {
    return null;
  }

  if (array[midIdx] > target) {
    return bsearch(left, target);
    // break;
  } else if (bsearch(right,target) === null) {
    return null
  }
  else {
    return left.length + bsearch(right, target);
  }

};

// console.log(bsearch([1, 2, 3], 1));
//
// console.log(bsearch([1,1], 1));
// console.log(bsearch([1,2,3,4,5], 4));
// console.log(bsearch([2, 3, 4, 5], 3))
// console.log(bsearch([2, 4, 6, 8, 10], 6))
// console.log(bsearch([1, 3, 4, 5, 9], 5))
// console.log(bsearch([1, 2, 3, 4, 5, 6], 6))
// console.log(bsearch([1, 2, 3, 4, 5, 6], 0))
// console.log(bsearch([1, 2, 3, 4, 5, 7], 6))


//-----------------------------

function anyCoinsSmaller (total, coins) {
  var flag = false;
  coins.forEach( (coin) => {
    if (total > coin) {
        flag = true;
    };
  });
  return flag;
};


function makeChange (total, coins) {
  if (total === 0) {
    return [];
  } else if (anyCoinsSmaller(total,coins) === false ) {
    return null;
  }

  let bestChange = null;

  let remainder = total

  coins.forEach( (coin) => {
    if (coin > total) {return;}
    let coinIdx = coins.indexOf(coin);
    remainder = total - coin;
    let bestRemainder = makeChange(remainder,
        coins.slice(coinIdx, coins.length));

    if (bestRemainder === null) {return;}

    let thisChange = [coin].concat(bestRemainder)

    if (bestChange === null || (thisChange.length < bestChange.length)) {
      bestChange = thisChange;
    }

  })
  return bestChange
  // makeChange( ,coins )
}

// console.log(makeChange(14, [10, 7, 1]));

//-------------------------


function merge(array1, array2) {
  let out = [];
  while ((array1.length > 0) && (array2.length > 0)) {
    if (array1[0] < array2[0]) {
      out.push(array1.shift());
    } else {
      out.push(array2.shift());
    }
  }
  return out.concat(array1).concat(array2);
}


function mergeSort(array)  {
  if (array.length <= 1) {
    return array;
  }
  let midIdx = Math.floor(array.length / 2);
  let left = array.slice(0, midIdx);
  let right = array.slice(midIdx, array.length);

  return merge(mergeSort(left), mergeSort(right));
}


Array.prototype.subSets = function() {
  if (this.length === 0) {
    return [this];
  }
  let prev = this.slice(0, this.length - 1).subSets();
  let mapped = prev.map( (el) => el.concat(this[this.length - 1]));
  return prev.concat(mapped);
};

// console.log([1,2,3].subSets());
