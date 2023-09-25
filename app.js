// // Chapter 1 (Alerts)
// alert("First Name");
// alert("Last Name");
// alert("Email");
// alert("Phone Number");
// alert("Password");

// // Chapter 2 (Variables for string)
// var myVariableName;
// var myVariable;
// myVariable = "This is a string.";
// var teamName = "Team Awesome";
// var bestMan = "Charlie";
// bestMan = "David";

// // Chapter 3 (Variables for numbers)
// var caseQty; 
// caseQty = 144;
// var num = 9;
// var sumVariable;
// sumVariable = 5 + 3;
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// var firstNum = 5;
// firstNum = firstNum + 3;

// // Chapter 4 (Variable names Legal and Illegal)
// var productCost = 3.45;
// var nameOfBand;
// var myNumber = 42;
// var fullName = "JohnDoe";
// // Legal variables: myVar, myVariable, userName, _myVar
// // Illegal variables: 1stName, first name, my-var, alert

// // Chapter 5 (Math Expression I)
// var num = 20 % 6;
// var largeNum = 1000 * 2000;
// var result = variable1 - variable2;
// var remainder = 15 % 7;
// var num1 = 5;
// var num2 = 7;
// alert(num1 * num2);

// // Chapter 6 (Math Expression II)
x++;
x -= 1;
x--;
var x = 50;
var y = x++;
var y = 50;
var z = --y;
var newNum = num--;
var a = 5;
var b = ++a;

// // Chapter 7 (Math Expression III)
// var calculatedNum = 2 + (2 * 6);
// var calculatedNum = (2 + 2) * 6;
// var calculatedNum = (2 + 2) * (4 + 2);
// var calculatedNum = ((2 + 2) * 4) + 2;




// // Chapter 8 (Concatenating Text Strings)
// var num = "2" + "2"; // num is "22"
// var message = "Hello," + "Dolly"; // message is "Hello,Dolly"
// alert("33" + 3); // Displays "333"

// // Chapter 9 (Prompts)
// var firstName = prompt("Enter first name");
// var country = prompt("Country?", "China");
// // Corrected statement:
// var yourName = prompt("Enter Your Name");

// // Chapter 10 (if statements)
// var city = "Karachi";
// if (city === "Karachi") {
//   console.log("The City OF Lights");
// }

// // Chapter 11 (Comparison Operators)
// if (a !== b) {
//   // Code here
// }

// if (x >= y) {
//   var z = prompt("Enter the value of z?");
// }

// // Chapter 12 (if…else and else if statements)
// var variable1 = 10;
// var variable2 = 5;

// if (variable1 >= variable2) {
//   alert("Variable1 is greater than or equal to Variable2");
// } else {
//   alert("Variable2 is greater than Variable1");
// }

// // Chapter 13 (Testing sets of conditions)
// if (a === b && c === d) {
//   // Code here
// }

// if (a === b || c !== d) {
//   // Code here
// }

// if ((name === "Hamza" || name === "Arsalan") && age < 60) {
//   // Code here
// }

// // Chapter 14 (If statements nested)
// var password = "mySecretPassword";
// if (password !== "") {
//   if (password.length <= 5) {
//     alert("Password must be greater than 5");
//   } else {
//     alert("OK");
//   }
// }

// // Chapter 15 (Array I)
// var emptyArray = [];
// var stringArray = ["Hello"];
// alert(stringArray[2]); // Alerts "undefined"

// // Chapter 16 (Array II)
// var stringArray = ["h", "i", "j", "k"];
// stringArray.pop(); // Removes the last element

// var numberArray = [1, 2, 3, 4, 5];
// numberArray.push(6); // Adds a number to the end

// // Chapter 17 (Array III)
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift(); // Removes the first element

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3); // Adds numbers to the beginning

// var myArray = [1];
// myArray.unshift(2); // Adds 2 to the beginning
// alert(myArray[0]); // Alerts 2

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L"); // Inserts "L" between "M" and "XL"

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3); // Copies the first 3 elements to regSizes

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 3, "parrot", "fish"); // Removes "cat", "ox", and "duck", adds "parrot" and "fish"
// pets.splice(0, 1); // Removes "dog"

// // Chapter 18-20 (for Loops, Additional Prompts, and Conditions) - Code not provided for brevity.
// // This code snippet now covers chapters 8 to 20,
// // including conditional statements, arrays, and related concepts. 

// // Chapter 21 (Changing Case)
// var allLower = userInput.toLowerCase();

