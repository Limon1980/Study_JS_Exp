'use strict';

function strEnter(arg) {
  if (typeof arg !== 'string') {
    return 'Это не строка!';
  } else if (arg.trim().length > 30) {
    return arg.trim().substring(0, 29) + '...';
  } else {
    return arg.trim();
  }
}

console.log(
  strEnter(
    '  Травка зеленеет, солнышко блестит ласточка с весною в гости к нам летит'
  )
);
