const Mpk_SafeEmail=(email)=>{
    email=String(email);
    let a=email.split("@");
    let b=a[0];
    let c=email.length/2;
    b=b.slice(0,(b.length-c));
    let d=a[1];
    console.log(`${b}...@${d}`);
}
Mpk_SafeEmail("shubhamneema8760@gmail.com");