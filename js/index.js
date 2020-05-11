console.log('start');
// DOM getter
const user = document.querySelector('#user');
const labAdmin = document.querySelector('#lab-admin');
const overlay = document.querySelector('.popup_overlay');
const headText = document.querySelector('#popup_head');
const userCell = document.querySelector('#popup_pno');
const userOTP = document.querySelector('#popup_otp');
const wrongCell = document.querySelector('.cell_wrong');
const wrongOTP = document.querySelector('.otp_wrong');
const labId = document.querySelector('.popup_labno');
const wrongLabId = document.querySelector('.labId_wrong')
// console.log(headText.innerHTML)
function labEvent(){
    headText.innerHTML ='Admin-Login'
    user.style.left ='-55rem';
    labAdmin.style.left = '16%';
    overlay.style.width ='22rem';
    overlay.style.left = '16rem';
}
function userEvent(){
    headText.innerHTML ='User-Login'
    user.style.left= '16%';
    labAdmin.style.left='55rem'
    overlay.style.width ='17.5rem';
    overlay.style.left = '0rem'
    
}


// Dynamic - Place-Holder

window.onload = function () { 
    var email = new SuperPlaceholder({
        placeholders: ['xyz@abc.com', 'abx@mxp.com'],
        preText:'enterEmail: ',
        stay: 200,
        speed:100,
        element:'#user_mail',
     });
     var phNo = new SuperPlaceholder({
        placeholders: ['849632148', '6325478954'],
        preText:'enterCellNo: ',
        stay: 200,
        speed:100,
        element:'#user_phNo',
     });
     var popno = new SuperPlaceholder({
        placeholders: ['849632148', '6325478954'],
        preText:'Cell No.: ',
        stay: 200,
        speed:100,
        element:'#popup_pno',
     });

     var labId = new SuperPlaceholder({
        placeholders: ['Lab-1434','Lab-1211'],
        preText:'LabID.: eg ',
        stay: 200,
        speed:100,
        element:'#popup_labno',
     });
     email.init();
     phNo.init();
     popno.init();
     labId.init();
 }



var SuperPlaceholder = function(options) {  
    this.options = options;
    this.element = options.element
    this.placeholderIdx = 0;
    this.charIdx = 0;
    
  
    this.setPlaceholder = function() {
        placeholder = options.placeholders[this.placeholderIdx];
        var placeholderChunk = placeholder.substring(0, this.charIdx+1);
        document.querySelector(this.element).setAttribute("placeholder", this.options.preText + " " + placeholderChunk)
    };
    
    this.onTickReverse = function(afterReverse) {
      if (this.charIdx === 0) {
        afterReverse.bind(this)();
        clearInterval(this.intervalId); 
        this.init(); 
      } else {
        this.setPlaceholder();
        this.charIdx--;
      }
    };
    
    this.goReverse = function() {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.onTickReverse.bind(this, function() {
          this.charIdx = 0;
          this.placeholderIdx++;
          if (this.placeholderIdx === options.placeholders.length) {
            // end of all placeholders reached
            this.placeholderIdx = 0;
          }
        }), this.options.speed)
    };
    
    this.onTick = function() {
        var placeholder = options.placeholders[this.placeholderIdx];
        if (this.charIdx === placeholder.length) {
          // end of a placeholder sentence reached
          setTimeout(this.goReverse.bind(this), this.options.stay);
        }
        
        this.setPlaceholder();
      
        this.charIdx++;
      }
    
    this.init = function() {
      this.intervalId = setInterval(this.onTick.bind(this), this.options.speed);
    }
    
    this.kill = function() {
      clearInterval(this.intervalId); 
    }
}

// validation

const phoneReg = /^[6-9]\d{9}$/;
const otpReg = /^d{4}/;
const labReg = /^LAB-\d{4}/

user.onsubmit = ()=>{
    if(userCell.value.trim()===''){
        userCell.style.border = '2px solid #313131';
       
        return false;
    }
    else
    if(phoneReg.test(userCell.value)){
        wrongCell.innerHTML = '';
    }
    else{
        wrongCell.innerHTML = `${userCell.value} not a valid Phone Number`;
        return false;
    }
    if(userOTP.value.trim() === ""){
        // alert(`Username or Pasword can't be empty`);
        userOTP.style.border ="2px solid #313131";
        return false; //its important - as wewant to stay on the same page
    }else

    if(userOTP.value.trim().length !== 5 && !otpReg.test(userOTP.value)){
        wrongOTP.innerHTML = "Invalid OTP";
        return false;
    }
    else{
        wrongOTP.innerHTML = "";
        
        
    }
}

labAdmin.onsubmit = ()=>{
    if(labId.value.trim === ''){
        labId.style.border = '2px solid #313131';
       
        return false;
    }
    else 
    if(labReg.test(labId.value)){
        wrongLabId.innerHTML = '';
    }
    else{
        wrongLabId.innerHTML = `${labId.value} not a valid Lab_id`
    }
}