let displayNum = "";
let value = "";
    function displayVal(value) {
        displayNum += value;
        document.getElementById("display").innerHTML = displayNum;
    }
function deleteNum() {
    if(displayNum.slice(-2) === "**") {
        displayNum = displayNum.substring(0, displayNum.length - 2);
    } else {
        displayNum = displayNum.substring(0, displayNum.length - 1);
    }
    document.getElementById("display").innerHTML = displayNum;
}

let counter = localStorage.getItem("counter");
if(counter == null) {
    counter = 0;
}


function enterNum() {

    let eq = displayNum;


        counter++;
        localStorage.setItem(counter, JSON.stringify(eq));
        localStorage.setItem("counter", counter);

    document.getElementById("display").innerHTML = eval(displayNum);

}

function history() {

    let eq = [];
        for(let i = 0; i <= counter; i++) {
            eq.push(localStorage.getItem(""));
            }
            document.getElementById("display").innerHTML = eq;
        }

function clearNum() {
        displayNum = "";
    document.getElementById("display").innerHTML = displayNum;
}

function upEq() {

}

function downEq() {

}