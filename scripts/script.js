'use strict';

let arr = [
  '1111111',
  '2222222',
  '3333333',
  '44444444',
  '55555555',
  '66666666',
  '7777777777',
];

for (let i = 0; i < 7; i++) {
  if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '7') {
    console.log(arr[i]);
  }
}

let part1 = () => {
  let arr = [
    '24542',
    '56484645',
    '421021168',
    '8484616',
    '254151568',
    '101324864',
    '48465154',
  ];

  arr.forEach((item) => {
    item[0] === '2' || item[0] === '4' ? console.log(item) : {};
  });
};

part1();

outer: for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; j++) {
    // проверить, делится ли число..
    if (i % j === 0) {
      continue outer; // не подходит? идем в следующую итерацию внешнего цикла
    }
  }

  //console.log(i + ' Делители этого числа 1 и ' + i);
}

// part 2

let primeList = [];

let prime = (number) => {
  for (let k = 2; k < number; k++) {
    if (number % k === 0) {
      return false;
    }
  }
  return true;
};

let part2 = () => {

  for (let j = 2; j < 100; j++) {
    if (prime(j)) {
      primeList.push(j);
      console.log(`Делители числа ${j}: 1, ${j}`);
    }
  }
  console.log(`Все простые числа: ${primeList}`);
};

part2();