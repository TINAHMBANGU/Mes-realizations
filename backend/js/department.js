let iDdepartment =[
    {id: 101, namedepartment:'manager', dateofcreation:'04/23/2024'},
    {id: 102, namedepartment:'finance', dateofcreation:'04/23/2024'}
]

function readAlldepart(){
    var tbdepartment = document.querySelector(".depart_data")
    var elements="";

    iDdepartment.map(d => (
        elements += `<tr id='rowd`+d.id+`'>
        <td>${d.id}</td>
        <td id='dept'>${d.namedepartment}</td>
        <td id='creation'>${d.dateofcreation}</td>
        <td> 
        <button onclick={editdepart(${d.id})}>Update</button> 
        <button onclick={deletdepart(${d.id})}>Delete</button> 
        </td>
        </tr>`
    ))
    tbdepartment.innerHTML = elements;
}

function createFormdepart(){
    document.querySelector(".create_depart").style.display = "block";
    document.querySelector(".addbtndepart").style.display = "none";
}

function adddepart(){
    var newObj = { 
        id: 103, 
        namedepartment: document.getElementById("undepart1r").value, 
        dateofcreation: document.getElementById("undoc1r").value
    };

    iDdepartment.push(newObj);

    document.querySelector(".create_depart").style.display = "none";
    document.querySelector(".addbtndepart").style.display = "block";
    readAlldepart();
} 

function editdepart(id){
    document.querySelector(".update_depart").style.display = "block";
    document.querySelector(".addbtndepart").style.display = "none"; 

    var updateObj = iDdepartment.find(f => f.id === id); 
    document.getElementById('departid').value = id
    document.getElementById("edepart1").value = updateObj.namedepartment; 
    document.getElementById("edoc1").value = updateObj.dateofcreation;
}

function updatedepart(){
    var updateObj = 
    {   id : parseInt(document.querySelector("#departid").value), 
        namedepartment : document.querySelector(".edepart").value, 
        dateofcreation : document.querySelector(".edoc").value
    };
    

    var index = iDdepartment.findIndex(f => f.id === updateObj.id);
    iDdepartment[index] = updateObj
    document.querySelector('#rowd' + updateObj.id).innerHTML = ''
    document.querySelector(".update_depart").style.display = "none";
    document.querySelector(".addbtndepart").style.display = "block";

     readAlldepart();
}

function deletdepart(id) {
    var newdepart = iDdepartment.filter(f => f.id !== id);
    iDdepartment = newdepart;
    readAlldepart();   
}


readAlldepart()