console.log('start');
// DOM getter
const user = document.querySelector('#user');
const labAdmin = document.querySelector('#lab-admin');
const overlay = document.querySelector('.popup_overlay');
const headText = document.querySelector('#popup_head');

console.log(headText.innerHTML)
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