"use strict";

let lang = "ru";
let day;

if (lang === "ru") {
  day = "Пн, Вт, Ср, Чт, Пт, Сб, Вс";
} else if (lang === "en") {
  day = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
}

console.log(day.split(","));

switch (day) {
  case "ru":
    day = "Пн, Вт, Ср, Чт, Пт, Сб, Вс";
    break;
  case "en":
    day = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
    break;
}

console.log(day.split(","));
let langArr = [];

langArr["ru"] = ["Пн", " Вт", " Ср", " Чт", " Пт", " Сб", " Вс"];

langArr["en"] = ["Monday", " Tuesday", " Wednesday", " Thursday", " Friday", " Saturday", " Sunday"];

console.log(langArr[lang]);