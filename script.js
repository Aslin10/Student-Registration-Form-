function onFormSubmit(){
    var formData=readFormData()
    insertNewRecord(formData);
    resetForm();
}
function readFormData(){
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["age"]=document.getElementById("age").value;
    formData["gender"]=document.querySelector("input[name=gender]:checked").value;
    formData["course"]=document.getElementById("course-list").value;
    formData["Email"]=document.getElementById("Email").value;
return formData;
}
function insertNewRecord(data){
    var table=document.getElementById("list").getElementsByTagName("tbody")[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.name;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.age;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.gender;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.course;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.Email;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=`<button onClick="onDelete(this)">delete</button>`;
}
function resetForm(){
    document.getElementById("name").value="";
   document.getElementById("age").value="";
    document.document.querySelector("input[name=gender]:checked").value;
    document.getElementById("course-list").value="";
    document.getElementById("Email").value="";

}
function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
    row=td.parentElement.parentElement;
    document.getElementById("list").deleteRow(row.rowIndex);
    resetForm();
}}