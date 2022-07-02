let operandOne = "";
let operator = "";
let operandTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

function onClickNumber(event) {
    // console.log(event.target.innerText);
    if(operator !== "") { // operator가 존재한다면
        if(operandTwo === "") $result.value = "";
        operandTwo += event.target.innerText;
    } else { // operator가 존재하지 않다면
        operandOne += event.target.innerText;
    }
    $result.value += event.target.innerText;
}

function onClickOperator(event) {
    if(operandOne !== "") { // operandOne이 입력되었으면
        operator = event.target.innerText;
        $operator.value = event.target.innerText;
    } else { // operandOne이 입력되지 않았다면
        alert("Please input number first.");
    }
}

function onClickCalculate() {
    if(operandTwo !== "") { // operandTwo 값이 존재한다면
        switch(operator) {
            case "+": $result.value = parseInt(operandOne) + parseInt(operandTwo); break;
            case "-": $result.value = parseInt(operandOne) - parseInt(operandTwo); break;
            case "×": $result.value = parseInt(operandOne) * parseInt(operandTwo); break;
            case "÷": $result.value = parseInt(operandOne) / parseInt(operandTwo); break;
            default: break;
        }
        $operator.value = "";
        operandOne = $result.value;
        operator = "";
        operandTwo = "";

    } else { // operandTwo 값이 존재하지 않다면
        alert("Please input or operator number first.");
    }
}

function onClickClear() {
    operandOne = "";
    operator = "";
    operandTwo = "";
    $operator.value = "";
    $result.value = "";
}

// number button
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

// operator button
document.querySelector("#plus").addEventListener("click", onClickOperator);
document.querySelector("#minus").addEventListener("click", onClickOperator);
document.querySelector("#divide").addEventListener("click", onClickOperator);
document.querySelector("#multiply").addEventListener("click", onClickOperator);

// calculate button (=)
document.querySelector("#calculate").addEventListener("click", onClickCalculate);

// calculator reset
document.querySelector("#clear").addEventListener("click", onClickClear);
