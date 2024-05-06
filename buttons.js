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
        // localStorage.setItem("equation", displayNum);
        // JSON.stringify(eval(displayNum));
        // localStorage.setItem("solution", eval(displayNum));
    let history =
        {
            equation: displayNum,
            solution: eval(displayNum)
        }
        
    }


function clearNum() {
        displayNum = "";
    document.getElementById("display").innerHTML = displayNum;
}

