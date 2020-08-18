'use strict';

let date,
  days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября',
    'Октября', 'Ноября', 'Декабря'
  ];

let checkAndCreateTwoDigit = (num) => {
  return String(num).length === 1 ? ('0' + num) : num; // если число из 1 символа конкатинируем в начале 0
};


let declination = (number, titles) => {
  let decCache = [],
    decCases = [
      2, // секунд   индекс 0
      0, // секунда  индекс 1
      1, // секунды  индекс 2
      1, // секунды  индекс 3
      1, // секунды  индекс 4
      2 // секунд   индекс 5
    ],
    title = [
      ['секунда', 'секунды', 'секунд'],
      ['минута', 'минуты', 'минут'],
      ['час', 'часа', 'часов']
    ];

  // выбираем нужный ряд title в зависимости от sec, min иначе часа
  titles === 'sec' ? titles = title[0] : titles === 'min' ? titles = title[1] : titles = title[2];

  if (!decCache[number]) { // получаем индекс decCache[nuber] от числа секунд, минут, часа

    decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
  }
  return titles[decCache[number]]; // получаем title в зависимости от  значения decCashe = индекс (0, 1 или 2)
};


let start = () => {
  let date = new Date(),
    day = date.getDate(), // возвращает день месяца указанной даты по местному времени
    dayNumber = date.getDay(), // Возвращает день недели (0-6) указанной даты по местному времени.
    month = date.getMonth(), // Возвращает месяц (0-11) указанной даты по местному времени.
    year = date.getFullYear(), // Возвращает год (4 цифры для 4-х значного года) указанной даты по местному времени.
    hour = date.getHours(), // Возвращает часы (0-23) указанной даты по местному времени.
    minutes = date.getMinutes(), // Возвращает минуты (0-59) указанной даты по местному времени.
    seconds = date.getSeconds(); // Возвращает секунды (0-59) указанной даты по местному времени.

  console.log(`Сегодня ${days[dayNumber - 1]}, ${day} ${months[month]} ${year} года,
   ${hour} ${declination(hour, 'hour')} ${minutes} ${declination(minutes,
     'min')} ${seconds} ${declination(seconds, 'sec')}`);

  console.log(`${checkAndCreateTwoDigit(day)}.${checkAndCreateTwoDigit(month + 1)}.${year} — 
  ${checkAndCreateTwoDigit(hour)}:${checkAndCreateTwoDigit(minutes)}:${checkAndCreateTwoDigit(seconds)}`);

  console.warn(''); // Тупо разделитель
};

setInterval(start, 1000); // функция запускается не один раз, а периодически через указанный интервал времени.