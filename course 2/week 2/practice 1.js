// function consoleStyler(txt, color, background, fontSize) {
//     var message = "%c" + txt;
//     var style = `color: ${color};`;
//     style += `background: ${background};`;
//     style += `font-size: ${fontSize};`;
//     console.log(message, style)
// }

// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size: 50px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(`%cUnknown reason`);
//     }
// }

// consoleStyler('You made it!', 'ef7c8e', 'fae8e0', '30px');
// celebrateStyler("champions"); 


var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);