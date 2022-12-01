// const： 意思是constant ，常數的意思，宣告它之後，不能再被改變

// 獲取指定id的元素： document.getElementById("demo");

// 獲取元素並更改其顏色： const myElement = document.getElementById("demo");
//                       myElement.style.color = "red";

// 只改變它的顏色： document.getElementById("demo").style.color = "red";

// let： 用於宣告一個「只作用在當前區塊的變數」，初始值可選擇性的設定。
//       宣告 let 的作用範圍是它們被定義的區塊，以及該區塊包含的子區塊。
//       這樣看起來功能跟 var 很相似。主要不同的地方在於 var 作用範圍是「整個」function。


// 數字0~9
const buttonone = document.getElementById('one');                   // getElementById： 給文檔添加點擊事件：
buttonone.addEventListener('click', handleClick1);                // document.addEventListener("click", myFunction);
function handleClick1 (MouseEvent) {    // MouseEvent： 鼠標活動// function myFunction() {
    resultStr += '1';                                           //   document.getElementById("demo").innerHTML = "Hello World";
    resultE1.innerText = resultStr;     // innerText： 設置元素或節點的文本內容                         // }
};

const buttontwo = document.getElementById('two');
buttontwo.addEventListener('click', handleClick2);
function handleClick2 (MouseEvent) {
    resultStr += '2';
    resultE1.innerText = resultStr;
};

const buttonthree = document.getElementById('three');
buttonthree.addEventListener('click', handleClick3);
function handleClick3 (MouseEvent) {
    resultStr += '3';
    resultE1.innerText = resultStr;
};

const buttonfour = document.getElementById('four');
buttonfour.addEventListener('click', handleClick4);
function handleClick4 (MouseEvent) {
    resultStr += '4';
    resultE1.innerText = resultStr;
};

const buttonfive = document.getElementById('five');
buttonfive.addEventListener('click', handleClick5);
function handleClick5 (MouseEvent) {
    resultStr += '5';
    resultE1.innerText = resultStr;
};

const buttonsix = document.getElementById('six');
buttonsix.addEventListener('click', handleClick6);
function handleClick6 (MouseEvent) {
    resultStr += '6';
    resultE1.innerText = resultStr;
};

const buttonseven = document.getElementById('seven');
buttonseven.addEventListener('click', handleClick7);
function handleClick7 (MouseEvent) {
    resultStr += '7';
    resultE1.innerText = resultStr;
};

const buttoneight = document.getElementById('eight');
buttoneight.addEventListener('click', handleClick8);
function handleClick8 (MouseEvent) {
    resultStr += '8';
    resultE1.innerText = resultStr;
};

const buttonnine = document.getElementById('nine');
buttonnine.addEventListener('click', handleClick9);
function handleClick9 (MouseEvent) {
    resultStr += '9';
    resultE1.innerText = resultStr;
};

const buttonzero = document.getElementById('zero');
buttonzero.addEventListener('click', handleClick0);
function handleClick0 (MouseEvent) {
    resultStr += '0';
    resultE1.innerText = resultStr;
};

// 運算符號
const buttondivision = document.getElementById('division');
const buttonmultiplication = document.getElementById('multiplication');
const buttonsubtraction = document.getElementById('subtraction');
const buttonaddition = document.getElementById('addition');

// 數字0~9
// const buttonone = document.getElementById("one");
// const tbuttontwo = document.getElementById("two");
// const buttonthree = document.getElementById("three");
// const buttonfour = document.getElementById("four");
// const buttonfive = document.getElementById("five");
// const buttonsix = document.getElementById("six");
// const buttonseven = document.getElementById("seven");
// const buttoneight = document.getElementById("eight");
// const buttonnine = document.getElementById("nine");
// const buttonzero = document.getElementById("zero");

// 其他
const buttonleft = document.getElementById('left');         // (
const buttonright = document.getElementById('right');       // )
const buttonpercent = document.getElementById('percent');   // %
const buttonclear = document.getElementById('clear');       //  

// 小數點
const buttondot = document.getElementById('dot');           // .

// 等於
const buttonequal = document.getElementById('equal');       // =

// 結果
const resultE1 = document.getElementById('result');         // 結果
let resultStr = '';







// // console.log('hello world');
// // function test () {
// console.log： 把某個數值顯示在螢幕上。console是控制台，log是紀錄。
