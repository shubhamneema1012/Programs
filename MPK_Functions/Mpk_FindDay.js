const Mpk_FindDay=(Day)=>{
    switch(Day){
        case 0:
            return("Sunday");
            break;
        case 1:
            return("Monday");
            break;
        case 2:
            return("Tuesday");
            break;
        case 3:
            return("Wednesday");
            break;
        case 4:
            return("Thursday");
            break;
        case 5:
            return("Friday");
            break;   
        case 6:
            return("Saturday");
            break;
        default:
            return("Please enter correct Day number");
    }
}
let c=Mpk_FindDay(5);
console.log(c);