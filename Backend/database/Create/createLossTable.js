const mysql = require("mysql2/promise");

// Function for creating a new profit table
async function createLossTable(name) {
    let db_name = name;
    let conn;
    try {
        
        conn = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
        });
        console.log("Connected to MySQL server");

        // Now, connect to the specific database
        await conn.changeUser({ database: db_name });

        // Create the 'loss' table
        let query = `CREATE TABLE IF NOT EXISTS loss (
            id INT AUTO_INCREMENT PRIMARY KEY,
            statements VARCHAR(500),
            data_year_1 INT,
            data_year_2 INT,
            data_year_3 INT,
            data_year_4 INT,
            data_year_5 INT
        )`;

        await conn.query(query);
        console.log("Loss Table Created Successfully");

    } catch (error) {
        console.error("Profit Table Creation Unsuccessful", error.message);
    } finally {
        if (conn) {
            await conn.end();
        }
    }
}

module.exports = createLossTable;
