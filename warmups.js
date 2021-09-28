function addFive(n) {
  return n + 5;
}
console.log(addFive(0));
function getOpposite(n) {
  if (typeof n === "string" || n % 1 !== 0) {
    console.log(-1);
  } else {
    console.log(n - 2 * n);
  }
}
getOpposite(5.5);
function minsToSecs(m) {
  return Math.round(m * 60);
}
console.log(minsToSecs(30));

function toInteger(str) {
  return parseInt(str);
}

console.log(toInteger("12"));

function nextNumber(n) {
  return n + 1;
}

console.log(nextNumber(-10));

function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3]));

function hourToSeconds(arr) {
  arr.forEach((item, i) => arr.splice(i, 1, item * 3600));
  return arr;
}

console.log(hourToSeconds([1, 2, 3]));

function findPerimeter(num1, num2) {
  return 2 * num1 + 2 * num2;
}
console.log(findPerimeter(2, 9));

function lessThan100(num1, num2) {
  return num1 + num2 < 100;
}

console.log(lessThan100(83, 34));

function remainder(num1, num2) {
  return num1 % num2;
}
console.log(remainder(5, 5));

function CountAnimals(tur, horse, pigs) {
  return tur * 2 + horse * 4 + pigs * 4;
}
console.log(CountAnimals(1, 2, 3));

function frames(num1, num2) {
  return num2 * 60 * num1;
}

console.log(frames(10, 25));

function divisibleByFive(num1) {
  return num1 % 5 === 0;
}
console.log(divisibleByFive(-55));

function isEven(num) {
  if (typeof num === "number") {
    console.log(num % 2 === 0);
  } else {
    console.log(-1);
  }
}
isEven(5);
function areBothOdd(num1, num2) {
  if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
areBothOdd(2, 3);

function getFullName(...args) {
  console.log(args.join(" "));
}

getFullName("GUVI", "GEEK");

function getLengthOfWord(word1) {
  if (typeof word1 === "string") {
    console.log(word1.length);
  } else {
    console.log(-1);
  }
}
getLengthOfWord();

function isSameLength(...args) {
  return args.every((item) => item.length === args[0].length);
}

console.log(isSameLength("GUVI", "GEEK"));

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(getDistance(100, 100, 400, 300));

function getNthElement(array, n) {
  if (array.length) {
    return array[n - 1];
  } else {
    return -1;
  }
}
console.log(getNthElement([1, 3, 5], 1));

var obj = {
  mykey: "value",
};

function getProperty(obj, key) {
  console.log(obj[key]);
}

getProperty(obj, "mykey");

var obj1 = {};
function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}

console.log(addProperty(obj1, "mykey"));

var obj = {
  name: "sss",
  name1: "sas",
};

function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeProperty(obj, "name"));

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
  let newArr = [];
  let posSum = 0;
  let negSum = 0;
  arr.forEach((item) => {
    if (item > 0) {
      posSum += item;
    } else {
      negSum += item;
    }
  });
  return [posSum, negSum];
};
console.log(ar2(arr));

function getPositives(ar) {
  return ar.filter((item) => item > 0);
}
console.log(getPositives(arr));

function powersOfTwo(n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(Math.pow(2, i));
  }
  return res.join(",");
}
console.log(powersOfTwo(2));

function findMax(ar) {
  console.log(`Max: ${Math.max(...ar)}`);
}
findMax(arr);

function isPrime(n) {
  let j = 2;
  while (j < n) {
    if (n % j === 0) {
      return false;
    }
    j++;
  }
  return true;
}

function printPrimes(nPrimes) {
  var n = 2;

  while (n < nPrimes) {
    //console.log(n, isPrime(n));
    if (isPrime(n)) {
      console.log(n, " → ", n);
    }

    n++;
  }
}

printPrimes(100);
