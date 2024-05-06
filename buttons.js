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

function enterNum() {
    document.getElementById("display").innerHTML = eval(displayNum);
}

function history() {

    let history = [
        {
            type: "equation",
            equation: displayNum
        },
        {
            type: "solution",
            solution: eval(displayNum)
        }
        ]
    let eqNum = localStorage.getItem("eqNum");
    let solNum = localStorage.getItem("solNum");

    if(eqNum == null) {
        eqNum = 0;
    }

    if(solNum == null) {
        solNum = 0;
    }

    if(history.type === "equation") {
        eqNum++;
        localStorage.setItem(eqNum, JSON.stringify(history[0]));
    }
    if(history.type === "solution") {
        solNum++;
        JSON.stringify(eval(displayNum));
        localStorage.setItem(solNum, eval(displayNum));
    }

    
    }


function clearNum() {
        displayNum = "";
    document.getElementById("display").innerHTML = displayNum;
}

