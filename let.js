// In JavaScript, let is used to declare variables with block scope. It is an improvement over var and is widely recommended for modern JavaScript coding.
// Block Scope – A let variable is only accessible within the block {} where it is declared.
// No Hoisting Issues – Unlike var, let does not get initialized as undefined. Accessing it before declaration results in a ReferenceError.
// Reassignment Allowed – You can update the value of a let variable, but you cannot redeclare it within the same scope.//

let FirstName = "aliHaider <br>";
FirstName = "haider  <br>";

document.write(FirstName);