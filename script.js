let num1 = prompt("Enter a number");
if (num1 !== "") {
let operation = prompt("Enter operation +, -, /, *");
let num2 = prompt("Enter another number");
 if (operation === "+") {
    let result = prompt(parseInt(num1, 10) + parseInt(num2, 10));
  }else if (operation === "-") {
    let result = prompt(num1 - num2);
  }else if (operation === "/") {
    let result = prompt(num1 / num2);
  }else if (operation === "*") {
    let result = prompt(num1 * num2);
  }else if (operation === ""){let alertop = alert("Reload and enter a valid operation")}
  if (num2 === ""){let alertnumTwo = alert("second number not entered");}
} else {
  let alert = prompt("enter a number")
}


