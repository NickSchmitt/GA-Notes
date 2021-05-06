# Loops

* Ability to do something repeatedly is very useful
* There are three kinds of loops that matter to us:
  * **Condition**-controlled loops (while loop)
  * **Count**-controlled loops (for loop)
  * **Collection**-controlled loops (for / of, for / of)

## While Loops

* Loop construct that executes depending on a boolean value
* Repeats until the expression test evaluates to false
* Initializes a counter, tests an expression, executes a statement, increments, repeats

structure
```
initialize
while(test){
	statement
	increment
}
```
example
```
let x = 0
while (x < 10){
	console.log(x)
	x++
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
infinite loop
```
let x = 0
while (x < 10){
	console.log(x)
}
// 0 forever
// ctrl-C to kill process
```

## For Loop

* Loops that depend on a count condition
* More convenient than the while loop
* Does the same process of initialize, test, execute and increment
```
for (initialize; test; increment){
	statement
}
```

```
for (i = 0; i < 10; i++){
	console.log(i)
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

## Fizz Buzz
Implement Fizz Buzz. Loop from 1 to 100. If the number is divible by both 3 and 5, print "fizzbuzz". Otherwise, if the number if divisible by 3, print "fizz", or, if the number is divisible by 5, print "buzz". If none of the above are true, print the number. This is a very common interview question!

## Fizz Buzz While Loop

```
let i = 1
while (i <= 100){
	if (i % 15 == 0){
		console.log("fizzbuzz")
	} else if (i % 3 == 0){
		console.log("fizz")
	} else if (i % 5 == 0){
		console.log("buzz")
	} else {
		console.log(i)
	}
}
```
## Fizz Buzz For Loop
```
for (let i = 1; i <= 100; i++){
	if (i % 3 == 0 && i % 5 == 0){
		console.log("fizzbuzz")
	} else if (i % 3 == 0){
		console.log("fizz")
	} else if (i % 5 == 0){
		console.log("buzz")
	} else {
		console.log(i)
	}
}
```

## Playing with Loops
Multiple variables
```
for (i = 0, j = 0; i<10 && j<10; i++, j++){
	console.log(i + j)
}
0, 2, 4, 6, 8, 10, 12, 14, 16, 18
```
Accessing array elements with a for loop
```
const instructors = ["anna", "nick", "weston"]
for (i = 0; i<instructors.length; i++){
	console.log(instructors[i])
}
// anna
// nick
// weston

```
Combining `i` and `instructors[i]`
```
const instructors = ["anna", "nick", "weston"]
for (i = 0; i<instructors.length; i++){
	console.log(`array index ${i}: ${instructors[i]}`)
}
// array index 0: anna, array index 1: nick, array index 2: weston
```
Combining `for` and `while` loops to move the pointer at different rates
```
const numbers = [1,1,1,2,2,3,3,1]
for (i = 1; i<x.length; i++){
	console.log(numbers[i])
	while(numbers[i] == numbers[i-1]){
		i++
	}
}
// 1, 2, 3, 1
```

## For / of loop

Loop based on iterable objects. Examples of iterable objects are arrays and strings.

Iterating over array
```
const instructors = ["anna", "nick", "weston"]
for (let name of instructors){
	console.log(name)
}
// anna, nick, weston
```

Iterating over string
```
const name = "nick"
for (let letter of name){
	console.log(letter)
}
// n, i, c, k
```
Objects are not iterable
```
const team = {
	lead: "anna",
	IA1: "weston",
	IA2: "nick"
}

for (let member of team){
	console.log(member)
}
// TypeError: team is not iterable
```

## Turning Object data into Arrays for use with `for / of`

`Object.keys()`
```
const team = {
	lead: "anna",
	IA1: "weston",
	IA2: "nick"
}

for (let member of Object.keys(team)){
	console.log(member)
}
// lead, IA1, IA2
```
`Object.values()`
```
const team = {
	lead: "anna",
	IA1: "weston",
	IA2: "nick"
}

for (let member of Object.values(team)){
	console.log(member)
}
// anna, weston, nick
```
`Object.entries()`
```
const team = {
	lead: "anna",
	IA1: "weston",
	IA2: "nick"
}

for (let member of Object.entries(team)){
	console.log(member)
}
// ['lead', 'anna'], ['IA1', 'weston'], ['IA2', 'nick']

for (let member of Object.entries(team)){
	console.log(`${member[1]} is ${member[0]}`)
}
// anna is lead, weston is IA1, nick is IA2

```


## For / in loop

Works with any object, not just iterable objects. Loops through property names.

Loops through property names
```
const team = {
	lead: "anna",
	IA1: "weston",
	IA2: "nick"
}

for (let role in team){
	console.log(role)
}
// lead, IA1, IA2
```
Demonstrates that in an array, the index of the array elements are the property names
```
let instructors = ["anna", "weston", "nick"]

for (let name in instructors){
	console.log(name)
}
// 0, 1, 2
```


