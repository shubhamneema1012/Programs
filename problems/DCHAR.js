const DCHAR=(str,char)=>{
let a=0;
    for(i=0;i<=str.length;i++){
        if(char==str.charAt(i)){
            a++;
        }
    }
    return(a);
}
let b=DCHAR("my name is shubham neema","m");
console.log(b);
