const colorObj = {
    color1:'red',
    color2:'blue',
    color3:'green',
    color4:'yellow',
};

for(const color in colorObj)
{
    console.log(color, colorObj[color]);
};

const colorArr = ['red','blue','green','yellow'];
for(const color in colorArr)
{
    console.log(color); // Returns Key
    console.log(colorArr[color]); // Returns Value
};