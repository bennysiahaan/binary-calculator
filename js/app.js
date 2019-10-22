const resultQuery = document.querySelector('.result > p');
const resultElement = document.getElementById('res');
const buttonsElement = document.getElementById('btns');
const btn0Element = document.getElementById('btn0');
const btn1Element = document.getElementById('btn1');
const btnClrElement = document.getElementById('btnClr');
const btnEqlElement = document.getElementById('btnEql');
const btnSumElement = document.getElementById('btnSum');
const btnSubElement = document.getElementById('btnSub');
const btnMulElement = document.getElementById('btnMul');
const btnDivElement = document.getElementById('btnDiv');
let on_result = true;
let op_available = false;

function calculate(input) {
  let operandArray = input.match(/^\d+|\d+\b|\d+(?=\w)/g);
  let operatorArray = input.match(/\+|\-|\*|\//g);
  let result = parseInt(operandArray[0], 2);
  for(let i = 0; i < operatorArray.length; i++) {
    let operand = parseInt(operandArray[i+1], 2);
    let operator = operatorArray[i];
    result = Math.floor(eval(`${result} ${operator} ${operand}`));
  }
  return result.toString(2);
}

function main() {
  /* Button 0 */
  btn0Element.addEventListener('click', function() {
    if(on_result) {
      resultQuery.innerHTML = '0';
      on_result = false;
    }
    else {
      resultQuery.innerHTML += '0';
    }
  })

  /* Button 1 */
  btn1Element.addEventListener('click', function() {
    if(on_result) {
      resultQuery.innerHTML = '1';
      on_result = false;
    }
    else {
      resultQuery.innerHTML += '1';
    }
  })

  /* Clear button */
  btnClrElement.addEventListener('click', function() {
    resultQuery.innerHTML = '';
    on_result = true;
    op_available = false;
  })

  /* Equal button */
  btnEqlElement.addEventListener('click', function() {
    var result = calculate(resultQuery.innerHTML.trim());
    resultQuery.innerHTML = result;
    on_result = true;
    op_available = false;
  })

  /* Add button */
  btnSumElement.addEventListener('click', function() {
    if(!op_available) {
      if(!on_result) {
        resultQuery.innerHTML += '+';
        op_available = true;
      }
      else {
        resultQuery.innerHTML = '';
      }
    }
  })

  /* Subtract button */
  btnSubElement.addEventListener('click', function() {
    if(!op_available) {
      if(!on_result) {
        resultQuery.innerHTML += '-';
        op_available = true;
      }
      else {
        resultQuery.innerHTML = '';
      }
    }
  })

  /* Multiply button */
  btnMulElement.addEventListener('click', function() {
    if(!op_available) {
      if(!on_result) {
        resultQuery.innerHTML += '*';
        op_available = true;
      }
      else {
        resultQuery.innerHTML = '';
      }
    }
  })

  /* Divide button */
  btnDivElement.addEventListener('click', function() {
    if(!op_available) {
      if(!on_result) {
        resultQuery.innerHTML += '/';
        op_available = true;
      }
      else {
        resultQuery.innerHTML = '';
      }
    }
  })
}

main();
