const nickNameE1 = document.getElementById('nickName');
const emailE1 = document.getElementById('email');
const phoneE1 = document.getElementById('phone');
const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');
const tbody = document.getElementById('tbody');
addButton.addEventListener('click', addNewRow);

function addNewRow () {
    const nickName = nickNameE1.value;
    const email = emailE1.value;
    const phone = phoneE1.value;
    // console.log((nickName, email, phone ));
    const tr document.createElement('tr');
    const td1 document.createElement('td');
    const td2 document.createElement('td');
    const td3 document.createElement('td');
    const td4 document.createElement('td');
    const td5 document.createElement('td');
    td1.innerText = nickName;
    td2.innerText = email;
    td3.innerText = phone;
    td4.innerText = new Data().toISOString();
    td5.innerHTML = '<button>修改</button><button>刪除</button>';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);

}

deleteButton.remove();

// function deleteRow () {

// }

// const members = [{
//     name: '123',
//     email: '123@gmail.com',
//     phone: '0912345678',
//     dateCreated: '2022-12-04T10:58:56.410Z'
// },{

// }]



console.log(nickNameE1.value)
