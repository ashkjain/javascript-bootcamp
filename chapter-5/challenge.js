let number = 1;
let bool =  true;
while(bool)
{
    switch(true)
    {
        case (number % 3 == 0) && (number % 5 == 0):
            console.log('FizzBuzz '+number);
            break;
        case number % 3 == 0:
            console.log('Fizz '+number);
            break;
        case number % 5 == 0:
            console.log('Buzz '+number);
            break;
        case number == 101:
            bool = false;
            break;
        default:
            console.log('Nothing ' +number);
    }
    number++;
};