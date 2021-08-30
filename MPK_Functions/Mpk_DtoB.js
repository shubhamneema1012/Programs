const Mpk_DtoB=(dn)=>{
let b=new Array();
let i=0;
let rem=0;
while(dn!=1){
    rem=dn%2;
    if(rem==0)
    {
        b[i]=0;
        i++;
    }else{ 
        b[i]==1;
        i++;
    }
    dn=dn/2;
}
b[i]=1;
for(let j=b.length-1;j>=0;j--){
    console.log(b[j]);
}}
Mpk_DtoB(521);