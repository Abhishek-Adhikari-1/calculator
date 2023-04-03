document.querySelectorAll(".number").forEach((number)=>{
    number.addEventListener('click', ()=>{
        var num = number.getAttribute('value');
        var screen = document.getElementById("query");
        screen.innerHTML += num;
        // screen.setAttribute('value', screen.innerHTML);
        if(num == "ac"){
            screen.innerHTML = "";
        }
    });
});
function calculation(){
    var ans = document.querySelector(".ans");
    var str = document.getElementById('query').innerText;
    let num = str.split(/[+-/x]+/);
    let operator = str.split(/[0-9]+/);
    var numberArray = num.map(Number);
    let operatorArray = operator.slice(1,-1);
    let answer = 0;
}





// function calculation(){
//     var ans = document.querySelector(".ans");
//     var str = document.getElementById('query').innerText;
//     let num = str.split(/[+-/x]+/);
//     let operator = str.split(/[0-9]+/);
//     var numberArray = num.map(Number);
//     let operatorArray = operator.slice(1,-1);
//     let answer = 0;

//     operatorArray.forEach((symbol,index)=>{
//         if(symbol == '/'){
//             console.log("div ope" +operatorArray);
//             console.log("div num"+numberArray);
//             let divide = numberArray[index] / numberArray[index+1];
//             numberArray.splice(index,2,divide);
//             console.log("div num"+numberArray);
//             operatorArray.splice(index,1);
//             console.log("div ope" +operatorArray);
//         }
//     });
//     operatorArray.forEach((symbol,index)=>{
//         if(symbol == 'x'){
//             console.log("mul ope" +operatorArray);
//             console.log("mul num"+numberArray);
//             let multiply = numberArray[index] * numberArray[index+1];
//             numberArray.splice(index,2,multiply);
//             console.log("mul num"+numberArray);
//             operatorArray.splice(index,1);
//             console.log("mul ope" +operatorArray);
//         }
//     });
//     operatorArray.splice(1,0,'+');
//     operatorArray.forEach((symbol,index)=>{
//         if(symbol == '+' && operatorArray[index+1] == '+'){
//             let add = numberArray[index] + numberArray[index+1];
//             numberArray.splice(index,2,add);
//             console.log("add num"+numberArray);
//             operatorArray.splice(index,1);
//             console.log("add ope" +operatorArray);
//         }
//     });
//     operatorArray.forEach((symbol,index)=>{
//         if(symbol == '+' && operatorArray[index+1] == '-'){
//             let subtract = numberArray[index] - numberArray[index+1];
//             let sub = Math.abs(subtract);
//             const deleted = numberArray.splice(index,2,sub);
//             console.log("sub num"+numberArray);
//             if(deleted[0] < deleted[1])
//                 operatorArray.splice(index,1);
//             else if(deleted[0] > deleted[1])
//                 operatorArray.splice(index+1,1);
//             console.log("sub ope" +operatorArray);
//         }
//     });
//     operatorArray.forEach((symbol,index)=>{
//         if(operatorArray[index+1] == '+'){
//             let add = numberArray[index] + numberArray[index+1];
//             console.log("add num"+add);
//         }
//         else if(operatorArray[index+1] == '-'){
//             let sub = numberArray[index] - numberArray[index+1];
//                 console.log("sub num"+sub);
//         }
//     });
//     // operatorArray.forEach((symbol,index)=>{
//     //     if(symbol == '-'){
//     //         console.log("sub ope" +operatorArray);
//     //         console.log("sub num"+numberArray);
//     //         let sub = numberArray[index] - numberArray[index+1];
//     //         numberArray.splice(index,2,sub);
//     //         console.log("sub num"+numberArray);
//     //         operatorArray.splice(index,1);
//     //         console.log("sub ope" +operatorArray);
//     //     }
//     // });
//     console.log(operatorArray);
//     console.log(numberArray);
//     ans.innerHTML = answer;
// }

// // for(i = 1; i < numberArray.length; i++){
// //     for(j = i-1 ; j < i; j++){
// //         let operation = numberArray[j] + numberArray[j+1];
// //         answer = answer + operation;
// //     }
// // }