// grabbing stuff
const form = document.querySelector('.email-form');
const input = document.querySelector('.email');
const error = document.querySelector('.error');
const errorMsg = document.createElement('p');
//events
form.addEventListener('submit' , e => { 
    e.preventDefault();
    if(!validateEmail(input.value)){ 
        input.style.border = '2px solid #fb6662'
        error.style.opacity = '1';
        errorMsg.innerText = 'Please provide a valid email';
        errorMsg.classList.add('errorMsg')
        form.appendChild(errorMsg);
        
    }
})
//functions
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
