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
    // console.log((nickName, email, phone ));
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    td1.innerText = nickName;
    td2.innerText = email;
    td3.innerText = phone;
    td4.innerText = new Date().toLocaleString(); //目前這樣可以直接顯示台北標準時間(加後面這串時間會出錯) .toISOString()
    td5.innerHTML = '<button>修改</button><button>刪除</button>';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
}

// 這邊後面還沒寫完，還需要改


function deleteRow () {
    const tr = document.getElementById('tr');
    const td1 = document.getElementById('td');
    const td2 = document.getElementById('td');
    const td3 = document.getElementById('td');
    const td4 = document.getElementById('td');
    const td5 = document.getElementById('td');
    tr.parentNode.removeChild(tr);
    td1.parentNode.removeChild(td);
    td2.parentNode.removeChild(td);
    td3.parentNode.removeChild(td);
    td4.parentNode.removeChild(td);
    td5.parentNode.removeChild(td);
    // const tbody = document.getElementById(tbody);
    // tbody.deleteCell();
}

// const members = [{
//     name: '123',
//     email: '123@gmail.com',
//     phone: '0912345678',
//     dateCreated: '2022-12-04T10:58:56.410Z'
// },{

// }]

