# javascript-bootcamp

## 1. Javascript Alerts:-
Javascript can run staright into Web Browser, to do that we just simply have to open developer tools and in those tools find console and start writing javascript. Let's begin with this code: `alert("hello");`, what this code will do upon run is, it will open an alert in the browser, and the parameter or the prompt that we passed will show to represt what is the message of the alert. To write multiline code in the console since you can write on line at a time because it will run the script upon enter what you can do is use this combination `Shift + Enter` and this will let you antoher line of code, even after termination of the code. But this can be tedious if you want to run or test some code in Javascript on browser, so there is a solution in the tools, Go to Tab called `Sources` and find `Snippets` in that tab, there you can create a new file ending with `.js` and put your code there, and to run it, there is a play button or it will say run snippet click on that to run your JS file.

## 2. Data Types:-
As any other programming language Javascript also have data types that gives a program meaning. The first data type is String, string is always encoded or stays in between quotation marks it could be either "some string" or 'string'. This is just a text if it is outside any meaningful function or anything that is defined or can be defined by Javascript, but when it is coded inside a function it becomes a string, like the function we saw earlier called `alert('some string')`. There are also numbers, boolean (true, false). Lets take a look at this in code, `2+3;` or `alert(2+3);`. There is also one more function that helps us to know what type of data we are dealing with. For example this will return 'number' `typeof(123)`, this will return 'string' `typeof("Hello")` , and this will return 'boolean' `typeof(true)`.

## 3. Javascript Variables:-
There is an in-built function called `prompt` which takes some prompt as a parameter and opens a pop-up where we can enter some data, like this `prompt("What is your Name");` and it return the value that is provided in the text area. But what happened is it returns that data but the question rises where it is stored, or is it stored? The answer is yes and no, but for now it is not stored yet. To make our program remember the data we use variables with the keyword `let`, then we create a container to store that data which is the name of the variable and then we use `=` to assign the value after it like a string, number, or boolean. Here is the example: ` let myName = "Computer";`. And now whenever we refer to the variable `myName` it will know what we are referring to. Now we can use that `prompt` function to receive and store values in an variable like this: `let myName = prompt("What is your name");` and whenever we will refer to this variable we will receive the value we provided in the prompt.

### Exercise 1:-
Given an exisiting code below, can your write some code so that their values are switched around?
```
let a = "3";
let b = "8";
```
So when the code runs the output should be ` a is 8` and `b is 3`. Do not change the code:-
```
function test()
{
    let a = "3";
    let b = "8";
    /* Write Your Code Here */


    /* Write Your Code Here */
    console.log("a is "+ a);
    console.log("b is "+ b);

}
test()
```
Here is the solution:-
```
let c = b
b = a
a = c
```