<script>
    document.addEventListener("DOMContentLoaded", function() {
        const buttons = document.querySelectorAll(".but, .but1");
        const result = document.getElementById("result");
        let currentInput = '';
        let operator = '';
        let operand1 = null;

        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const value = button.textContent;

                if (!isNaN(value) || value === '.') { // If it's a number or decimal point
                    currentInput += value;
                    result.textContent = currentInput;
                } else if (value === 'Ac') { // All clear
                    clearAll();
                } else if (value === '+/-') { // Toggle sign (not implemented)
                    // Implement toggle sign functionality if needed
                } else if (value === 'per') { // Percentage (not implemented)
                    // Implement percentage functionality if needed
                } else if (value === '%') { // Percentage (not implemented)
                    // Implement percentage functionality if needed
                } else { // Operator or =
                    if (operator && operand1 !== null) {
                        operand1 = calculate(operand1, parseFloat(currentInput), operator);
                        result.textContent = operand1;
                    } else {
                        operand1 = parseFloat(currentInput);
                    }
                    operator = value;
                    currentInput = '';
                }
            });
        });

        function clearAll() {
            currentInput = '';
            operand1 = null;
            operator = '';
            result.textContent = '0';
        }

        function calculate(num1, num2, op) {
            switch (op) {
                case '+':
                    return num1 + num2;
                case '-':
                    return num1 - num2;
                case '*':
                    return num1 * num2;
                case '/':
                    return num1 / num2;
                default:
                    return num2;
            }
        }
    });
</script>
