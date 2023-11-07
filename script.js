// FETCH LOCAL JSON FILE AND CALL DRAWTABLE FUNCTION
fetch("data.json")
  .then(response => response.json())
  .then(json => drawTable(json));


//DRAW TABLE ----------------->

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

drawTable(data);
