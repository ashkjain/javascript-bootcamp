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
So when the code runs the output should be `a is 8` and `b is 3`. Do not change the code:-
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

## 4. Naming and Naming Conventions for Javascript Variables:-
When naming variables we have to be careful what name we are using, Javascript does not care what is the name of the variable although there are few rules, but if your variable name has no meaning, you might not be able to get most out of it. For example:
```
let myName = "Ashish";
let auibfuiasdbf = "Ashish";
```
Both variables are perfectly fine, but what is the difference between these two, first one is meaningful and refers to the name, but second one has no meaning but it is a perfectly fine variable. Our variables should have meaning so we can realte and make our program more useful.
Apart from this there are few more rules you cannot call your variable as a reserved words, like:`var`,`let`,`const`. Another rule, your variable name cannot begin with number, like: `1name`, or `324`. More rules, you cannot have a space between your variables like: `my name` this would be illegal, but what you can do instead, you can put underscore `_` instead like this: `my_name`. Last but not least, a variable can only contains, letters, numbers, dollar sign, and an underscore, here is the example: `my_name`, `his_name1`, `_yourMoney123$`.

## Quiz 1:
* Q.1: Which variable is not valid in Javascript?
a: `var myage = 12;`
b: `var my age = 12`
c: `var myAge = 12`
d: `var my_age = 12`

* Q.2: Which is the best name for a Javascript variable that will represent student 1's score?
a: `1studentScore`
b: `s1Score`
c: `studenonescore`
d: `student1Score`

* Answer: 1: b, 2: d


## 5. String Concatenation