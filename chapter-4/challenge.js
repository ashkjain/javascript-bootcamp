function calculator(num1, num2, operator)
{
    switch(operator)
    {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            console.log('Not Valid');
    }
};

console.log(calculator(5,2,'+'));
console.log(calculator(5,2,'-'));
console.log(calculator(5,2,'*'));
console.log(calculator(5,2,'/'));
console.log(calculator(5,2,'&'));