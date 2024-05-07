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


        let eq = displayNum;
        let sol = eval(displayNum)
    let history = [
        {
            equation: eq,
            solution: sol
        }
    ]

        let counter = localStorage.getItem("counter");
        if(counter == null) {
            counter = 0;
        }
        counter++;
        localStorage.setItem(counter, JSON.stringify(history[0]));

        history.push();
    document.getElementById("display").innerHTML = eval(displayNum);

}

function history() {






    // let eqNum = localStorage.getItem("eqNum");
    // let solNum = localStorage.getItem("solNum");
    //
    // if(eqNum == null) {
    //     eqNum = 0;
    // }
    //
    // if(solNum == null) {
    //     solNum = 0;
    // }
    //
    // if(history.type === "equation") {
    //     eqNum++;
    //     localStorage.setItem(eqNum, JSON.stringify(history[0]));
    // }
    //
    // if(history.type === "solution") {
    //     solNum++;
    //     JSON.stringify(eval(displayNum));
    //     localStorage.setItem(solNum, JSON.stringify(history[1]));
    // }



    // let counter = localStorage.getItem("counter");
    // if(counter == null) {
    //     counter = 0;
    // }
    //
    // counter++;
    // localStorage.setItem(counter, history[0]);
    // localStorage.setItem(counter, history[1]);
    // localStorage.setitem("counter", counter);




    }


function clearNum() {
        displayNum = "";
    document.getElementById("display").innerHTML = displayNum;
}

