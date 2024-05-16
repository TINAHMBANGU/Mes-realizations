let client=[
    {id:1, fullname:'Tinah Mbangu', phonenumber:+243812345909, email:'tinahmbangu@gmail.com', address:'mampala', dob:'03/13/2024', 
    dateofcreation:'04/23/2024', gender:'female', password:'starfish24'},
    {id:2, fullname:'Elsa Manang', phonenumber:+243812345909, email:'elsamanang@gmail.com', address:'mampala', dob:'03/13/2024', 
    dateofcreation:'04/23/2024', gender:'female', password:'starfish24'}
]

function readAllclient(){
    var tbclient = document.querySelector(".client_data")
    var elements="";

    client.map(d => (
        elements += `<tr id='row`+d.id+`'>
        <td>${d.id}</td>
        <td id='fullname`+d.id+`'>${d.fullname}</td>
        <td id='phonenumber`+d.id+`'>${d.phonenumber}</td>
        <td id='email`+d.id+`'>${d.email}</td>
        <td id='address`+d.id+`'>${d.address}</td>
        <td id='dob`+d.id+`'>${d.dob}</td>
        <td id='dateofcreation`+d.id+`'>${d.dateofcreation}</td>
        <td id='gender`+d.id+`'>${d.gender}</td>
        <td id='password`+d.id+`'>${d.password}</td>
        <td>
        <button onclick={editclient(${d.id})}>Update</button> 
        <button onclick={deletclient(${d.id})}>Delete</button> 
        </td>
        </tr>`
    ))
    tbclient.innerHTML = elements;
}

function createFormclient(){
    document.querySelector(".create_client").style.display = "block";
    document.querySelector(".addbtnclient").style.display = "none";
}

function addclient(){
    var newObj = { 
        id: 3, 
        fullname: document.getElementById("name3").value, 
        phonenumber:document.getElementById("num3").value, 
        email:document.getElementById("email3").value, 
        address:document.getElementById("address3").value, 
        dob:document.getElementById("dob3").value, 
        dateofcreation:document.getElementById("doc3").value,
        gender:document.getElementById("gender3").value, 
        password:document.getElementById("password3").value 
    };
    
    client.push(newObj);

    document.querySelector(".create_client").style.display = "none";
    document.querySelector(".addbtnclient").style.display = "block";
    readAllclient();
} 

function editclient(id){
    
    document.querySelector(".update_client").style.display = "block";
    document.querySelector(".addbtnclient").style.display = "none"; 

    var updateObj = client.find(f => f.id === id); 
    document.getElementById("clientid").value = id;
    document.getElementById("name2").value = updateObj.fullname;
    document.getElementById("num2").value = updateObj.phonenumber;
    document.getElementById("email2r").value = updateObj.email;
    document.getElementById("address2r").value = updateObj.address;
    document.getElementById("dob2r").value = updateObj.dob;
    document.getElementById("doc2r").value = updateObj.dateofcreation;
    document.getElementById("gender2r").value = updateObj.gender;
    document.getElementById("password2r").value = updateObj.password;

}

function updateclient(){
    var updateObj ={ 
        id: parseInt(document.querySelector("#clientid").value),    
        fullname: document.querySelector(".ufullname").value, 
        phonenumber:document.querySelector(".uphone_number").value, 
        email:document.querySelector(".uemail").value, 
        address:document.querySelector(".uaddress").value, 
        dob:document.querySelector(".ud_o_b").value, 
        dateofcreation:document.querySelector(".ud_o_c").value,
        gender:document.querySelector(".ugender").value, 
        password:document.querySelector(".upassword").value 
    }; 
       

    var index = client.findIndex(f => f.id === updateObj.id);
    client[index] = updateObj
    document.querySelector('#row' + updateObj.id).innerHTML = ''
    document.querySelector(".update_client").style.display = "none";
    document.querySelector(".addbtnclient").style.display = "block";

     readAllclient();
}

function deletclient(id) {
    var newclient = client.filter(f => f.id !== id);
    client = newclient;
    readAllclient();   
}

readAllclient()