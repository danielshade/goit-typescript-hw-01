// ! Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

function showMessage(message: string): void {
  console.log("showMessage: ", message);
}

showMessage("Hello World");
showMessage("1");
// showMessage(1); ПОМИЛКА function showMessage(message: string): void


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

console.log("calc: ", calc(1, 2));
// console.log("calc: ", calc("1", 2)); ПОМИЛКА Argument of type 'string' is not assignable to parameter of type 'number'.

function customError(): never {
  throw new Error("Error");
}

function handleError() {
  try {
    customError();
  } catch (error) {
    console.error('Caught an error:', error);
  }
}

handleError();
