console.log("hello");
/*
Hey part 2 

We will be working with strings now :D

In today's lecture, we learned about strings and what they are. Did you know that JavaScript has specific methods available for all its data types, including strings? :D

Methods are actions that you can perform on types. 

Reminder: the types we worked on were numbers and strings.

Below, I will show you some examples of methods used on strings, and also show you one more thing about strings: they are indexable.

Indexable types are types that can create index entries.

Let's break it down below, since the methods we learn will rely on your understanding of what indexes are.

You can think of an index like a positive number line that starts at 0. The length of the number line is determined by the length of the variable you are working with.

Let's break it down: (insert someone dancing below)
// imagine you saw it and laughed

Let's take the variable below and apply a number line to it.

start ---------------> end
      0 1 2 3 4 5 6 7
      L e o n a r d o

Because the string type is indexable, we can access an individual character by indexing into it. 

The index of a character is correlated with the number it would be on the number line.

The value that goes inside the brackets [] is a number when indexing with string types.
*/

let myName = "Leonardo"; // start by declaring a variable 

// Say I wanted to grab the "L" in the variable myName. I would grab it like this ...


// Bracket notation is the special syntax that allows us to access the individual characters that make up a string. To access a character, we use the syntax someString[i], where i is the index of the character we want to access. - google 

let firstChar = myName[0]; // this is the syntax for indexing; there are two major ways but the one we will be using is called bracket notation

console.log(firstChar);// this will log "L" 

// Can you grab the last character below 

let lastChar; // Here I'm declaring the variable but not assigning it 

// Assign it the value below

lastChar = myName[myName.length - 1];

/*
So after you grabbed it, I want you to look into these two methods:

.length -> https://www.w3schools.com/jsref/jsref_length_string.asp

.indexOf -> https://www.w3schools.com/jsref/jsref_indexof.asp

Use these two methods to do the next two tasks ->

1. Can you use the .length method to grab the last char in myCrazyChar?

2. Use the indexOf method to find the index of the character "q" inside of myCrazyChar.
*/
const myCrazyChar = "adhbfakwhbflakwhberflahbfqlkawhbeflcjaewlkfjhcalwkejfhcakwehfjc"




