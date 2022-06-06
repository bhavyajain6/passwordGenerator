let passwordInputs = ['@','#','$','%','&','*',1,2,3,4,5,6,7,8];
let password;
let passwordP = document.querySelector('#pswd');
function randomPasswordGenerator(){
    password = '';
    for(let i=0;i<passwordInputs.length;i++){
        let randomNumber = Math.floor(Math.random()*14);
        password += passwordInputs[randomNumber];
    }
    passwordP.style.display = "block";
    // passwordP.textContent = password;
    passwordP.innerHTML = password + " " +'<i class="fa fa-copy id="copy""></i>';
    passwordP.addEventListener('click',(e)=>{
        const content = passwordP.textContent;
        navigator.clipboard.writeText(content);
        alert('Password Copied!')
    })
}




