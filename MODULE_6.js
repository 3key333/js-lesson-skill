//Задание 6.6.1

// let word = 'Довод'
// let wordReverse = ''
// for(let i=word.length-1; i>=0; i--){
//    wordReverse+=word[i]
// }
// if(word.toLowerCase()===wordReverse.toLowerCase()){
//     console.log(`Слово ${word} является палиндромом`)
// }else{
//     console.log(`Слово ${word} не является палиндромом`)
// } 

//Задание 6.6.2

// const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
// const setCollection = new Set(arr);
// const newArr = [];
// for(let i of setCollection){
//     newArr.push(i)
// }console.log(newArr)

//Задание 6.6.3

// let userNum = +prompt(`введие любое число`)
// let userSum = []
// for(let i = 0; i<=userNum; i++){
//     userSum.push(i)
// }console.log(userSum)

//Задание 6.6.4

// for(let i = 0; i<=0; i++){
//     for(let k = 0; k<=0; k++){
//         for(let j  = 1; j<=3; j++){
//             if(i===0&&j===1){
//                i='x'
//             }else if(j!==2){
//                 j='x'
//             }else{
//                 j=0
//             }
            
//             console.log(i,k,j)
//         }
//     }
// }


//Задание 6.6.5
// const obj = {
//     some: 'some',
//     dom: 'text',
//     arr: [1, 2, 3, 4, 5],
//     tom: 'there'
// };

// const arrValues = []
// for(let key in obj){
//     if(Array.isArray(obj[key])){
//         for(let i of obj[key]){
//             arrValues.push(i)
//         }
        
//     }
//     arrValues.push(obj[key])
//     for(let n of arrValues){
//         if(Array.isArray(n)){
//             arrValues.pop()
//         }
//     }
// }
// console.log(arrValues)

