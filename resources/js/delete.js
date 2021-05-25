window.onload = init;
function init(){

    if(localStorage.getItem("token")){
        document.querySelector('.deletes').addEventListener('click', deletes);
    } else{
        window.location.href = "employees.html";
    }
}

function deletes(){
    var id = document.getElementById('id').value;
    
    console.log(id);

    axios({
        method: 'delete',
        url: 'http://localhost:3000/employee/delete',
        data: {
            employee_id : id
        }
    }).then(function(res) {
        console.log(res);
        alert("The employee has been removed");
        window.location.href = "employees.html"
    }).catch(function(err){
        console.log(err);
    })
}