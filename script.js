const form=document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


//show input error message
function showError(input,message){
 const formControl=input.parentElement;
 console.log(formControl)
 formControl.className='form-control error'
 const small=formControl.querySelector('small')
 small.innerText=message;
}


//show input success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
    
}

function isValidEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input,'Email is not valid')
    }
}

function checkRequired(inputArray){
    inputArray.forEach(function(input){
        console.log(input.value)
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}
function checkPasswordsMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'passwords do not match')
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1)
}

function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be atleast ${min} characters`)
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }else{
        showSuccess(input)
    }
}


form.addEventListener('submit',function(e){
    e.preventDefault()
    // if(username.value===''){
    //     showError(username,'Username is required')
    // }else {
    //     showSuccess(username)
    // }

    // if (email.value === '') {
    //     showError(email, 'Email is required')
    // }else if(!isValidEmail(email)){
    //     showError(email,'email is not valid')
    // }
    //  else {
    //     showSuccess(email)
    // }

    // if (password.value === '') {
    //     showError(password, 'password is required')
    // } else {
    //     showSuccess(password)
    // }

    // if (password2.value === '') {
    //     showError(password2, 'password2 is required')
    // } else {
    //     showSuccess(password2)
    // }

    checkRequired([username,email,password,password2])
    checkLength(username,3,12)
    checkLength(password,6,12)
    isValidEmail(email)
    checkPasswordsMatch(password,password2)
})

