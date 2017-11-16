var button = document.querySelector('.btn-js');
var post = document.querySelector('.post-js');
var viewCount = document.querySelector('.count-js');
var twett = document.querySelector('.container-text-js'); 
var message = ''; 
var maxLetter = 145; 


post.addEventListener('keydown', validateLength);
post.addEventListener('keyup', validateLength);
post.addEventListener('keyup',disabledBtn )
button.addEventListener('click', twittear);


function validateLength () {
     var numberLetters = post.value.length;
     if(numberLetters>=maxLetter) {
         post.value = message ;
     }else {
         message = post.value;
     }
     viewCount.value = numberLetters;
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

function disabledBtn () {
    if (post.value.length == 0 || post.value.length>140){
        button.disabled=true;
    } else if (post.value.length > 0 ) {
        button.disabled=false;
    }        
}

