const Mpk_DammyText=(word)=>{
    let num=4;
    let arr=new Array();
    let str="";
    let a="abcdefghijklmnopqrtuvwxyz";
    for(let i=0;i<word;i++){
        let b=Math.floor(Math.random()*8)+1;
        for(j=0;j<b;j++){
            let d=Math.floor(Math.random()*a.length);
            str=str+a.charAt(d);
        }
        arr[i]=str;
        str="";
    }
    let dammy=arr.join(" ");
    return(dammy);
}
let a=Mpk_DammyText(10);
console.log(a);