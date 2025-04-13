// importing insertProfit Database
const insertLoss = require("../database/Insert/insertLoss");

async function lossCalculation(values,name){
    let projectName = name;
    let profitValues = [];
    profitValues.push(values);   

    let arr = profitValues.map(obj => Object.values(obj));
    let result = [];
    for (let i = 0; i < arr[0].length; i += 5) {
        result.push([arr[0][i], arr[0][i + 1], arr[0][i + 2], arr[0][i + 3], arr[0][i + 4]]);
    }

    await insertLoss(projectName, result);
}

module.exports = lossCalculation;