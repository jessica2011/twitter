var button = document.querySelector('.btn-js');
var post = document.querySelector('.post-js');
var viewCount = document.querySelector('.count-js');
var twett = document.querySelector('.container-text-js'); 
var message = ''; 
var maxLetter = 140; 


post.addEventListener('keydown', validateLength);
post.addEventListener('keyup', validateLength);
//post.addEventListener('keyup',disabledBtn )
button.addEventListener('click', twittear);


function validateLength () {
     var numberLetters = post.value.length;
     if(numberLetters <= 0 || numberLetters>maxLetter) {
        button.disabled=true;
        button.classList.remove('active-btn');
        button.classList.add('btn');
     }else if (numberLetters > 0 || numberLetters<maxLetter ) {
         button.disabled=false;
         button.classList.add('active-btn');
         button.classList.remove('btn');
     }
     
     if (numberLetters>120 && numberLetters<130){
         viewCount.style.color='green';
     } else if (numberLetters>130 && numberLetters<=140){
        viewCount.style.color='red';
     } else  if (numberLetters<=120) {
        viewCount.style.color='black';
     }
     viewCount.value = maxLetter - numberLetters;
     
}

function twittear(event) { 
    //twett.innerHTML = post.value;  
    if(post.value) {
        var p = document.createElement('p');
        p.textContent = post.value;
        twett.appendChild(p);
        post.value = '';
    }
}



