const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => console.log('Keypress');
const onKeyUp = (e) => console.log('Key Up');
const onKeyDown = (e) => 
    {
        // key
        console.log(e.key);
        if(e.key === 'Enter')
        {
            alert('You Pressed Enter');
        }
        // keyCode
        console.log(e.keyCode);
        if(e.keyCode === 8)
        {
            alert('You Pressed Backspace');
        }
        // code
        console.log(e.code);
        if(e.code === 'KeyB')
        {
            alert('You Pressed b');
        };

        if(e.repeat)
        {
            console.log('You are holding down '+e.key);
        };

        console.log('Shift: ' + e.shiftKey);
        console.log('Control: ' + e.ctrlKey);
        console.log('Alt: ' + e.altKey);

        if(e.shiftKey && e.key === 'K')
        {
            console.log('You hit Shift + K');
        }
    };

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
