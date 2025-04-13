function calculateLoss(values){

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
    let C1R4 = Number(values.C1R4) || 0;
    let C2R4 = Number(values.C2R4) || 0;
    let C3R4 = Number(values.C3R4) || 0;
    let C4R4 = Number(values.C4R4) || 0;
    let C5R4 = Number(values.C5R4) || 0;
    let C1R5 = Number(values.C1R5) || 0;
    let C2R5 = Number(values.C2R5) || 0;
    let C3R5 = Number(values.C3R5) || 0;
    let C4R5 = Number(values.C4R5) || 0;
    let C5R5 = Number(values.C5R5) || 0;
    let C1R6 = Number(values.C1R6) || 0;
    let C2R6 = Number(values.C2R6) || 0;
    let C3R6 = Number(values.C3R6) || 0;
    let C4R6 = Number(values.C4R6) || 0;
    let C5R6 = Number(values.C5R6) || 0;
    let C1R7 = Number(values.C1R7) || 0;
    let C2R7 = Number(values.C5R3) || 0;
    let C3R7 = Number(values.C3R7) || 0;
    let C4R7 = Number(values.C4R7) || 0;
    let C5R7 = Number(values.C5R7) || 0;
    let C1R8 = Number(values.C1R8) || 0;
    let C2R8 = Number(values.C2R8) || 0;
    let C3R8 = Number(values.C3R8) || 0;
    let C4R8 = Number(values.C4R8) || 0;
    let C5R8 = Number(values.C5R8) || 0;
    
    // CALCULATING RAW PROFIT

    let C1_Expense = C1R1 + C1R2 + C1R3 + C1R4 + C1R5 + C1R6 + C1R7 + C1R8 ;
    let C2_Expense = C2R1 + C2R2 + C2R3 + C2R4 + C2R5 + C2R6 + C2R7 + C2R8 ;
    let C3_Expense = C3R1 + C3R2 + C3R3 + C3R4 + C3R5 + C3R6 + C3R7 + C3R8 ;
    let C4_Expense = C4R1 + C4R2 + C4R3 + C4R4 + C4R5 + C4R6 + C4R7 + C4R8 ;
    let C5_Expense = C5R1 + C5R2 + C5R3 + C5R4 + C5R5 + C5R6 + C5R7 + C5R8 ;

    let totalExpense = {
        C1_Expense : C1_Expense,
        C2_Expense : C2_Expense,
        C3_Expense : C3_Expense,
        C4_Expense : C4_Expense,
        C5_Expense : C5_Expense
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
        C5R3 : C5R3,
        C1R4 : C1R4,
        C2R4 : C2R4,
        C3R4 : C3R4,
        C4R4 : C4R4,
        C5R4 : C5R4,
        C1R5 : C1R5,
        C2R5 : C2R5,
        C3R5 : C3R5,
        C4R5 : C4R5,
        C5R5 : C5R5,
        C1R6 : C1R6,
        C2R6 : C2R6,
        C3R6 : C3R6,
        C4R6 : C4R6,
        C5R6 : C5R6,
        C1R7 : C1R7,
        C2R7 : C2R7,
        C3R7 : C3R7,
        C4R7 : C4R7,
        C5R7 : C5R7,
        C1R8 : C1R8,
        C2R8 : C2R8,
        C3R8 : C3R8,
        C4R8 : C4R8,
        C5R8 : C5R8
    }

    let output = {
        totalExpense : totalExpense,
        value : variable
    }

    return(output);

}
module.exports = calculateLoss;