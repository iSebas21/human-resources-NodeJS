window.onload = init;

function init(){

    document.querySelector('.search').addEventListener('click', search);
    if(localStorage.getItem("token")){

        document.querySelector('.add').addEventListener('click', function() {
            window.location.href = "add.html"
        });

        document.querySelector('.edit').addEventListener('click', function() {
            window.location.href = "edit.html"
        });

        document.querySelector('.deletes').addEventListener('click', function() {
            window.location.href = "deletes.html"
        });   
    } else{
        window.location.href = "index.html";
    };
};


async function search(){
    const name = document.getElementById('name');
    const {data} = await axios.post("http://localhost:3000/employee/search", {
        data: {
            employee_name : name.value,
        },
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    });
    console.log(data);
    displayemployees(data.employee);
};

function displayemployees(employees){
    const results = document.querySelector(".results");
    employees.forEach(employee => {
        results.innerHTML += `<h5> id: ${employee.employee_id}, name: ${employee.employee_name} </h5>`;
    });
};
