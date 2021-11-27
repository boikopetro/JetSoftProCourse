//submit homework to the repository that you created for git lecture


// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64
console.log("task 1")

function exponentComputer(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * exponentComputer(base ,exponent-1);
    }
}

console.log(exponentComputer(8,2))

// 2. Write functions min and max that will find min and max number in array using apply
console.log("task 2")

const arr = [2, 4, 5, 77, 16, -5, 9999]

const minNumber = arr => console.log(Math.min.apply({}, arr))
minNumber(arr)

const maxNumber = arr => console.log(Math.max.apply({}, arr))
maxNumber(arr)

// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, branch and color. 
//    Please make examples for three different cars
console.log("task 3")


function displayCarDetails (ownerName) {
  console.log(`car registration number: ${this.registrationNumber}, branch: ${this.branch}, color: ${this.color} `)
}

const tesla = {
  registrationNumber: 123,
  branch: 'Ukraine',
  color: 'black'
}
const lexus = {
  registrationNumber: 456,
  branch: 'UK',
  color: 'red'
}
const bmw = {
  registrationNumber: 789,
  branch: 'USA',
  color: 'white'
}
displayCarDetails.call(tesla, "Ivan")
displayCarDetails.bind(lexus, "Anna")()
displayCarDetails.apply(bmw, ["Noa"])


// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 
//
console.log("task 4")

function greet (person) {
  if (person.name ==  'amy' ) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
const amy = {name: 'amy'}
console.log(greet(amy))

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)
console.log("task 5")


for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

for (var i = 0; i < 4; i++) {
    setTimeout(function (j) {
        return function () {
            console.log(j)
        }
    }(i), 0)
}
