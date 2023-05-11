Testing Document:

1. Test the input of personal details:
- Verify that all required fields (first and last name, ID, address, date of birth, telephone, mobile phone) are present and can be entered correctly.
- Verify that invalid inputs (e.g. incorrect format, empty fields) are rejected and appropriate error messages are displayed.
- Test edge cases such as entering extremely long or short values in text fields, entering invalid dates, and entering invalid phone numbers.

2. Test the input of corona virus details:
- Verify that the system can store up to 4 dates of receiving the vaccine, along with the manufacturer of each vaccine.
- Verify that the system can store the date of receiving a positive result and the date of recovery from the disease.
- Verify that the system does not allow more than one positive result per employee.
- Test edge cases such as entering multiple positive results for a single employee, entering invalid vaccine manufacturers, and entering invalid dates.

3. Test the retrieval of records:
- Verify that the API can retrieve all employee records.
- Verify that the API can retrieve a single employee record by ID.
- Verify that the retrieved records contain all the details entered correctly.
- Test edge cases such as retrieving records with invalid IDs and retrieving records with missing fields.

4. Test the bonus feature of uploading and displaying member photos:
- Verify that the client side can upload a photo of the member.
- Verify that the photo is stored correctly in the database.
- Verify that the photo is displayed correctly in the UI.
- Test edge cases such as uploading photos of different sizes and formats, and uploading photos with invalid file extensions.

5. Test the bonus feature of displaying a summary view of corona virus data:
- Verify that the API can generate a graph showing the number of active patients each day in the last month.
- Verify that the API can retrieve the number of unvaccinated members.
- Test edge cases such as generating graphs with no data and retrieving data for invalid time periods.

6. Test the group isolation feature:
- Verify that the UI can display a map element from Google Maps.
- Verify that the UI can select a POI and enter the date of exposure to the virus.
- Verify that the server side can receive a request with the geographic data, date of exposure, date of recovery, and list of people to be updated.
- Verify that a valid request returns a 201 status, and an invalid request returns a 400 status.
- Test edge cases such as entering invalid geographic data, entering invalid dates, and entering invalid employee lists.

7. Test the quality strategy of the system:
- Verify that the system can handle updates to the database of admissions and recoveries for a group of people exposed to the virus.
- Verify that the system can interface with Google Maps and phone icons to identify the relevant group of people.
- Verify that the system can handle requests with missing fields and return appropriate error messages.
- Test edge cases such as updating records with missing fields and handling requests with invalid data.

8. Test the server-side implementation:
- Verify that the chosen database (e.g. MongoDB, SQL) can store and retrieve records correctly.
- Verify that the chosen technology (e.g. Node.js, Python, ASP.NET, Java, C#) can handle requests and responses correctly.
- Verify that the API routes are implemented correctly and can be accessed by the client side.
- Test edge cases such as handling large amounts of data, handling multiple requests at once, and handling requests with invalid data