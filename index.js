/*
Hello apprentice, we will be diving deeper into types and exploring a little bit of type coercion in the extended lab.

Follow the prompts and then click the link to read about it.
*/


/*
Since today, we learned that we can assign numbers to variables, I want you to recreate this equation using variables as placeholders

-----------------------------------------------------------------------
example:
*/

// Recreate this math problem with variables: one plus two. The sum should be 3.

let x = 1; // First, let me assign the number to a variable.

let y = 2; // Now, let me assign the number 2 to a variable.

let myTotal = x + y; // I'm going to use operators on both my variables to get the total.

console.log(myTotal); // This will show the sum of one and two.

/*
-----------------------------------------------------------------------

You can use a calculator to confirm it's correct. Below, do the same but with this math problem:
1. The sum of 5 and 2 multiplied by 4, divided by 2.
2. Save the sum to a variable called sum.
3. After, console.log sum.

You should see 14 in the console.

Remember, you cannot have the same variable declared twice in the same scope (the scope is a concept in JS that we won't get into right now, but for now, the scope is this JS file).

I suggest just commenting out a section when you move to another part of the code so that you can reuse variable names.

You can make a comment by placing // in front of the code.
*/

let num=5;//
let num2=2;//
let sum = num + num2;//
let multi = sum * 4;//
let div = multi/2;//


/*
In JavaScript, there are many ways to perform operations if you want to flex those JS skills.

Check out this link to learn a little more about operators; this will be your first intro to syntactic sugar.

Syntactic sugar refers to certain language features in programming that make the code easier to read or write. It's like adding a bit of sweetness to your code syntax to make it more pleasant to work with. - google

https://www.w3schools.com/js/js_operators.asp

Below, I will demo two ways of incrementing.
*/

let myNum = 1; // Always start by declaring your variable.
myNum++; // What the ++ does is increase myNum by 1.
console.log(myNum); // This will log 2 since we increased it by one.

// This is the other way.

let myNumber = 1; // Always start by declaring your variable. (Notice that I'm not using the same variable name.)

// This syntax is the same as doing -> myNumber = MyNumber + 5.
myNumber += 9;

console.log(myNumber); // This will log 6 since we added 5 to the variable.
// Below, play around with your own examples.


// Once you are done, follow this link to learn how to run another file since we will be moving on to strings in the string js file.
// https://ask.replit.com/t/run-a-replit-apart-from-main/18763


