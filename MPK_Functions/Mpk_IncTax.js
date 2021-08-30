 const Mpk_IncTax=(Sallry)=>{
       let Tax=0;
       if(Sallry<=250000){
           return(Tax);
       }
       else if(Sallry>250000 && Sallry<=500000){
            Tax=(Sallry*5)/100;
           return(Tax);
       }else if(Sallry>500000 && Sallry<=1000000){
        Tax=(Sallry*10)/100;
        return(Tax);
       }else if(Sallry>1000000 && Sallry<=2500000){
        Tax=(Sallry*20)/100;
        return(Tax);
       }else if(Sallry>2500000){
        Tax=(Sallry*25)/100;
        return(Tax);
       }else{
           return("Please enter correct value");
       }
   }
   let b=Mpk_IncTax(1200000);
   console.log(b);