const idInput = document.querySelector('.userid');
const passwordInput = document.querySelector('.userpassword');

const Login = document.querySelector('.login-btn');
const Cancel = document.querySelector('.cancel-btn');

const popup = document.getElementById('Popup');


Login.addEventListener('click', () => {
    if (idInput.value != '' && passwordInput.value != '') {
        popup.classList.add('open-popup');
        document.querySelector('.container').style.opacity = 0.4;
    }
    else {
        alert('Please enter the esewa Id and Password.')
    }

});

Cancel.addEventListener('click',()=>{
    popup.classList.remove('open-popup');
    window.location = 'index.html';
});

function closePopup(){
    window.location = 'userBookingPage.html';
}


