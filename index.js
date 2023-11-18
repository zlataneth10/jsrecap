//variables
//- storage/representation
// store various values/data
//diff dataTypes -
// string - wrapped in a quote ("" / '' / ``)
// numbers - 1,2,3,4,5.5,6.7
// boolean - false/true
//undefined - undefined

//variable = declaration - initialization
//declaration - let, const, var
//let wedding;

//initialize
let wedding = 'I am getting married!';

console.log(wedding);

//function
// functions helps us in grouping
//together related lines of codes
//type of function
// - normal function
//{} - block scope

//global scope


//function declaration
function add() {
    //block-scope
    let num1 = 20;
    let num2 = 10;
    let num3 = 5;
    console.log('addition');
}
//invoke/call a function
add();

function sub() {
    //block-scope
    let num1 = 20;
    let num2 = 10;
    let num3 = 5;
    let result = num1 - num2 - num3;

    return result;
}

console.log(sub());

// - anonymous function
//function saved inside of a variable
let mul = function () {
    let num1 = 20;
    let num2 = 10;
    let num3 = 5;
    let result = num1 * num2 * num3;

    return result;
};
console.log(mul());

// - arrow function
let div = () => {
    let num1 = 20;
    let num2 = 10;
    let num3 = 5;
    return 'division';
};
div();

console.log(`Ade said 'biola is learning javascript'`);

// - immediately invoked function - IIF








































