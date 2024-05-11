// let num = 10;
// if(num >= 10){
//     console.log("true");
// }else {
//     console.log("false");
// }

// const num = [12, 222, 32,];
// for(let i =0; i < num.length; i++){
//     console.log(num[i]);
// }

const num = [10, 20, 30, 40, 50];

// const multiply = num.map((current, index, num) => 
//     console.log(current)
//     // console.log(index)
//     // console.log(num)
// )

const newArray = num.filter(c => c > 30)
console.log(newArray);