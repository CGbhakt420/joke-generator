
const btn = document.querySelector("#joke-btn");
const joke = document.querySelector("#joke");

function generateJoke(){
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function(){
        if(this.status=== 200 && this.readyState===4){
            joke.innerHTML = JSON.parse(this.responseText).value;
        }
        else{
            joke.innerHTML = 'Something went wrong (not funny)';
        }
    }
    xhr.send();
}



document.addEventListener('DOMContentLoaded', generateJoke);
btn.addEventListener('click', generateJoke);