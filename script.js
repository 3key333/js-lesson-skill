//задание 5.10.1

// const promptTextDegree = +prompt(`введите любое число`)
// alert(`ваше исходное число равно ${promptTextDegree}\n
// квадрат вашего числа равен ${promptTextDegree**2}\n
// куб вашего чисда равен ${promptTextDegree**3}`)


//задание 5.10.2


// const promptTextPromo = prompt(`введите промокод`)
// if(promptTextPromo=='Скидка'){
//     alert('промокод применен')
// }else{
//     alert('промокод не действителен')
// }


//задание 5.10.3


// const promptTextName = prompt('как вас зовут ?')
// const promptTextAge = +prompt('какой у вас год рождения ?')
// const todayYear = 2025
// if(+promptTextAge){
//     alert(`${promptTextName} ${2025-promptTextAge}`)
// }else{
//     alert(`год должен быть числом !`)
// }


//задание 5.10.4


// const firstAge = 'год'
// const secondAge = 'года'
// const thirdAge = 'лет'
// const promptNameInfo = prompt(`как вас зовут ?`)
// const promptAgeInfo = +prompt(`сколько вам лет ?`)
// if(+promptAgeInfo%10==1){
//     alert(`${promptNameInfo} ${promptAgeInfo} ${firstAge}`)
// }
// else if(+promptAgeInfo%10>=2 && +promptAgeInfo%10<5){
//     alert(`${promptNameInfo} ${promptAgeInfo} ${secondAge}`)
// }
// else if(+promptAgeInfo%10>4){
//     alert(`${promptNameInfo} ${promptAgeInfo} ${thirdAge}`)
// }
// if(isNaN(promptAgeInfo)){
//     alert(`год это число!`)
// }


//задание 5.10.5


// const clientAge = +prompt(`введите ваш возраст`)
// if(clientAge<18){
//     alert(`вы не можете взять кредить пока\n
//         вам не исполниться 18 лет`)
// }else{

//     if(clientAge>=18&&clientAge<=21){
//     alert(`мы можем вам выдать кредит до 50000\n
//         введите сумму кратную 1000`)
//     }

//     else if(clientAge>=22&&clientAge<=35){
//     alert(`мы можем вам выдать кредит до 400000\n
//     введите сумму кратную 1000`)
//     }

//     else if(clientAge>=36&&clientAge<=65){
//     alert(`мы можем вам выдать кредит до 1000000\n
//     введите сумму кратную 1000`)
//     }

//     const clientSum = +prompt(`введите сумму кредита`)
//     if(clientSum%1000!==0){
//         alert(`ваша сумма не кратна 1000`)
//     }else{
//         alert(`видимо кредит вам не нужен`)
//     }

// }


//задание 6.1.2


// let x
// x=
// if(typeof x === 'number'){
//     console.log('x-число')
// }else if(typeof x ==='string'){
//     console.log('x-строка')
// }else if (typeof x === 'boolean'){
//     console.log('x-логическй тип')
// }
// else{
//     console.log('x-не определен')
// }


//задание 6.1.3


// let x; let y; y=2; y%2===0 ? x='четное' : x='не четное'; console.log(x)


// задание 6.2.3

// let text = 0
// while(text<=7){
//     if(text===2) {continue;}
//     console.log(text)
//     text=text+1
// }


//  задание 6.2.12

// for(i=0;i<=100; i+=1){

//     if(i%3===0){
//         console.log(i)
//     }
// }


// задание 6.2.13

// let sum = 0;
// let number = 1;
// while (number <= 10) {
//     sum += number;
//     number += 1;
//     console.log(`${sum}`)
// }


//задание 6.2.14

// let leftToRight = 'Привет, мир!'
// let rightToleft = ''
// for(let a = leftToRight.length-1; a>=0; a-=1){
//     rightToleft+=leftToRight[a]
// }console.log(rightToleft)



