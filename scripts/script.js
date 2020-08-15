'use strict';


const arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

const day = new Date().getDay();
console.log(days[day]);

arr.forEach((item, index, array) => {
  if ((item === 'Суббота' || item === 'Воскресенье') && (item !== days[day])) {
    document.write(`<p><i>${item}</i></p>`);
  } else if (item === days[day]) {
    document.write(`<p><b>${item}</b></p>`);
  } else {
    document.write(`<p>${item}</p>`);
  }
});