// // Chapter 22-25 (Strings)
// var sameWords = "captain";
// var slicedPart = sameWords.slice(1, 3);
// var stringLength = sameWords.length;
// var animal = "elephant";
// var seg = animal.slice(1, 5);
// var strLength = sameWords.length;
// var charArray = [];
// for (var i = 0; i < sameWords.length; i++) {
//   charArray[i] = sameWords.charAt(i);
// }
// var reply = "no no no";
// var revisedReply = reply.replace("no", "yes");

// // Chapter 26 (Rounding Numbers)
// var origNum = 4.7;
// var roundNum = Math.ceil(origNum);
// var roundDownNum = Math.floor(origNum);
// var roundedNum = origNum.toFixed(2);
// var roundedHalf = Math.round(0.5);

// // Chapter 27 (Random Numbers)
// var randomNum = Math.floor(Math.random() * 50) + 1;
// var randomVar = Math.random();
// var dice = Math.floor(Math.random() * 6) + 1;
// var toss = Math.random() < 0.5 ? "Heads" : "Tails";

// // Chapter 28, 29 (Converting Strings)
// // 1. parseInt()
// // 2. parseInt("123")
// // 3. parseFloat()
// // 4. Use isNaN() or Number()
// // 5. String()
// // 6. String(42)
// // 7. parseFloat("3.14")

// // Chapter 30 (Controlling the length of decimals)
// var num = 12.3456789;
// var newNum = num.toFixed(4);
// num = parseFloat(newNum);
// var strNum = num.toFixed(2).toString();
// var longDecimal = 0.5;
// var shortDecimal = longDecimal.toFixed(0);

// // Chapter 31-34 (Date & Time)
// var dObj = new Date();
// var dStr = dObj.toString();
// var day = dObj.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(dayNames[day]);
// var currentDate = new Date();
// var later = new Date(2020, 11, 31);
// var specificDate = new Date(1992, 1, 2);
// var referenceDate = new Date("January 1, 1980");
// referenceDate.setHours(0, 0, 0, 0);

// // Chapter 35-37 (Functions)
// function displayAlert() {
//   // Code here
// }

// function askName() {
//   var userName = prompt("Enter name");
// }

// function exampleFunction() {
//   var result1 = function1();
//   var result2 = function2();
//   // More code here
// }

// function concat(a, b, c) {
//   return a + b + c;
// }

// function multiply(x, y, z) {
//   return x * y * z;
// }

// function findAverage(numbers) {
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum / numbers.length;
// }

// function sumTwoNumbers(a, b) {
//   return a + b;
// }

// // Chapter 38 (Local vs. Global Variables)
// function localVariableDemo() {
//   var localVar = "I'm a local variable";
// }

// function accessGlobalVariable() {
//   var globalVar = "I'm a global variable";
//   console.log(globalVar);
// }

// // Chapter 39, 40 (Switch Statements)
// var variableToCheck = "Case2";
// switch (variableToCheck) {
//   case "Case1":
//     // Code for Case1
//     break;
//   case "Case2":
//     // Code for Case2
//     break;
//   default:
//     // Default code
// }
// var cityName = "Karachi";
// switch (cityName) {
//   case "Karachi":
//     alert("You entered Karachi");
//     break;
//   default:
//     alert("Please write correct city");
// }


// // 
// Here's a continuation of the JavaScript code snippet covering chapters 21 to 40:

// javascript
// Copy code
// // Chapter 21 (Changing Case)
// var allLower = userInput.toLowerCase();

// // Chapter 22-25 (Strings)
// var sameWords = "captain";
// var slicedPart = sameWords.slice(1, 3);
// var stringLength = sameWords.length;
// var animal = "elephant";
// var seg = animal.slice(1, 5);
// var strLength = sameWords.length;
// var charArray = [];
// for (var i = 0; i < sameWords.length; i++) {
//   charArray[i] = sameWords.charAt(i);
// }
// var reply = "no no no";
// var revisedReply = reply.replace("no", "yes");

// // Chapter 26 (Rounding Numbers)
// var origNum = 4.7;
// var roundNum = Math.ceil(origNum);
// var roundDownNum = Math.floor(origNum);
// var roundedNum = origNum.toFixed(2);
// var roundedHalf = Math.round(0.5);

// // Chapter 27 (Random Numbers)
var randomNum = Math.floor(Math.random() * 50) + 1;
var randomVar = Math.random();
var dice = Math.floor(Math.random() * 6) + 1;
var toss = Math.random() < 0.5 ? "Heads" : "Tails";

// // Chapter 28, 29 (Converting Strings)
// // 1. parseInt()
// // 2. parseInt("123")
// // 3. parseFloat()
// // 4. Use isNaN() or Number()
// // 5. String()
// // 6. String(42)
// // 7. parseFloat("3.14")

