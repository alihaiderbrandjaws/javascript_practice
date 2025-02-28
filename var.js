// In JavaScript, the var keyword is used to declare variables. However, it has some unique characteristics compared to let and const: //

// Function Scope – A var variable is only scoped to the function in which it is declared. If declared outside any function, it becomes globally accessible. //

// Hoisting – Variables declared with var are hoisted to the top of their scope but are initialized as undefined until the code execution reaches the assignment. //

// Re-declaration Allowed – You can re-declare the same variable within the same scope without errors. //


var Practice = "hello world <br>";
document.write(Practice);

var First, Name;
First = 50;
Name = 70;
document.write(First, Name);