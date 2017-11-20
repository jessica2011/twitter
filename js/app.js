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
post.addEventListener('keydown', expand);


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
     var a = post.value;
     if (numberLetters>120 && numberLetters<130){
         viewCount.style.color='green';
     } else if (numberLetters>130 && numberLetters<=140){
        viewCount.style.color='red';
        a.style.backgroundColor = '#3366FF';
     } else  if (numberLetters<=120) {
        viewCount.style.color='blue';
     }
     viewCount.value = maxLetter - numberLetters;
     
}

function twittear(event) { 
    //twett.innerHTML = post.value;  
    if(post.value) {
        var p = document.createElement('p');
        p.textContent = post.value +'  ' +time();
        twett.appendChild(p);
        post.value = '';
    }
}


function expand(){
var el = this;
setTimeout(function(){
el.style.cssText = 'height:auto; padding:0';
el.style.cssText = 'height:' + el.scrollHeight + 'px';
},0);
}

/*hora*/ 
function time() {
	var date = new Date();
	var hours = date.getHours();
	var min = date.getMinutes();
	var time;
	if (min < 10) {
		min = '0' + min;
	}
	if (hours >= 12 && hours <= 24) {
		time = hours + ':' + min + ' PM';
	} else {
		time = hours + ':' + min + ' AM';
	}
	return time;
}