// // Chapter 30 (Controlling the length of decimals)
// var num = 12.3456789;
// var newNum = num.toFixed(4);
// num = parseFloat(newNum);
// var strNum = num.toFixed(2).toString();
// var longDecimal = 0.5;
// var shortDecimal = longDecimal.toFixed(0);

// // Chapter 31-34 (Date & Time)
// var dObj = new Date();
// var dStr = dObj.toString();
// var day = dObj.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(dayNames[day]);
// var currentDate = new Date();
// var later = new Date(2020, 11, 31);
// var specificDate = new Date(1992, 1, 2);
// var referenceDate = new Date("January 1, 1980");
// referenceDate.setHours(0, 0, 0, 0);

// // Chapter 35-37 (Functions)
// function displayAlert() {
//   // Code here
// }

// function askName() {
//   var userName = prompt("Enter name");
// }

// function exampleFunction() {
//   var result1 = function1();
//   var result2 = function2();
//   // More code here
// }

// function concat(a, b, c) {
//   return a + b + c;
// }

// function multiply(x, y, z) {
//   return x * y * z;
// }

// function findAverage(numbers) {
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum / numbers.length;
// }

// function sumTwoNumbers(a, b) {
//   return a + b;
// }

// // Chapter 38 (Local vs. Global Variables)
// function localVariableDemo() {
//   var localVar = "I'm a local variable";
// }

// function accessGlobalVariable() {
//   var globalVar = "I'm a global variable";
//   console.log(globalVar);
// }

// // Chapter 39, 40 (Switch Statements)
// var variableToCheck = "Case2";
// switch (variableToCheck) {
//   case "Case1":
//     // Code for Case1
//     break;
//   case "Case2":
//     // Code for Case2
//     break;
//   default:
//     // Default code
// }
// var cityName = "Karachi";
// switch (cityName) {
//   case "Karachi":
//     alert("You entered Karachi");
//     break;
//   default:
//     alert("Please write correct city");
// }
// //This code snippet covers chapters 21 to 40,
// // including concepts related to strings, rounding numbers, random numbers, 
// //date and time manipulation, functions, and switch statements. 




// // Chapter 41, 42 (while loops, do…while loops)
// var i = 0;
// while (i < 2) {
//   // Code that does nothing
//   i++;
// }

// var animals = ["horse", "ox", "cow", "pig", "duck"];
// var found = false;
// var index = 0;
// while (index < animals.length) {
//   if (animals[index] === "pig") {
//     alert("Found it!");
//     break;
//   }
//   index++;
// }

// var counter = 1;
// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }

// var userNumber;
// while (true) {
//   userNumber = prompt("Enter a number:");
//   if (userNumber !== null) {
//     alert("You entered: " + userNumber);
//     break;
//   }
// }

// var numberToCheck = 5;
// while (numberToCheck > 0) {
//   if (numberToCheck % 2 === 0) {
//     alert(numberToCheck + " is even.");
//   } else {
//     alert(numberToCheck + " is odd.");
//   }
//   numberToCheck--;
// }

// var targetNumber = Math.floor(Math.random() * 100) + 1;
// var userGuess;
// var attempts = 0;

// while (userGuess !== targetNumber) {
//   userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
//   attempts++;

//   if (userGuess < targetNumber) {
//     alert("Too low! Try again.");
//   } else if (userGuess > targetNumber) {
//     alert("Too high! Try again.");
//   }
// }

// alert("Congratulations! You guessed the number " + targetNumber + " in " + attempts + " attempts.");

// var countdown = 10;
// while (countdown >= 0) {
//   console.log(countdown);
//   countdown--;
// }

// // Chapter 46, 48 (Events)
// // Event listeners for the examples below

// // 1. Click event
// element.addEventListener("click", function () {
//   console.log("Element clicked");
// });

// // 2. Hide element on click
// elementToHide.addEventListener("click", function () {
//   elementToHide.style.display = "none";
// });

// // 3. Change link color on hover
// linkElement.addEventListener("mouseover", function () {
//   linkElement.style.color = "red";
// });

// linkElement.addEventListener("mouseout", function () {
//   linkElement.style.color = "blue";
// });

// // 4. Scroll to top
// linkToTop.addEventListener("click", function () {
//   window.scrollTo(0, 0);
// });

// // 5. Play sound on link click
// soundLink.addEventListener("click", function () {
//   var audio = new Audio("sound.mp3");
//   audio.play();
// });

// // 6. Open new window on link click
// newWindowLink.addEventListener("click", function () {
//   window.open("https://example.com", "_blank");
// });

