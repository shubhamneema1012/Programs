const Mpk_PrimeNumber=(num)=>{
    let c=0;
    for(let i=2;i<num;i++){
        if(num%i==0){
            c++;
            break;
        }
    }
    if(c==0){
        return("Prime");
    }
    else{
        return("Not Prime");
    }
}
console.log(Mpk_PrimeNumber(11));