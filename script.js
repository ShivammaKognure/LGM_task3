var row=1;
var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);

function displayDetails(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var contact = document.getElementById("contact").value;

    if(!name || !email || !website || !contact){
        alert("Please fill all the values");
        return;
     }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = website;
    cell4.innerHTML = contact;
 
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("website").value = "";
    document.getElementById("contact").value = "";
    row++;
    
    
}