// // 7. Alert on button click
// buttonElement.addEventListener("click", function () {
//   alert("Button clicked");
// });

// // 8. Change button color on hover
// hoverButton.addEventListener("mouseover", function () {
//   hoverButton.style.backgroundColor = "yellow";
// });

// hoverButton.addEventListener("mouseout", function () {
//   hoverButton.style.backgroundColor = "green";
// });

// // 9. Play sound on button click
// soundButton.addEventListener("click", function () {
//   var audio = new Audio("sound.mp3");
//   audio.play();
// });

// // 10. Alert on mouseover
// element.addEventListener("mouseover", function () {
//   alert("Mouse over element");
// });

// // 11. Hide element on mouseout
// element.addEventListener("mouseout", function () {
//   element.style.display = "none";
// });

// // 12. Open new window and close it on button click
// openCloseWindowButton.addEventListener("click", function () {
//   var popup = window.open("https://example.com", "_blank", "width=500,height=500");
//   var closeBtn = popup.document.createElement("button");
//   closeBtn.textContent = "Close";
//   closeBtn.addEventListener("click", function () {
//     popup.close();
//   });
//   popup.document.body.appendChild(closeBtn);
// });

// // Chapter 49, 50 (Reading and Setting field values)
// var userInput = document.getElementById("userInput").value;
// console.log(userInput);

// var checkboxValue = document.getElementById("checkbox").checked;
// console.log(checkboxValue);

// var selectBoxValue = document.getElementById("selectBox").value;
// console.log(selectBoxValue);

// document.getElementById("textField").value = "Some text";

// var married = false;
// if (!married) {
//   document.getElementById("status").value = "available";
// }

// var emptyField = document.getElementById("emptyField");
// if (emptyField.value === "") {
//   emptyField.value = "Default Value";
// }

// // Chapter 51 (Reading and Setting paragraph text)
// // Event listener for the "Show More" paragraph
// showMoreParagraph.addEventListener("click", function () {
//   showMoreParagraph.classList.toggle("expanded");
// });

// // Read and search for specific word
// var paragraphText = paragraphElement.textContent;
// var wordToSearch = "specific";
// if (paragraphText.includes(wordToSearch)) {
//   console.log("Found the word: " + wordToSearch);
// }

// // Find the longest word
// var words = paragraphText.split(" ");
// var longestWord = "";
// for (var i = 0; i < words.length; i++) {
//   if (words[i].length > longestWord.length) {
//     longestWord = words[i];
//   }
// }

// console.log("Longest word: " + longestWord);

// // Set paragraph text based on text field value
// var textFieldValue = document.getElementById("textField").value;
// if (textFieldValue !== "") {
//   paragraphElement.textContent = textFieldValue;
// }

// // Set paragraph text conditionally
// var specificWord = "specific";
// if (textFieldValue === specificWord) {
//   paragraphElement.textContent = textFieldValue;
// }

// // Set paragraph text based on length
// if (textFieldValue.length < 10) {
//   paragraphElement.textContent = textFieldValue;
// }

// // Chapter 52 (Manipulating Images and Text)
// // Event listener for making the sentence bold
// boldSentence.addEventListener("click", function () {
//   boldSentence.style.fontWeight = "bold";
// });

// // Event listener for image and text swapping
// imageElement.addEventListener("mouseover", function () {
//   imageElement.style.display = "none";
//   textElement.style.display = "block";
// });

// imageElement.addEventListener("mouseout", function () {
//   imageElement.style.display = "block";
//   textElement.style.display = "none";
// });

// // Event listener for changing background color on heading hover
// headingElement.addEventListener("mouseover", function () {
//   headingElement.style.backgroundColor = "black";
// });

// headingElement.addEventListener("mouseout", function () {
//   headingElement.style.backgroundColor = "lightgray";
// });

// // Event listener for underlining paragraph text on hover
// paragraphHover.addEventListener("mouseover", function () {
//   paragraphHover.style.textDecoration = "underline";
// });

// paragraphHover.addEventListener("mouseout", function () {
//   paragraphHover.style.textDecoration = "none";
// });

// // Chapter 52 (Swapping Images)
// var imageIndex = 0;
// var imageArray = ["image1.jpg", "image2.jpg", "image3.jpg"];
// var imageButton = document.getElementById("imageButton");
// var imageElement = document.getElementById("imageElement");

// imageButton.addEventListener("click",

//  function () {
//   imageElement.src = imageArray[imageIndex];
//   imageIndex = (imageIndex + 1) % imageArray.length;
// });
// ```

// // This code snippet covers chapters 41 to 60,
// // including while and do...while loops, and various DOM manipulation events. 
