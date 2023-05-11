
 document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:8080/getAll')
   .then(response => response.json())
   .then(data => buildHtmlTable("#members", data['data']));


   fetch('http://localhost:8080/getAllVaccine')
   .then(response => response.json())
   .then(data => buildHtmlTable("#vaccine", data['data']));
});


function insertRowIntoTable(data) {
    console.log(data);
    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data');

    let tableHtml = "<tr>";

    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === 'dateAdded') {
                data[key] = new Date(data[key]).toLocaleString();
            }
            tableHtml += `<td>${data[key]}</td>`;
        }
    }


    tableHtml += "</tr>";

    if (isTableData) {
        table.innerHTML = tableHtml;
    } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
    }
}       

const addBtn = document.querySelector('#addMemberButton');
addBtn.onclick = function () {
  
        // Get the form data
        const firstName = document.getElementById('firstNameInput').value;
        const lastName = document.getElementById('lastNameInput').value;
        const address = document.getElementById('addressInput').value;
        const city = document.getElementById('cityInput').value;
        const phone = document.getElementById('phoneInput').value;
        const img = document.getElementById('imgInput').value;
        const mobilePhone = document.getElementById('mobilePhoneInput').value;
        const birthDate = document.getElementById('birthDateInput').value;

        const member = {
          first_name : firstName,
          last_name : lastName,
          address :address,
          city : city,
          phone :phone,
          mobile_phone :mobilePhone,
          birth_date :birthDate,
          img : img
      } 


    fetch('http://localhost:8080/insert', {
        method: 'POST',
        headers: {'Content-type': 'application/json' },
        
        body: JSON.stringify(member),
        mode: 'cors'
      })
    .then(response => response.json())
  .catch(error => console.error(error));
    // .then(data => insertRowIntoTable(data['data']))


      // Hide the modal
      $('#myModal').modal('hide');
}



function buildHtmlTable(selector, data) {
    var columns = addAllColumnHeaders(data, selector);

    for (var i = 0; i < data.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = data[i][columns[colIndex]];
            if (cellValue == null) cellValue = "";
            row$.append($('<td/>').html(cellValue));
        }
        $(selector).append(row$);
    }
}

function addAllColumnHeaders(data, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0; i < data.length; i++) {
        var rowHash = data[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $(selector).append(headerTr$);

    return columnSet;
}

const addVaccineBtn = document.querySelector('#addVaccineButton');
addVaccineBtn.onclick = function () {
    // Get the values from the form inputs
    // const vaccineID = document.getElementById('vaccineID').value;
    const vaccineNumber = document.getElementById('vaccineNumber').value;
    const vaccineManufacturer = document.getElementById('vaccineManufacturer').value;
    const memberID = document.getElementById('memberID').value;
    const vaccinationDay = document.getElementById('vaccinationDay').value;
    const positiveResult = document.getElementById('positiveResult').value;
    const recoveryDate = document.getElementById('recoveryDate').value;
    
    const vaccine = {      
     
      vaccine_number_for_member : vaccineNumber,
      vaccine_manufacturer :vaccineManufacturer,
      member_id:memberID,
      vaccination_day_date:vaccinationDay,
      Getting_positive_result_date : positiveResult,
      recovery_date  :recoveryDate
  } 


fetch('http://localhost:8080/insertVaccine', {
    method: 'POST',
    headers: {'Content-type': 'application/json' },
    
    body: JSON.stringify(vaccine),
    mode: 'cors'
  })
.then(response => response.json())
.catch(error => console.error(error));
  
    
  
    // Hide the modal
    $('#myVaccineModal').modal('hide');
  }


const createIsolationButton = document.getElementById("create-group-isolation-button");
createIsolationButton.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "400px");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("srcdoc", `<!DOCTYPE html>
  <html>
    <head>
      <title>Create Group Isolation</title>
      <h1>Create Group Isolation</h1>
      <label for="address" style="color: blue;">Enter an address:</label>
      <input type="text" id="address">
      <button id="search-button" class="btn btn-primary"  style="color: blue;" >Search</button>
      <br/>
      <br/>
  
      <label for="date-of-exposure" style="color: blue;">Date of exposure to the virus:</label>
      <input type="date" id="date-of-exposure">
      <button id="create-button"  style="color: blue;">Create</button>
      
      <style>
        #map {
          height: 400px;
          width: 100%;
        }
      </style>
    </head>
    <body>
     
      <div id="map"></div>
      
      <script>
        let map;
  
        function initMap() {
          map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 32.794, lng: 34.989 },
            zoom: 8,
          });
  
          const marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            draggable: true,
          });
  
          google.maps.event.addListener(marker, "dragend", () => {
            map.setCenter(marker.getPosition());
          });
  
          google.maps.event.addListener(map, "click", (event) => {
            marker.setPosition(event.latLng);
            map.setCenter(event.latLng);
          });
        }
  
        const searchButton = document.getElementById("search-button");
        searchButton.addEventListener("click", () => {
          const geocoder = new google.maps.Geocoder();
          const address = document.getElementById("address").value;
          geocoder.geocode({ address: address }, (results, status) => {
            if (status === "OK") {
              map.setCenter(results[0].geometry.location);
              const marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                draggable: true,
              });
              google.maps.event.addListener(marker, "dragend", () => {
                map.setCenter(marker.getPosition());
              });
              google.maps.event.addListener(map, "click", (event) => {
                marker.setPosition(event.latLng);
                map.setCenter(event.latLng);
              });
            } else {
              alert("Geocode was not successful for the following reason: " + status);
            }
          });
        });
  
        const createButton = document.getElementById("create-button");
        createButton.addEventListener("click", () => {
          const dateOfExposure = document.getElementById("date-of-exposure").value;
          const location = map.getCenter();
  
          const xhr = new XMLHttpRequest();
          xhr.open("POST", "/create-group-isolation");
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 201) {
                console.log("Group isolation created successfully");
              } else if (xhr.status === 400) {
                console.log("Missing field in request");
              } else {
                console.log("Failed to create group isolation");
              }
            }
          };
          const data = {
            dateOfExposure,
            location,
          };
          xhr.send(JSON.stringify(data));
        });
      </script>
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDyHubNZc4UAnxJHd7O4XjelNqRUSWoIS8&callback=initMap"></script>
    </body>
  </html>
  `);
  const modalWindow = window.open("", "Create Group Isolation", "width=600,height=500");
  modalWindow.document.body.appendChild(iframe);
});
