// var variable //

var Practice = "hello world <br>";
document.write(Practice);

var First, Name;
First = 50;
Name = 70;
document.write(First, Name);

// let variable //
let FirstName = "aliHaider <br>";
FirstName = "haider  <br>";

document.write(FirstName);

// const variable //

const x = "Hello World  <br>"; // strings //

document.write(x);
document.write(typeof x);
document.write("<br>");
document.write("<br>");
// number //

var y = 22;
document.write(y);
document.write(typeof y);
document.write("<br>");
document.write("<br>");
// booleans //

var y = true;
document.write(y);
document.write(typeof y);
document.write("<br>");
document.write("<br>");
// arrys //
var y = ["html", "css", "js"];
document.write(y);
document.write(typeof y);
document.write("<br>");
document.write("<br>");

// object //
var y = { html: "5", css: "3", js: "ecma" };
document.write(y);
document.write(typeof y);

// arithmatic operator //

// additional  //

var a = 50;
var a = 50;
var b = 50;
var c = a + b;
document.write(c);
document.write(" <br> ");
document.write(" <br> ");

var j = 100;
var k = 50;
var c = j - k;
document.write(c);

document.write(" <br> ");
document.write(" <br> ");

var j = 100;
var k = 50;
var c = j * k;
document.write(c);

document.write(" <br> ");
document.write(" <br> ");

var j = 10;
var k = 5; // double * * can apply the 3 times multiply and get the value //
var c = j ** k;
document.write(c);

document.write(" <br> ");

var j = 100;
var k = 50;
var c = j / k;
document.write(c);

document.write(" <br> ");

var j = 100;
var k = 50;
var c = j % k;
document.write(c);

document.write(" <br> ");

var j = 100;
var k = 50;
j++;
document.write(j + k);
document.write(" <br> ");

var j = 100;
var k = 50;
j--;
document.write(j + k);

document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");

// Assignment operator //

var s = 10;
var r = 3;
s **= r;
document.write(s);

// console.log //

var q = 50;
console.table([1, 2, 3]); // using of arry //

document.write(" <br> ");

document.write(" <br> ");

// comparision operator //

var a = 10;

var b = 9;

document.write(" <br> ");

document.write(" <br> ");

console.log(a !== b);

var f = 100;
var d = 50;
if (f > d) {
  document.write(" yes f is greator then ");
}

document.write(" <br> ");

document.write(" <br> ");

var o = 500;
var p = 600;

if (o < p) {
  document.write(" That's the right answer ");
} else {
  document.write(" Condition is false now  ");
}

document.write(" <br> ");
document.write(" <br> ");

// var i=50;
// var l=40;
// if(i>l){
//     document.write("CMS developer")
// }

document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");

var age = 20;
if (age >= 18 || age <= 31) {
  // logical PIE or operator //
  console.log("yes the value is true");
}

document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");

var age = 20;
if (age >= 18 && age <= 31) {
  // logical and person and operator //
  console.log("yes the value is true");
}

document.write(" <br> ");

document.write(" <br> ");

document.write(" <br> ");

document.write(" <br> ");

var age = 20;

if (age >= 18 && age <= 31) {
  // logical and person and operator //

  console.log(" yes the value is true ");
}

var name = " ali haider ";
var gender = " male ";

if (gender == " male ") {
  document.write(" Mr " + name);
} else {
  document.write(" Miss shagufta ");
}

document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");

document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");

var per = 33;

if (per >= 88 && per <= 100) {
  document.write(" first ");
} else if (per >= 60 && per <= 80) {
  document.write(" 2nd position ");
} else if (per >= 45 && per <= 60) {
  document.write("3rd position");
} else if (per >= 33 && per <= 45) {
  document.write("4th positon");
} else if (per < 33) {
  document.write(" you are fail try it next time");
}

document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");

document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");

var age = 18;
var b = age >= 18 ? "true" : "false"; // ternary operators //
document.write(b);

document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");

var day = 8;

switch (
  day // switch case operator //
) {
  case 1:
    document.write(" today is monday ");
    break;

  case 2:
    document.write(" today is tuesday ");
    break;

  case 3:
    document.write(" today is mwednesday ");
    break;

  case 4:
    document.write(" today is thursday ");
    break;

  case 5:
    document.write(" today is friday ");
    break;

  case 6:
    document.write(" today is seturday ");
    break;

  case 7:
    document.write(" today is sunday ");
    break;
  default:
    document.write(" there is no weekend day ");
}

document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");
document.write(" <br> ");

var a = 40;
var b = 30;

if (a < b) {
  alert("yes you are true");
} else {
  alert("you are not true you are false");
}

document.write(" <br> ");

document.write(" <br> ");

document.write(" <br> ");

document.write(" <br> ");

var a = 18;
var b = 17;

if (a > b) {
  confirm("yes you are 18+");
} else {
  confirm("chup kr be kuty");
}

// var a = prompt("what is your name:");
//  document.write(a);

// function functionName(){
//   document.write("hello good night");
// };

// functionName();

// functionName();

// functionName();

// functionName();

// function sum(a,b){
//   document.write(a+b);
// }

// sum(10,20);

// sum(20,50);

// sum(50,20);

// sum(100,20);

// function MyName(){
//   return "my name is ali haider and i am CMS developer"
// };

// var name = MyName();
// document.write(MyName);

function getSum(a, b) {
  return a + b;
}
function hello(result) {
  console.log("hello every one", result);
}
hello(getSum(10, 5));
// document.write(result);

var a = 50;
function functionName() {}

let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

var a = 1;

while (a <= 10) {
  document.write(a + "<br/>");
  a = a + 1;
}

document.write("<br/>");
let answer = "";
while (answer !== "yes") {
  answer = prompt("Kya tum tayar ho? (yes likho)");
}
console.log("Shabaash! Ab chalte hain.");
document.write("<br/>");
document.write("<br/>");

for (var a = 1; a <= 10; a++) {
  document.write(a + " this is for loop <br/>");
}
document.write("<br/>");
document.write("<br/>");

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`); //console.log(`2 x ${i} = ${2 * i}`);//  // dollar for call the variable //
}
document.write("<br/>");
document.write("<br/>");

for (var a = 1; a <= 10; a++) {
  for (var b = 1; b <= a; b++) {
    document.write(b + " ");
  }
  document.write("<br/>");
};


ScrollTrigger.create({
    trigger: ' #id ',
    start: ' top top ' ,
    endTrigger: ' #otherID ',
    end: ' bottom 50%+=100px ',
    onToggle: (self) => console.log('toggled, isActive:', self.isActive),
    onUpdate: (self) => {
        console.log(
            ' progress : ' ,
            self.progress.toFixed(3),
            ' direction: ' ,
            self.direction ,
            ' velocity ' ,
            self.getVelocity()
        );
    }
});

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: '.container',
        pin: true, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=500', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
            snapTo: 'labels', // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        }
    }
});

// add animations and labels to the timeline
tl.addLabel('start')
    .from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
    .addLabel('color')
    .from('.box', { backgroundColor: '#28a92b' })
    .addLabel('spin')
    .to('.box', { rotation: 360 })
    .addLabel('end');


let tween = gsap.to(".class", {
   x: 100,
   id: "example",
   scrollTrigger: ".trigger",
});
      
      console.log(ScrollTrigger.getById("example").animation); 
