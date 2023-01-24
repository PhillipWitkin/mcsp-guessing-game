
function init(){
    console.log("app.js started");
    let numInp = prompt("Pick a number");
    const num = parseInt(numInp);
    console.log(typeof(num));
    alert(`your number doubled is ${2*num}`);
}

init();