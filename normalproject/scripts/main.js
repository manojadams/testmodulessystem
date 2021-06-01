function run() {
    const a = document.getElementById('num1').value;
    const b = document.getElementById('num2').value;
    const summation = add(a,b);
    const multiplication = multiply(a, b);
    const substractval = substract(a, b);
    const result = document.getElementById('result');
    result.innerHTML = '';
    append(result, 'summation:\t' + summation);
    append(result, 'multiply:\t' + multiplication);
    append(result, 'substract:\t' + substractval);   
}

function append(ele, text) {
    const p = document.createElement('p');
    p.innerText = text;
    ele.append(p);
}