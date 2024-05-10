let displayNum = "";
let value = "";
    function displayVal(value) {
        displayNum += value;
        document.getElementById("display").innerHTML = displayNum;
    }
function deleteNum() {
    if(displayNum.slice(-2) === "**") {
        displayNum = displayNum.substring(0, displayNum.length - 2);
    }
    if(displayNum.slice(-8) === "Math.cos"){
        displayNum = displayNum.substring(0, displayNum.length - 8);
    }
    if(displayNum.slice(-8) === "Math.sin"){
        displayNum = displayNum.substring(0, displayNum.length - 8);
    }
    if(displayNum.slice(-8) === "Math.tan"){
        displayNum = displayNum.substring(0, displayNum.length - 8);
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
    document.getElementById("display").innerHTML = eval(displayNum);

        counter++;
        localStorage.setItem(counter, JSON.stringify(eq));
        displayNum = "";

}

function history() {
    if(counter === 0) {
        let historyNumDisp = document.createElement("div");
        historyNumDisp.innerHTML = "No history found.";
        historyNumDisp.classList.add("historyNumDisp");
        document.getElementById("history").appendChild(historyNumDisp);
    } else {
        let historyNum = JSON.parse(localStorage.getItem(counter));
        counter--;
        let historyNumDisp = document.createElement("div");
        historyNumDisp.innerHTML = historyNum;
        historyNumDisp.classList.add("historyNumDisp");
        document.getElementById("history").appendChild(historyNumDisp);
        displayNum = historyNum;
        document.getElementById("display").innerHTML = displayNum;
    }
        }

function clearNum() {
        displayNum = "";
    document.getElementById("display").innerHTML = displayNum;
    counter = 0;
    localStorage.clear();
    location.reload();
}

function upEq() {

}

function downEq() {

}