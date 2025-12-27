// Задание 7.7.1

// const person = {
//     name: 'Ilya',
//     age: 16
// }
// function printInfo(){
//     return `Name: ${this.name}, Age: ${this.age}`
// }

// const offer = printInfo.call(person, person.name, person.age)
// console.log(offer)


// Задание 7.7.2

// function calculate(a,b,operator){

//     if(operator==='+'){
//         return a+b
//     }else if(operator==='-'){
//         return a-b
//     }else if(operator==='/'){
//         return a/b
//     }

//     return 0

// }

// const obj = {
//     a:6,
//     b:3,
//     operator: null
// }

// console.log(calculate.apply(obj, [obj.a, obj.b, '-']))


//Задание 7.7.3

// const arrayWithObject = [
//     {name:'Ilya',age:1},
//     {name:'Ivan',age:12},
//     {name:'Alex',age:32},
//     {name:'John',age:23}
// ]

// const ageOnly = arrayWithObject.filter((person)=>person.age>18).map((person)=>person.age)
// console.log(ageOnly)

// const nameOnly = arrayWithObject.map((person)=>person.name)
// console.log(nameOnly)


//Задание 7.7.4

// const person = {
//     firstName: 'John',
//     lastName: 'Smith'
// }

// function SetFullName(fullName){
//     this.fullName=fullName
// }

// const SetPersonFullName = SetFullName.bind(person)
// SetPersonFullName('John Smith')
// console.log(person.fullName)


//Задание 7.7.5

// function func(array){
//     const currentArr = []
//     for(let i of array){
//         if(i%2===0){
//             currentArr.push(i)
//         }
//     }

//     return currentArr.sort((a,b)=> a-b)
// }

// console.log(func([1,2,8,4,11,23,6]))