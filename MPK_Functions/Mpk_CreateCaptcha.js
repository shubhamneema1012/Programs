const Mpk_CreateCaptcha=(Digit)=>{ 
     let Cdata="AbCdEfGhIjKlMnOpQrStUvWxYz1234567890";
     let captcha="";
      for(let i=0;i<Digit;i++){
        captcha=captcha+Cdata.charAt(Math.floor(Math.random()*(Cdata.length-1)));
     }
  return(captcha);
}
let a=Mpk_CreateCaptcha(6);
console.log(a);