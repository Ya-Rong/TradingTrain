const one_Button = document.getElementById("one");
const two_Button = document.getElementById("two");
const three_Button = document.getElementById("three");
const four_Button = document.getElementById("four");
const five_Button = document.getElementById("five");
const six_Button = document.getElementById("six");
const seven_Button = document.getElementById("seven");
const eight_Button = document.getElementById("eight");
const nine_Button = document.getElementById("nine");
const zero_Button = document.getElementById("zero");

const dot_Button = document.getElementById("dot"); 
const clear_Button = document.getElementById("clear"); 
const percent_Button = document.getElementById("percent"); 
const left_Button = document.getElementById("left"); 
const right_Button = document.getElementById("right"); 
const OutputElement = document.getElementById("output"); 

num_Button = document.getElementsByClassName("number"); 
operator_Buttons = document.getElementsByClassName("operator"); 

var output = document.querySelector(".output");  //顯示當前輸入數字的div
var arr = []; //用來儲存所有數字和運算符
var calStr = ""; //紀錄當前輸入的數字