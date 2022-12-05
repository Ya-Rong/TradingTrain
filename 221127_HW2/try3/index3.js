//  clear 
function clearScreen() {
document.getElementById("result").value = "";
}
    
// display
function display(value) {
document.getElementById("result").value += value;
}
    
// evaluates the expression and returns result
function calculate() {
var p = document.getElementById("result").value;
var q = eval(p);
document.getElementById("result").value = q;
}
function backspace() {
var value = document.getElementById("result").value;
document.getElementById("result").value = value.substr(0, value.length - 1);
}