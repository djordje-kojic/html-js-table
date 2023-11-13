let data = [
  {
    id: "1",
    name: "Nik",
    age: "24",
    street: "Beogradska",
    contry: "Srbija",
  },
  {
    id: "2",
    name: "Bik",
    age: "23",
    street: "Beogradska",
    contry: "Bulgaria",
  },
  {
    id: "3",
    name: "Mica",
    age: "24",
    street: "Makedonska",
    contry: "Austria",
  },
  {
    id: "4",
    name: "paja",
    age: "21",
    street: "Beogradska",
    contry: "Srbija",
  },
  {
    id: "5",
    name: "Piki",
    age: "24",
    street: "Beogradska",
    contry: "Srbija",
  },
  {
    id: "6",
    name: "Bil",
    age: "23",
    street: "Beogradska",
    contry: "Srbija",
  },
  {
    id: "7",
    name: "paja",
    age: "21",
    street: "Beogradska",
    contry: "Srbija",
  },
  {
    id: "8",
    name: "paja",
    age: "21",
    street: "Beogradska",
    contry: "Srbija",
  },
  {
    id: "9",
    name: "paja",
    age: "21",
    street: "Beogradska",
    contry: "Srbija",
  },
  {
    id: "10",
    name: "paja",
    age: "21",
    street: "Beogradska",
    contry: "Srbija",
  },
  {
    id: "11",
    name: "paja",
    age: "21",
    street: "Beogradska",
    contry: "Srbija",
  },
  {
    id: "12",
    name: "paja",
    age: "21",
    street: "Beogradska",
    contry: "Srbija",
  },
  {
    id: "13",
    name: "paja",
    age: "21",
    street: "Beogradska",
    contry: "Srbija",
  }
];

const header = `
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    <th>STREET</th>
    <th>CONTRY</th>
    <th>ACTION</th>
  </tr>`; 


//DRAWTABLE FUNCTION ----------------->

function drawTable(data) {
  let table = document.getElementById("table");
  for (let i = 0; i < data.length; i++) {
    let row = `
    <tbody>
        <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].street}</td>
        <td>${data[i].contry}</td>
        <td><button>EDIT</button>
            <button>DELETE</button></td>
        </tr>
        </tbody>`;
    table.innerHTML += row;
  }
}

// ADDNEWW FUNCTION --------------->

function addNew() {
  var name = document.getElementById("inputName").value;
  var age = document.getElementById("inputAge").value;
  var street = document.getElementById("inputStreet").value;
  var contry = document.getElementById("inputContry").value;
  var table = document.getElementById("table");

  var totalRows = table.rows.length; // --> Treba izmeniti da pokupi zadnji id u tabeli da ne bi dodljeivao isti id nakon brisanja nekog reda
  var id = totalRows;

  const newAdd = [
    { id: id, name: name, age: age, street: street, contry: contry },
  ];

  if (
    name.length > 0 &&
    age.length > 0 &&
    street.length > 0 &&
    contry.length > 0
  ) {
    // --> Treba uraditi dodatnu proveru da li je age Number
    drawTable(newAdd);
    data.push(newAdd);
  } else {
    alert("All filds must be fill!");
  }
}

// SORT FUNCTION --------------------------->

function sort(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table");
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }


}

// SEARCH BOX
function search() {
  let value = document.getElementById("search-input").value;
  let filtered = searchTable(value, data);
  drawTable(filtered);
  console.log(value);
}

//SEARCH TABLE FUNCTION
function searchTable(value, data) {
  let table = document.getElementById("table");
  let filteredData = [];

  for (let i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    let name = data[i].name.toLowerCase();
    let street = data[i].street.toLowerCase();
    let contry = data[i].contry.toLowerCase();
    let age = data[i].age;

    if (
      name.includes(value) ||
      age.includes(value) ||
      street.includes(value) ||
      contry.includes(value)
    ) {
      filteredData.push(data[i]);
    }
  }
  table.innerHTML = header;
  return filteredData;
}

window.onload = () => {
  drawTable(data);
}