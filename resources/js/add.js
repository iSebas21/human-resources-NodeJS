window.onload = init;
function init(){

    if(localStorage.getItem("token")){
        document.querySelector('.add').addEventListener('click', add);
    } else{
        window.location.href = "employees.html";
    }
}

function add(){
    var name = document.getElementById('name').value;
    var lastnames = document.getElementById('lastnames').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;

    console.log(name, lastnames, phone, email, address);

    axios({
        method: 'post',
        url: 'http://localhost:3000/employee/add',
        data: {
            employee_name : name,
            employee_lastnames: lastnames,
            employee_phone: phone,
            employee_email: email,
            employee_address: address 
        }
    }).then(function(res) {
        console.log(res);
        alert("The new employee has been registered");
        window.location.href = "employees.html"
    }).catch(function(err){
        console.log(err);
    })
}