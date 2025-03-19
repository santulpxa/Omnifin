const mongoose = require("mongoose");


// schema
const dataSchema = new mongoose.Schema({
    statement: String,
    year:{
        2018: Number,
    }
});


main().then(console.log("database connected.")).catch(e => console.log(e));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/omnifindb");
}

const Data = mongoose.model('Data', dataSchema); //class

let firstYearData = new Data({
    statement: "Profit of the year",
    year: 2018
});

try {
    const savedData = await firstYearData.save();
    console.log("Data inserted:", savedData);
} catch (e) {
    console.log("Error inserting data:", e);
}
