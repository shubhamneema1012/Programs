const Mpk_LeapYear=(year)=>{
    if(year%4==0){
        return(true);
    }else{
        return(false);
    }
}
let b=Mpk_LeapYear(2011);
console.log(b);