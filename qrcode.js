const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('qr-img');
const qrbutton = document.getElementById('qr-button');
//console.log(qrbutton,qrimg,qrinput);

qrbutton.addEventListener('click',()=>{
    const inputValue = qrinput.value;
  // console.log(inputValue);
   if(inputValue===''){
    alert('Please enter valid URL');
    return;
   }else{
    // goqr.me/api/    for src link 
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrimg.alt=`QR code for ${inputValue}`;
   }
});