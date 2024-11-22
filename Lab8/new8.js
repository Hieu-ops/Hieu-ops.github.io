function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let operator = document.getElementById("operator").value;
    let num2 = parseFloat(document.getElementById("num2").value);
    const resultDiv = document.getElementById("result") ;
    const errorDiv = document.getElementById('error') ;
    let result;

    resultDiv.style,display = "None" ;
    errorDiv.style.display = "None" ;
    if (num1 === " " || num2 === " ") {
        showerror("Vui lòng nhập lại.")
        return ;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                showerror("Khong the chia het cho 0 ") ;
                return ;
            }
            result = (num1 / num2) .toFixed(2);
            result = parseFloat(result) ;
            break;
        default:
            result = "Invalid operator!";
            return ;
    }

    showResult(result) ;
}

function showerror(message) {
    const errorDiv = document.getElementById("error") ;
    errorDiv.textContent = message ;
    errorDiv.style.display = 'block' ;
}

function showResult(result) {
    const resultDiv = document.getElementById("result") ;
    resultDiv.textContent = `Result: ${result}` ;
    resultDiv.style.display = 'block' ;
}
