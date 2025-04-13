const mysql = require("mysql2/promise");

// Function for creating a new profit table
async function insertProfit(projectName, result) {
    let db_name = projectName;
    let data = result;
    let conn;
    let initialValues = [ "Revenue from Operations", "Other Income", "Provisions", "Total Income" ];
    const placeholders = data.map(() => '(?, ?, ?, ?, ?)').join(",");
    const values = data.flat();
    try {
        
        conn = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
        });
        console.log("Connected to MySQL server");

        // connect to the specific database
        await conn.changeUser({ database: db_name });

        // Create the 'profit' table
        let query = `INSERT INTO profit (data_year_1, data_year_2, data_year_3, data_year_4, data_year_5) VALUES ${placeholders}` ;

        await conn.query(query, values);

        // updating statements
        let update = `UPDATE profit SET statements = ? WHERE  id = ? `;

        for (let i = 0; i < initialValues.length; i++) {
            const statement = initialValues[i];
            const id = i + 1;  // Assuming you want to update by id = 1, 2, 3, 4 (starting from 1)
            
            await conn.query(update, [statement, id]);
        }

        console.log("Data Inserted Successfully");

    } catch (error) {
        console.error("Data Insertion Unsuccessful", error.message);
    } finally {
        if (conn) {
            await conn.end();
        }
    }
}

module.exports = insertProfit;
