// 1111111111111111111111111111111111111111111111111111
function displayUserData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userDataDiv = document.getElementById("userData");
    userDataDiv.innerHTML = `<h2>User Data:</h2>
                              <p><strong>Name:</strong> ${name}</p>
                              <p><strong>Email:</strong> ${email}</p>
                              <p><strong>Password:</strong> ${password}</p>`;
}
var element;
element = document.head;
console.log(element)

// 22222222222222222222222222222222222222222222222222222
function toggleDetails(button) {
    var details = button.nextElementSibling;

    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        button.textContent = 'Read less';
    } else {
        details.style.display = 'none';
        button.textContent = 'Read more';
    }
}

// 33333333333333333333333333333333333333333333333333333333333333333

function addStudent() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    var table = document.getElementById('tableBody');
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
}

function editStudent(button) {
    var rowIndex = button.parentNode.parentNode.rowIndex;

    document.getElementById('editName').value = document.getElementById('studentTable').rows[rowIndex].cells[0].innerHTML;
    document.getElementById('editAge').value = document.getElementById('studentTable').rows[rowIndex].cells[1].innerHTML;

    document.getElementById('editForm').style.display = 'block';
    document.getElementById('editForm').setAttribute('data-row', rowIndex);
}

function submitEdit() {
    var rowIndex = document.getElementById('editForm').getAttribute('data-row');

    document.getElementById('studentTable').rows[rowIndex].cells[0].innerHTML = document.getElementById('editName').value;
    document.getElementById('studentTable').rows[rowIndex].cells[1].innerHTML = document.getElementById('editAge').value;

    document.getElementById('editForm').style.display = 'none';
}

function deleteStudent(button) {
    var rowIndex = button.parentNode.parentNode.rowIndex;

    document.getElementById('studentTable').deleteRow(rowIndex);
}



