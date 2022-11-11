// Калькулятор
// змінна для визначення виду математичної дії
let type;

function calc(a, b, type) {
  switch (type) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
  }
}

calc(1, 1, '&');

// Найкоротше слово
function findShortestSTR2(str) {
  const strS = str.split(" ");
  let shorterstLen = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < strS.length; i++) {
    if (strS[i].length < shorterstLen) {
        shorterstLen = strS[i].length;
    }
  }
  return shorterstLen;
}

function findShortestSTR(str){
    return str.split(' ').reduce((acc, el) => el.length < acc ? el.length : acc, Number.MAX_SAFE_INTEGER);
}


console.log(findShortestSTR("bitcoin take over the world maybe who knows perhaps"));
console.log(findShortestSTR("turns out randomtest cases are easier than writing out basic ones"));
console.log(findShortestSTR("lets talk about javascript the bestlanguage"));
console.log(findShortestSTR("i want to travel the world writing code one day"));
console.log(findShortestSTR("Lets all go on holiday somewhere very cold"));

