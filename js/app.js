var button = document.querySelector('.btn-js');
var post = document.querySelector('.post-js');
var viewCount = document.querySelector('.count-js');
var twett = document.querySelector('.twett');
//var text = document.querySelector('.container-text-js');
var message = ''; //vacio
var maxLetter = 140; //n


post.addEventListener('keydown', validateLength);
post.addEventListener('keyup', validateLength);
button.removeEventListener('click', twittear);



function validateLength () {
     var numberLetters = post.value.length;
     if(numberLetters > maxLetter) {
         post.value = message ;
     }else {
         message = post.value
     }
     viewCount.value = post.value.length;
     button.addEventListener('click', twittear);

}

function twittear() { 
    twett.innerHTML = post.value;  
}

// var p = document.createElement('p');

// var contenido = document.createTextNode(twett);
// messeger.appendChild(p);
// p.appendChild(contenido);



