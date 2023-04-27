export const checkisEmpty=(name,value,showErrorMessage)=>{
    console.log(name,value);
    if(value.length<=3){
      showErrorMessage((errorMessage)=>({...errorMessage,[name]: value.length===0?`please enter ${name}`:`please enter valid ${name}`}));
      return;
    }else{
      showErrorMessage((errorMessage)=>({...errorMessage,[name]: ""}));
      return;
    }
    
  }
export const validateEmail=(email,showErrorMessage)=>{
  let  validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log("here");
  console.log(email);
  console.log(email.match(validRegex));
   if (!(email.match(validRegex))) {
    showErrorMessage((errorMessage)=>({...errorMessage,email: "please enter valid email"}));
  } 
  
  }