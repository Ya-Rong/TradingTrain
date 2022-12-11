const nickNameE1 = document.getElementById('nickName');
const emailE1 = document.getElementById('email');
const phoneE1 = document.getElementById('phone');
const tbody = document.getElementById('tbody');
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addNewRow);

let rowCount=1
function addNewRow () {
    const nickName = nickNameE1.value;
    const email = emailE1.value;
    const phone = phoneE1.value;
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    tr.id=rowCount
    td1.innerText = nickName;
    td2.innerText = email;
    td3.innerText = phone;
    td4.innerText = new Date().toLocaleString();
    td5.innerHTML = '<button>修改</button><input type="button" value="刪除" id="delete" onclick="deleteRow(rowCount)"></input>'
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
    nickNameE1.value = '';
    emailE1.value = '';
    phoneE1.value = '';
}

// 後面還需要改
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', deleteRow);
function deleteRow (id) {
	document.querySelector('#id').remove()
// const deleteButton = document.getElementById('delete');
// deleteButton.addEventListener('click', deleteRow);
// function deleteRow () {
//     const tr = document.getElementById('tr');
//     tr.removeChild(tr);
}
// if (Node.parentNode) {
//     Node.parentNode.removeChild(Node);
// }
// const members = [{
//     name: '123',
//     email: '123@gmail.com',
//     phone: '0912345678',
//     dateCreated: '2022-12-04T10:58:56.410Z'
// },{

// }]


