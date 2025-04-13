function calculateProfit(values){

    // GETTING INPUTS
    let C1R1 = Number(values.C1R1) || 0;
    let C2R1 = Number(values.C2R1) || 0;
    let C3R1 = Number(values.C3R1) || 0;
    let C4R1 = Number(values.C4R1) || 0;
    let C5R1 = Number(values.C5R1) || 0;
    let C1R2 = Number(values.C1R2) || 0;
    let C2R2 = Number(values.C2R2) || 0;
    let C3R2 = Number(values.C3R2) || 0;
    let C4R2 = Number(values.C4R2) || 0;
    let C5R2 = Number(values.C5R2) || 0;
    let C1R3 = Number(values.C1R3) || 0;
    let C2R3 = Number(values.C2R3) || 0;
    let C3R3 = Number(values.C3R3) || 0;
    let C4R3 = Number(values.C4R3) || 0;
    let C5R3 = Number(values.C5R3) || 0;
    
    // CALCULATING RAW PROFIT

    let C1_Revenue = C1R1 + C1R2 + C1R3 ;
    let C2_Revenue = C2R1 + C2R2 + C2R3 ;
    let C3_Revenue = C3R1 + C3R2 + C3R3 ;
    let C4_Revenue = C4R1 + C4R2 + C4R3 ;
    let C5_Revenue = C5R1 + C5R2 + C5R3 ;

    let totalRevenue = {
        C1_Revenue : C1_Revenue,
        C2_Revenue : C2_Revenue,
        C3_Revenue : C3_Revenue,
        C4_Revenue : C4_Revenue,
        C5_Revenue : C5_Revenue
    }
    let variable ={
        C1R1 : C1R1,
        C2R1 : C2R1,
        C3R1 : C3R1,
        C4R1 : C4R1,
        C5R1 : C5R1,
        C1R2 : C1R2,
        C2R2 : C2R2,
        C3R2 : C3R2,
        C4R2 : C4R2,
        C5R2 : C5R2,
        C1R3 : C1R3,
        C2R3 : C2R3,
        C3R3 : C3R3,
        C4R3 : C3R3,
        C5R3 : C5R3
    }

    let output = {
        totalRevenue : totalRevenue,
        value : variable
    }

    return(output);

    
    
    
    // let tax = 18 / 100;
    
    // let firstRevenue = A1 + B1 + C1 + D1;
    // let secondRevenue = A2 + B2 + C2 + D2;
    // let firstExpenses = E1 + F1 + G1 + H1;
    // let secondExpenses = E2 + F2 + G2 + H2;
    
    // let firstProfitBeforeTax = firstRevenue - firstExpenses;
    // let secondProfitBeforeTax = secondRevenue - secondExpenses;
    
    // let firstProfitAfterTax = firstProfitBeforeTax - (firstProfitBeforeTax * tax);
    // let secondProfitAfterTax = secondProfitBeforeTax - (secondProfitBeforeTax * tax);
    
}
module.exports = calculateProfit;