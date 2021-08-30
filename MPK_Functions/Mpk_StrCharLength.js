const Mpk_StrCharLength=(str)=>{
    let a=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)==" "){
            continue;
        }else{
            a++
        }
    }
    return(a);
}
let b=Mpk_StrCharLength("my name iis alkfln");
console.log(b);