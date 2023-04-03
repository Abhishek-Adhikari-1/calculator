let calculatorButtons = [
    {
        name: "shift",
        symbol: "⇧",
        formula: "",
        type: "toggle"
    }, {
        name: "ln",
        symbol: "ln",
        formula: "",
        type: "operator"
    }, {
        name: "fact",
        symbol: "𝑥!",
        formula: "",
        type: "fact"
    }, {
        name: "delet",
        symbol: "DEL",
        formula: "",
        type: "backspace"
    }, {
        name: "clear",
        symbol: "AC",
        formula: "",
        type: "backspace"
    }, {
        name: "num7",
        symbol: "7",
        formula: "7",
        type: "number"
    }, {
        name: "num8",
        symbol: "8",
        formula: "8",
        type: "number"
    }, {
        name: "num9",
        symbol: "9",
        formula: "9",
        type: "number"
    }, {
        name: "square",
        symbol: "𝑥²",
        formula: "**2",
        type: "power"
    }, {
        name: "sqrt",
        symbol: "√𝑥",
        formula: "Math.sqrt(",
        type: "root"
    }, {
        name: "num4",
        symbol: "4",
        formula: "4",
        type: "number"
    }, {
        name: "num5",
        symbol: "5",
        formula: "5",
        type: "number"
    }, {
        name: "num6",
        symbol: "6",
        formula: "6",
        type: "number"
    }, {
        name: "multiply",
        symbol: "×",
        formula: "*",
        type: "operator"
    }, {
        name: "divide",
        symbol: "÷",
        formula: "/",
        type: "operator"
    }, {
        name: "num1",
        symbol: "1",
        formula: "1",
        type: "number"
    }, {
        name: "num2",
        symbol: "2",
        formula: "2",
        type: "number"
    }, {
        name: "num3",
        symbol: "3",
        formula: "3",
        type: "number"
    }, {
        name: "sub",
        symbol: "˗",
        formula: "-",
        type: "operator"
    }, {
        name: "add",
        symbol: "+",
        formula: "+",
        type: "operator"
    }, {
        name: "num0",
        symbol: "0",
        formula: "0",
        type: "number"
    }, {
        name: "dot",
        symbol: ".",
        formula: ".",
        type: "number"
    }, {
        name: "random",
        symbol: "#",
        formula: "",
        type: "number"
    }, {
        name: "calculate",
        symbol: "=",
        formula: "=",
        type: "calculate"
    },
];

var inputElement = document.querySelector(".input");
var outputOperationElement = document.querySelector(".operation");
var outputResult = document.querySelector(".result");
const btnsColumn = 5;
let addBtns = 0;

calculatorButtons.forEach(button => {
    if (addBtns % btnsColumn == 0) {
        inputElement.innerHTML += `<div class="row"></div>`;
    }
    var row = document.querySelector(".row:last-child");
    row.innerHTML += `<button id="${button.name}">${button.symbol}</button>`;
    addBtns++;
});
// document.getElementById('delet').innerHTML = `<img src="backspace.png" id="backspace" alt="DEL" />`;
inputElement.addEventListener('click', event => {
    const target = event.target;
    calculatorButtons.forEach(button => {
        if (button.name == target.id) calculator(button);
    });
});
let data = {
    operation: [],
    formula: [],
}
function calculator(button) {
    // outputResult.innerHTML = "ㅤ";
    if (button.type == "power") {
        data.operation.push("²");
        data.formula.push(button.formula);
        outputOperationElement.innerHTML = data.operation.join("");
    }
    else if (button.type == "number") {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
        outputOperationElement.innerHTML = data.operation.join("");
    }
    else if (button.type == "operator") {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
        outputOperationElement.innerHTML = data.operation.join("");
    }
    else if (button.type === "root" && button.name == "sqrt") {
        data.operation.push("√");
        data.formula.push(button.formula);
        outputOperationElement.innerHTML = data.operation.join("");
    }
    else if(button.name == "fact" && button.type == "fact"){
        data.operation.push("!");
        var val = 1;
        for(var i = data.formula[data.formula.length - 1]; i >=1 ; i--){
            val *= i;
        }
        data.formula.pop();
        data.formula.push(val);
        outputOperationElement.innerHTML = data.operation.join("");
    }
    else if (button.type == "calculate") {
        outputResult.innerHTML = "";
        let formula = data.formula.join('');
        if (formula) {
            console.log(formula)
            let result = eval(formula);
            data.operation = [result];
            data.formula = [result];
        }// console.log(((data.operation.slice()).map(String))[0].length);
        const obj = new Typed(".result", {
            strings: [""],
            typeSpeed: 300,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: false,
            backDelay: 0,
            loop: false,
            loopCount: 1,
            showCursor: false,
            cursorChar: "",
            autoInsertCss: true,
            contentType: "html",
        });
        obj.strings[0] = data.operation.join("");
    }
    else if (button.type == "backspace") {
        if (button.name === "delet") {
            data.operation.pop();
            data.formula.pop();
            outputOperationElement.innerHTML = data.operation.join("");
            outputResult.innerHTML = "";
        }
        else if (button.name === "clear") {
            data.operation = [];
            data.formula = [];
            outputOperationElement.innerHTML = "";
            outputResult.innerHTML = "";
        }
    }
}
window,setInterval(function auto(){
    const flavoursContainer = document.querySelector(".operation");
    const flavoursScrollWidth = flavoursContainer.scrollWidth;
    let i = 0;
    while (i < flavoursScrollWidth) {
        flavoursContainer.scrollTo(i, 0);
        i++;
    }
},50);
// var box = $(".output"), x;
// $(".operation").click(function() {
//     outputResult = "dsd";
//     if ($(this).hasClass("arrow-right")) {
//         x = ((box.width() / 2)) + box.scrollLeft();
//         box.animate({
//         scrollLeft: x,
//         })
//     } else {
//         x = ((box.width() / 2)) - box.scrollLeft();
//         box.animate({
//         scrollLeft: -x,
//         });
//     }
// });
// if (button.type === "toggle") {
//     var but = document.getElementById("shift");
//     if (button.symbol == "⇧") {
//         but.innerHTML = "⇪";
//         button.symbol = "⇪";
//         toggle();
//     }
//     else {
//         but.innerHTML = "⇧";
//         button.symbol = "⇧";
//         console.log("icon changed to ⇧");
//     }
// }
// function toggle() {
//     console.log("icon changed to ⇪");
// }