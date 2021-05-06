# Loops

### Introduction
* **You are learning programming fundamentals, not just Javascript**
* Control flow constructs exist in all industry-standard programming languages
* Ability to do something repeatedly is very useful
* There are three kinds of loops that matter to us:
  * **Condition**-controlled loops (while loop)
  * **Count**-controlled loops (for loop)
  * **Collection**-controlled loops (for / of, for / of)

---

# While Loops

* Loop construct that executes depending on a boolean value
* Repeats until the expression test evaluates to false
* Initializes a counter, tests an expression, executes a statement, increments, repeats

### Structure
```
initialize
while(test){
	statement
	increment
}
```
### Example
```
let x = 0
while (x < 10){
	console.log(x)
	x++
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
### Counting to 1 billion
```
console.time('example')
let x = 0
while (x < 1_000_000_000){
	x++
}
console.timeEnd('example')
// computer: 0.8 seconds
// me: 31 years
```
### Infinite loop
```
let x = 0
while (x < 10){
	console.log(x)
}
// 0 forever
// ctrl-C to kill process
```
---
# For Loop

* Loops that depend on a count condition
* More convenient than the while loop
* Does the same process as a while loop: initialize, test, execute and increment

### Structure
```
for (initialize; test; increment){
	statement
}
```
### Example
```
for (i = 0; i < 10; i++){
	console.log(i)
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
### Multiple variables
```
for (i = 0, j = 0; i<10 && j<10; i++, j++){
	console.log(i + j)
}
0, 2, 4, 6, 8, 10, 12, 14, 16, 18
```
### Accessing array elements using a for loop
```
const instructors = ["anna", "nick", "weston"]
for (i = 0; i<instructors.length; i++){
	console.log(instructors[i])
}
// anna
// nick
// weston

```
### Combining pointer value and array access
```
const instructors = ["anna", "nick", "weston"]
for (i = 0; i<instructors.length; i++){
	console.log(`array index ${i}: ${instructors[i]}`)
}
// array index 0: anna, array index 1: nick, array index 2: weston
```
### Combining `for` and `while` loops to move the pointer at different rates
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
---
# For / of loop

* Loop based on iterable objects. Examples of iterable objects are arrays and strings.

### Iterating over array
```
const instructors = ["anna", "nick", "weston"]
for (let name of instructors){
	console.log(name)
}
// anna, nick, weston
```

### Iterating over string
```
const name = "nick"
for (let letter of name){
	console.log(letter)
}
// n, i, c, k
```
### Not all objects are not iterable
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

### Turning Object data into Arrays for use with `for / of`

### `Object.keys()`
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
### `Object.values()`
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
### `Object.entries()`
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


# For / in loop

* Works with any object, not just iterable objects. Loops through object property names.

### Loops through property names
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
### Demonstrates that in an array, the index of the array elements are the property names
```
let instructors = ["anna", "weston", "nick"]

for (let name in instructors){
	console.log(name)
}
// 0, 1, 2
```