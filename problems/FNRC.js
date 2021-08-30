// Finding the first non-repeated character
const FNC=(str)=>{
    let c=0;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<str.length;j++){
            if(str.charAt(i)==str.charAt(j)){
                c++;
            }
        }
        if(c==1){
            return(str.charAt(i));
        }else{
            c=0;
        }
    }
}
let a=FNC("shubham mahbuhs v");
console.log(a);