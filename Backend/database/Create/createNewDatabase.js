const mysql = require("mysql2/promise");

// Function For Creating New database
async function createNewDatabase(name) {
  let conn;
  try {
    // Creating connection with the MySQL Database
    conn = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
    });

    console.log("Database Connected Successfully");

    // Query to create the database
    let db_name = name; // Use provided name
    let query = `CREATE DATABASE \`${db_name}\``;
    
    // Execute the query to create the database
    await conn.query(query);
    console.log(`${db_name} Database Created Successfully`);    

  } catch (err) {
    // Handle any error that occurs during connection or query execution
    console.error("Error Occurred:", err.message);
  } finally {
    // Ensure the connection is always closed
    if (conn) {
      await conn.end();
    }
  }
}

module.exports = createNewDatabase;
