
let num1 = 10;
let num2 = 20;
let num3 = 40;

//BODMAS
//reusable
//arithmetic_operator - addition, subtraction, division, multiplication
function BODMAS(arithmetic_operator) {
    //arithmetic_operator - placeholder
    let result;

    if (arithmetic_operator === 'subtraction') {
        result = num1 - num2 - num3;
    } else if (arithmetic_operator === 'addition') {
        result = num1 + num2 + num3;
    } else if (arithmetic_operator === 'division') {
        result = num1 / num2 / num3;
    } else if (arithmetic_operator === 'multiplication') {
        result = num1 * num2 * num3;
    }

    return result;
}

//console.log(BODMAS('addition'));
//console.log(BODMAS('subtraction'));
//console.log(BODMAS('division'));
//console.log(BODMAS('multiplication'));


//Array
// array literals
let array1 = [];
array1.push('push1');
array1.push('push2');
array1.push('push3');
array1.unshift('unshift1');
array1.unshift('unshift2');
array1.unshift('unshift3');
//console.log(array1.pop());
//console.log(array1.shift())
//console.log(array1);

let array2 = [
    'fruit',
    'apple',
    'banana',
    'avocado',
    'pear',
    'cherry',
    'orange',
    { name: 'kenny' },
    { name: 'coker' },
    { name: 'kunle' }
];

console.log(array2);
//console.log(array2[0])
//console.log(array2[1])
//console.log(array2[2])

//iterative/loop/repeatedly statement
//hihger order array functions
//forEach
array2.forEach(function (value, index, array) {
    console.log(value);
    //console.log(array);
});























