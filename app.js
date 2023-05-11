const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.patch("/update-group-isolation", (req, res) => {
    const {   location, dateOfExposure, dateOfRecovery, peopleToUpdate } = req.body;
    if (! location || !dateOfExposure || !dateOfRecovery || !peopleToUpdate) {
      res.status(400).json({ error: "Missing field in request" });
    } else {
      // Update group isolation information in database
      res.status(201).json({ message: "Group isolation updated successfully" });
    }
  });
// create
app.post('/insert', (req, response) => {
    const  request  = req.body;
    const db = dbService.getDbServiceInstance();
   
        const result = db.insertNew( request.first_name , request.last_name, request.address, request.city, request.phone, request.img,  request.mobile_phone,  request.birth_date);

    result
    .then(data => response.json({ data: data})); 

 });

// create Vaccine
app.post('/insertVaccine', (req, response) => {
  const  request  = req.body;
  const db = dbService.getDbServiceInstance();
    const result = db.insertNewVaccine( request.vaccine_number_for_member , request.vaccine_manufacturer, request.member_id, request.vaccination_day_date, request.Getting_positive_result_date, request.recovery_date);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

// read
app.get('/getAll', (request, response) => {

        

    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

app.get('/getAllVaccine', (request, response) => {

        

    const db = dbService.getDbServiceInstance();

    const result = db.getAllVaccine();
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})


app.listen(process.env.PORT, () => console.log('app is running'));
