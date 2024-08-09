function showMessage(message: string): void {
  console.log(message);
}
showMessage("hello!");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(calc(1, 2));

function customError(): never {
  throw new Error("Error");
}
customError();
