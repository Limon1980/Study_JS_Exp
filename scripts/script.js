let num = 266219;
let str = num.toString();
let sum = 1;

// console.log(str.length);
for (let i = 0; i < str.length; i++) {

  sum = sum * +str[i];
  // условие когда мы дошли до последнего символа числа
  if (i === str.length - 1) {
    console.log('Произведение чисел по порядку от числа ' + num + ' будет ' + sum);
    let exp = sum ** 3;
    console.log('Возведем ' + sum + ' в степень 3 = ' + exp);
    console.log('Выведем первые две цифры полученного числа ' + exp.toString().slice(0, 2));
  }

}