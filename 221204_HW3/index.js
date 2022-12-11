const nickNameE1 = document.getElementById('nickName');
const emailE1 = document.getElementById('email');
const phoneE1 = document.getElementById('phone');
const tbody = document.getElementById('tbody');
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addNewRow);
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
    td1.innerText = nickName;
    td2.innerText = email;
    td3.innerText = phone;
    td4.innerText = new Date().toLocaleString();
    td5.innerHTML = '<button>修改</button><input type="button" value="刪除" id="delete" onclick="deleteRow(this)"></input>'
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
}

// 後面還需要改
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', deleteRow);
function deleteRow () {
    const tr = document.getElementById('tr');
    const td1 = document.getElementById('td');
    const td2 = document.getElementById('td');
    const td3 = document.getElementById('td');
    const td4 = document.getElementById('td');
    const td5 = document.getElementById('td');
    tr.removeChild(tr);
    td1.removeChild(td1);
    td2.removeChild(td2);
    td3.removeChild(td3);
    td4.removeChild(td4);
    td5.removeChild(td5);
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


