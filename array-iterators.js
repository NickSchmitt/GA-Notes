// *** Array Iterator Methods *** \\

// function addTen(num){
// 	return num+10
// }

let arr = ["Nick", "Anna", "Weston"]

// let x = arr.forEach(person => {
// 	newArr.push(person)
// })
let newArr = arr.map(person => `Hello ${person}`)

// console.log(newArr)

// Map Data Example

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

// let cities = employees.map(employee => employee.location)

// console.log(cities)

// *** Filter ***

// let names = ["Nick", "Anna", "Weston"]

// let shortNames = names.filter(name => name.length < 5)

// console.log(shortNames)

// let losAngelesEmployees = employees.filter(employee => employee.location === "Los Angeles")

// console.log(losAngelesEmployees)

// *** Reduce ***

let nums = [1, 2, 3]
let sum = nums.reduce((sum, num) => sum + num, 0)

// 0
// 1
// 3
// 6

console.log(sum)