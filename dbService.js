const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'michalkrispin',
    password: 'mk123',
    database: 'managemen',
    port: 3306
});
 

connection.connect((err) => {
     //console.log('connect');

    if (err) {
        console.log(err.message);
    }
      console.log('db ' + connection.state);
});


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
           
            const response = await new Promise((resolve, reject) => {
                const query =`SELECT * FROM  members  ;`;

              //  const query =`SELECT COUNT(*) AS count FROM members ;`;


                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
             console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async getAllVaccine() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query =`SELECT * FROM  vaccine  ;`;
 
              //  const query =`SELECT COUNT(*) AS count FROM members ;`;


                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
             console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async getCont() {
        try {
           
            const response = await new Promise((resolve, reject) => {
                  const query =`SELECT COUNT(*) AS count FROM members WHERE member_id NOT IN(SELECT member_id FROM vaccine)`; 



                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
             console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async insertNew( first_name , last_name, address, city, phone, mobile_phone,birth_date ,img) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query =  `INSERT INTO members  VALUES (DEFAULT,'${first_name}' ,'${ last_name}', '${address}', '${city}', '${phone}', '${mobile_phone}',  '${birth_date}' ,'${img}' )`;
              //  const query2 =  `INSERT INTO vaccine  VALUES (DEFAULT,'${vaccine_number_for_member}' ,'${ vaccine_manufacturer}', '${member_id}', '${vaccination_day_date}', '${Getting_positive_result_date}', '${recovery_date}')`;
              //  const query =`SELECT COUNT(*) AS count FROM members WHERE member_id NOT IN(SELECT`member_id FROM vaccine); 


                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async insertNewVaccine( vaccine_number_for_member , vaccine_manufacturer, member_id, vaccination_day_date, Getting_positive_result_date, recovery_date) {
        try {
 // console.log(  `INSERT INTO vaccine  VALUES (DEFAULT,${vaccine_number_for_member} ,'${ vaccine_manufacturer}',  ${member_id} , '${vaccination_day_date}', '${Getting_positive_result_date}', '${recovery_date}')`);

            const response = await new Promise((resolve, reject) => {
            
                const query =  `INSERT INTO vaccine  VALUES (DEFAULT,${vaccine_number_for_member} ,'${ vaccine_manufacturer}',  ${member_id} , '${vaccination_day_date}', '${Getting_positive_result_date}', '${recovery_date}')`;

 
        

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }


                
              
}

module.exports = DbService;
