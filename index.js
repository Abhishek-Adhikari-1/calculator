let calculatorButtons = [
    {
        name: "shift",
        symbol: "⇧",
        formula: "",
        type: "toggle"
    }, {
        name: "ln",
        symbol: "ln",
        formula: "Math.log10(",
        type: "log"
    }, {
        name: "fact",
        symbol: "𝑥!",
        formula: "",
        type: "operator"
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
        type: "operator"
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
    if (button.type == "number") {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
            outputOperationElement.innerHTML = data.operation.join("");
        }
        else if (button.type == "operator") {
                data.formula.forEach((vall,indexx)=>{
                    if(vall === "Math.sqrt(" || vall === "Math.log10("){
                        console.log(val)
                        data.operation.push(")");
                        data.formula.push(")");
                    }
                })
            // }
            if (button.name == "square") {
                data.operation.push("²");
                button.symbol = "";
            }
            data.operation.push(button.symbol);
            data.formula.push(button.formula);
            outputOperationElement.innerHTML = data.operation.join("");
        }
    else if(button.type == "log"){
        data.operation.push(button.symbol+"(");
        data.formula.push(button.formula);
        outputOperationElement.innerHTML = data.operation.join("");
    }
    else if (button.type === "root" && button.name == "sqrt") {
        data.operation.push("(√");
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
        data.formula.forEach((vall)=>{
            if((vall === "Math.sqrt(" && vall !== ")") || (vall === "Math.log10(" && vall !== ")")){
                data.operation.push(")");
                data.formula.push(")");
            }
        })
        let formula = data.formula.join('');
        if (formula) {
            console.log(formula)
            let resultfloat = eval(formula);
            let result = parseFloat(resultfloat).toFixed(2);
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