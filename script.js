 // Template Strings Example
function showTemplateString() {
    const user = { name: 'Rama', age: 25 };
    const message = `Hello, my name is ${user.name} and I am ${user.age} years old.`;
    document.getElementById('templateStringOutput').textContent = message;
}

// Arrow Function Example
function showArrowFunction() {
    const multiply = (a, b) => a * b;
    const result = `5 multiplied by 4 is: ${multiply(5, 4)}`;
    document.getElementById('arrowFunctionOutput').textContent = result;
}

// For...of and For...in Loops Example
function showLoops() {
    const user = { name: 'Alice', age: 28, city: 'Seattle' };
    const fruits = ['Apple', 'Banana', 'Cherry'];
    let output = 'For...in loop over object:\n';
    for (let key in user) {
        output += `${key}: ${user[key]}\n`;
    }
    output += '\nFor...of loop over array:\n';
    for (let fruit of fruits) {
        output += `${fruit}\n`;
    }
    document.getElementById('loopsOutput').textContent = output;
}

// Rest Operator Example
function showRestOperator() {
    const calculateSum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
    const result = `Sum of numbers 1, 2, 3, 4, 5 is: ${calculateSum(1, 2, 3, 4, 5)}`;
    document.getElementById('restOperatorOutput').textContent = result;
}

// Spread Operator Example
function showSpreadOperator() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2];
    document.getElementById('spreadOperatorOutput').textContent = `Combined array: ${combined}`;
}
