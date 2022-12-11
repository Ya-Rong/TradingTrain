const nickNameE1 = document.getElementById('nickName');
const emailE1 = document.getElementById('email');
const phoneE1 = document.getElementById('phone');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const tbody = document.getElementById('tbody');
addButton.addEventListener('click', addNewRow);
deleteButton.addEventListener('click', deleteRow);

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
    td5.innerHTML = '<button>修改</button><button>刪除</button>';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
}

// 這邊後面還沒寫完，還需要改
// const tr = document.createElement('tr');
// tr.children[4].children[1].addEventListener('click', function () {
//     tr.remove();
// });

// nickNameE1.value = '';
// emailE1.value = '';
// phoneE1.value = '';
// const element = document.getElementById("tr");
// element.remove(tr);
function deleteRow () {
    const nickName = nickNameE1.value;
    const email = emailE1.value;
    const phone = phoneE1.value;
    const tr = document.getElementById('tr');
    const td1 = document.getElementById('td');
    const td2 = document.getElementById('td');
    const td3 = document.getElementById('td');
    const td4 = document.getElementById('td');
    const td5 = document.getElementById('td');
    tr.removeChild(td);
    td1.removeChild(td);
    td2.removeChild(td);
    td3.removeChild(td);
    td4.removeChild(td);
    td5.removeChild(td);
}

// const members = [{
//     name: '123',
//     email: '123@gmail.com',
//     phone: '0912345678',
//     dateCreated: '2022-12-04T10:58:56.410Z'
// },{

// }]


