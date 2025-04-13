// importing insertProfit Database
const insertProfit = require("../database/Insert/insertProfit");

async function profitCalculation(values,name){
    let projectName = name;
    let profitValues = [];
    profitValues.push(values);   

    let arr = profitValues.map(obj => Object.values(obj));
    let result = [];
    for (let i = 0; i < arr[0].length; i += 5) {
        result.push([arr[0][i], arr[0][i + 1], arr[0][i + 2], arr[0][i + 3], arr[0][i + 4]]);
    }

    await insertProfit(projectName, result);
}

module.exports = profitCalculation;