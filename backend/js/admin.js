let admin=[
    {id:1, id_department: 101, fullname:'Tinah Mbangu', phonenumber:+243812345909, email:'tinahmbangu@gmail.com', 
    address:'mampala', dob:'03/13/2024', dateofcreation:'04/23/2024', gender:'male or female', password:'starfish24'},
    {id:2, id_department: 102,fullname:'Elsa Manang', phonenumber:+243812345909, email:'tinahmbangu@gmail.com', 
    address:'Kasapa', dob:'03/13/2024', dateofcreation:'04/23/2024', gender:'male or female', password:'starfish24'}
]

function readAlladmin(){
    var tbadmin = document.querySelector(".admin_data")
    var elements="";

    admin.map(d => (
        elements += `<tr id='rows`+d.id+`'>
        <td>${d.id}</td>
        <td id='id_department1'>${d.id_department}</td>
        <td id='fullname1'>${d.fullname}</td>
        <td id='phonenumber1'>${d.phonenumber}</td>
        <td id='email1'>${d.email}</td>
        <td id='address1'>${d.address}</td>
        <td id='dob1'>${d.dob}</td>
        <td id='dateofcreation1'>${d.dateofcreation}</td>
        <td id='gender1'>${d.gender}</td>
        <td id='password1'>${d.password}</td>
        <td> 
        <button onclick={editadmin(${d.id})}>Update</button> 
        <button onclick={deletadmin(${d.id})}>Delete</button> 
        </td>
        </tr>`
    ))
    tbadmin.innerHTML = elements;
}

function createFormadmin(){
    document.querySelector(".create_admin").style.display = "block";
    document.querySelector(".addbtnadmin").style.display = "none";
}

function addadmin(){
    var newObj = { 
        id: 3, 
        id_department : document.getElementById("ndepartmnt1").value,
        fullname: document.getElementById("nfullname1").value, 
        phonenumber: document.getElementById("nphone_number1").value, 
        email: document.getElementById("nemail1").value, 
        address: document.getElementById("naddress1").value, 
        dob: document.getElementById("ndob1").value, 
        dateofcreation: document.getElementById("ndoc1").value,
        gender: document.getElementById("ngender1").value, 
        password: document.getElementById("npassword1").value
     };

    admin.push(newObj);

    document.querySelector(".create_admin").style.display = "none";
    document.querySelector(".addbtnadmin").style.display = "block";
    readAlladmin();
} 

function editadmin(id){
    document.querySelector(".update_admin").style.display = "block";
    document.querySelector(".addbtnadmin").style.display = "none"; 

    var updateObj = admin.find(f => f.id === id);  
    document.getElementById('adminid').value = id;
    document.getElementById('idepartmnt2').value = updateObj.id_department
    document.getElementById('ifullname2').value = updateObj.fullname;
    document.getElementById('iphone_number2').value = updateObj.phonenumber;
    document.getElementById('iemail2').value = updateObj.email;
    document.getElementById('iaddress2').value = updateObj.address;
    document.getElementById('idob2').value = updateObj.dob;
    document.getElementById('idoc2').value = updateObj.dateofcreation;
    document.getElementById('igender2').value = updateObj.gender;
    document.getElementById('ipassword2').value = updateObj.password;
}

function updateadmin(){
        var updateObj = { 
            id: parseInt(document.querySelector("#adminid").value), 
            id_department : document.querySelector(".idepartmnt").value,
            fullname: document.querySelector(".ifullname").value, 
            phonenumber: document.querySelector(".iphone_number").value, 
            email: document.querySelector(".iemail").value, 
            address: document.querySelector(".iaddress").value, 
            dob: document.querySelector(".id_o_b").value, 
            dateofcreation: document.querySelector(".id_o_c").value,
            gender: document.querySelector(".igender").value, 
            password: document.querySelector(".ipassword").value
         };

    var index = admin.findIndex(f => f.id === updateObj.id);
    admin[index] = updateObj
    document.querySelector('#rows' + updateObj.id).innerHTML = ''
    document.querySelector(".update_admin").style.display = "none";
    document.querySelector(".addbtnadmin").style.display = "block";

 readAlladmin();
}

function deletadmin(id) {
    var newadmin = admin.filter(f => f.id !== id);
    admin = newadmin;
    readAlladmin();   
}

readAlladmin()