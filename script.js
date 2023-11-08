// FETCH LOCAL JSON FILE AND CALL DRAWTABLE FUNCTION
fetch("data.json")
  .then((response) => response.json())
  .then((json) => drawTable(json));

//DRAWTABLE FUNCTION ----------------->
function drawTable(data) {
  let table = document.getElementById("table");

  for (let i = 0; i < data.length; i++) {
    let row = `
        <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].street}</td>
        <td>${data[i].contry}</td>
        <\tr>`;
    table.innerHTML += row;
  }
}

// ADDNEWW FUNCTION --------------->


function addNew() {
  var name = document.getElementById("inputName").value;
  var age = document.getElementById("inputAge").value;
  var street = document.getElementById("inputStreet").value;
  var contry = document.getElementById("inputContry").value;
  var id = 24;

  const newAdd = [
    {id:id, name: name, age:age, street: street, contry:contry}
  ];
  drawTable(newAdd);
}
