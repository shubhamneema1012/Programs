const Mpk_IntrestCalc=(Money,Months,intrest)=>{
    let intr=parseFloat((Money*intrest)/100);
    let intmoney=parseFloat(intr*Months);
    return intmoney;
}
console.log(Mpk_IntrestCalc(12000,15,3));