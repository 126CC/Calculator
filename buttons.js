let displayNum = "";

function enterExp() {
    displayNum += "**";
    document.getElementById("display").innerHTML = displayNum;
}

function enter7() {
    displayNum += "7";
    document.getElementById("display").innerHTML = displayNum;
}

function enter8() {
    displayNum += "8";
    document.getElementById("display").innerHTML = displayNum;
}

function enter9() {
    displayNum += "9";
    document.getElementById("display").innerHTML = displayNum;
}

function enterMultiply() {
    displayNum += "*";
    document.getElementById("display").innerHTML = displayNum;
}

function enterSqRoot() {
    displayNum += "√";
    document.getElementById("display").innerHTML = displayNum;
}

function enter4() {
    displayNum += "4";
    document.getElementById("display").innerHTML = displayNum;
}

function enter5() {
    displayNum += "5";
    document.getElementById("display").innerHTML = displayNum;
}

function enter6() {
    displayNum += "6";
    document.getElementById("display").innerHTML = displayNum;
}

function enterMinus() {
    displayNum += "-";
    document.getElementById("display").innerHTML = displayNum;
}

function del() {

}

function enter1() {
    displayNum += "1";
    document.getElementById("display").innerHTML = displayNum;
}

function enter2() {
    displayNum += "2";
    document.getElementById("display").innerHTML = displayNum;
}

function enter3() {
    displayNum += "3";
    document.getElementById("display").innerHTML = displayNum;
}

function enterPlus() {
    displayNum += "+";
    document.getElementById("display").innerHTML = displayNum;
}

function clear() {
    displayNum = "";
    document.getElementById("display").innerHTML = displayNum;
}

function enter0() {
    displayNum += "0";
    document.getElementById("display").innerHTML = displayNum;
}

function enterOpenP() {
    displayNum += "(";
    document.getElementById("display").innerHTML = displayNum;
}

function enterCloseP() {
    displayNum += ")";
    document.getElementById("display").innerHTML = displayNum;
}

function enterDivision() {
    displayNum += "/";
    document.getElementById("display").innerHTML = displayNum;
}

function history() {

}

function enterNum() {
    document.getElementById("display").innerHTML = eval(displayNum);
}

