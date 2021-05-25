window.onload = init;
function init(){

    if(localStorage.getItem("token")){
        document.querySelector('.edit').addEventListener('click', edit);
    } else{
        window.location.href = "employees.html";
    };
};

function edit(){
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var lastnames = document.getElementById('lastnames').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;

    console.log(id, name, lastnames, phone, email, address);

    axios({
        method: 'patch',
        url: 'http://localhost:3000/employee/edit',
        data: {
            employee_id : id,
            employee_name : name,
            employee_lastnames: lastnames,
            employee_phone: phone,
            employee_email: email,
            employee_address: address 
        }
    }).then(function(res) {
        console.log(res);
        alert("Employee updated successfully");
        window.location.href = "employees.html"
    }).catch(function(err){
        console.log(err);
    });
};