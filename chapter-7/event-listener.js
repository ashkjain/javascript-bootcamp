// JS event Listener
const clearBtn = document.querySelector('#clear');

/* clearBtn.onclick = function () {
    alert('Clear Items');
}; */

// Recommended way
// clearBtn.addEventListener('click',() => {
//     alert('Clear Items');
// });
/* function clear()
{
    alert('Clear Items');
}
clearBtn.addEventListener('click',clear); */

// setTimeout(() => clearBtn.removeEventListener('click', clear),5000);
// triggering event listener from script
// setTimeout(() => clearBtn.click(),5000);
function clearitems() {
    /* 
    const li = document.querySelectorAll('li');
    li.forEach((item, index) => item.remove()) 
    */
    //another way
    const itemList = document.querySelector('ul');
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
};
clearBtn.addEventListener('click', clearitems);