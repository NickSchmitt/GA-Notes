# Iterator Array Methods

### Array Methods
* Javascript gives us 32 functions to operate on arrays. These functions are called array methods.
* Popular examples:
  * `push("hello")`
  * `slice(0, 2)`
  * `sort()`
  * `join("")`
* Some of the most powerful methods are **iterator** methods.
* Some examples:
  * `forEach(num => console.log(num * 10))`
  * `map(num => num * 10)`
  * `filter(num => num !== 10)`
  * `reduce((sum, num) => sum + num)`

---
## Array Iterator Methods

* Iterator method pattern:
  1. Array method takes a function you give it.
  2. Loops over an array.
  3. Calls your function on each array element.

* Some iterator methods:
  * Return nothing (forEach)
  * Return a new array (map, filter)
  * Return a single value (reduce)

Question: how does the above process turn into this:
```
arr.forEach(num => console.log(num*10))

arr.map(num => num * 10)

arr.filter(num => num !== 10)

arr.reduce((sum, num) => sum + num)
```
---

## Functions Recap

Function Declaration
```
function addTen(num){
	return num + 10
}
```
Function Expression
```
function(num){
	return num + 10
}
```
Arrow Functions
```
let addTen = (num) => {
	return num + 10
}

// Arrow functions don't need `()` if there's only one parameter

let addTen = num => return num + 10

//Arrow functions don't need `return` if there's only one statement and it's a `return` statement

let addTen = num => console.log(num+10)
let addTen = num => num+10
```
---
## Arrow functions give us a clean way to pass functions to other functions
```
arr.map(function addTen(num){
	return num+10
})

arr.map(num => num+10)
```
---
## `forEach()`

* Executes a function it recieves on each array element
* No return value, just executes function

#### forEach Basic example
* For each name in the array, print a string with the name interpolated into it.
```
let arr = ["Nick", "Anna", "Weston"]
arr.forEach(person => console.log(`hello, ${person}!))

// Same as
for(let person of arr){
	console.log(`hello, ${person}!`)
}
```
### forEach DOM example

* For each name in the array, append an h1 element to the HTML body with the name as the h1's text.
```
let arr = ["Nick", "Anna", "Weston"]
let body = document.querySelector("body")
arr.forEach(person => {
	let h1 = document.createElement("h1")
	h1.innerText = person
	body.appendChild(h1)
})
```
### Loop Version
```
for(let person of arr){
	let h1 = document.createElement("h1")
	h1.innerText = person
	body.appendChild(h1)
}
```
---
## `map()`

* "Maps" each array element to a new element in a new array
* Returns the new array

### map Basic Example
* Return a new array with each name mapped to a string with that name in it. Assign a variable to the new array.
```
let arr = ["Nick", "Anna", "Weston"]
let greetingArr = arr.map(name => `Hello, ${name}`)

// same as
for(const name of arr){
	greetingArr.push(`Hello, ${name}`)
}
```
### map Data Example
* Return an array of employee locations
```
let employees = [
	{
		name: "Nick",
		role: "IA",
		location: "Seattle"
	},
	{
		name: "Anna",
		role: "Lead",
		location: "Seattle"
	},
	{
		name: "Weston",
		role: "IA",
		location: "Los Angeles"
	}
]

let cities = employees.map(x => x.location)

// same as:
for(const person of employees){
	cities.push(employees.location)
}
```
---
## `filter()`
* Tests each element, "filters out" false elements, keeps true elements.
* Returns a new array of only the elements that passed the test.

### filter Basic Example
```
const names = ["Nick", "Anna", "Weston"]
let shortNames = arr.filter(name => name.length < 5)

// same as:
for(let name of names){
	if(name.length < 5){
		shortNames.push(name)
	}
}
```
### filter Data Example
```
let losAngelesEmployees = employees.filter(x => x.location === "Los Angeles")

// same as:
for (let employee of employees){
	if (employee.location === "Los Angeles"){
		losAngelesEmployees.push(employee)
	}
}
```
---
## `reduce()`
* "Reduces" the whole array to a single value
* Starts with an initial value that changes with each array element

### reduce Basic Example
* Add all elements of an array together
```
const nums = [1, 2, 3]
const sum = nums.reduce((sum, num) => sum + num, 0)

// same as
let sum = 0
for(let num of nums){
	sum = sum + num
}
```
### reduce Data Example
* Take an array of employees and create an object that counts how many employees of each role there are.
```
// Initial Array of employee data
[
	{name: "Nick", role: "IA"},
	{name: "Anna", role: "Lead"},
	{name: "Weston", role: "IA"}
]
```
```
// The new counting object we want to build
{IA: 2, Lead: 1}
```
```
const roleCount = employees.reduce((newObj, person) => {
    if (newObj[person.role] == null) {
        newObj[person.role] = 1
    } else {
        newObj[person.role]++
    }
    return newObj
}, {})
```