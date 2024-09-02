/* const body = document.querySelector('body');

const key = document.getElementById('key').lastElementChild;
const keyCode = document.getElementById('keycode').lastElementChild;
const code = document.getElementById('code').lastElementChild;

const onKeyDown = (e) => 
    {
        key.innerText = e.key;
        keyCode.innerText = e.keyCode;
        code.innerText = e.code;
    };
    body.addEventListener('keydown',onKeyDown); */

// Method 1
/* window.addEventListener('keydown', (e) =>
{
    const insert = document.getElementById('insert');
    insert.innerHTML = 
    `
    <div class="" id="key">
            <p class="text-center">e.key</p>
            <div class="bg-white border border-black text-center py-4 w-32 text-xl">${e.key === ' ' ? 'Space':e.key}</div>
        </div>
        <div class="" id="keycode">
            <p class="text-center">e.keyCode</p>
            <div class="bg-white border border-black text-center py-4 w-32 text-xl">${e.keyCode}</div>
        </div>
        <div class="" id="code">
            <p class="text-center">e.code</p>
            <div class="bg-white border border-black text-center py-4 w-32 text-xl">${e.code}</div>
        </div>
    `
}); */

// Method 2

function showKeyCodes(e)
{
    const insert = document.getElementById('insert');
    insert.innerHTML = '';
    const keyCodes = {
        'e.key':e.key === ' ' ? 'Space':e.key,
        'e.keyCode':e.keyCode,
        'e.code':e.code,
    };
    for(let key in keyCodes)
    {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('p');
        small.className = 'text-center';
        const smallText = document.createTextNode(key);
        small.appendChild(smallText);
        const inDiv = document.createElement('div');
        inDiv.className = 'bg-white border border-black text-center py-4 w-32 text-xl';
        const inDivText = document.createTextNode(keyCodes[key]);
        inDiv.appendChild(inDivText);
        div.appendChild(small);
        div.appendChild(inDiv);
        insert.appendChild(div);
    }
}
window.addEventListener('keydown', showKeyCodes);
