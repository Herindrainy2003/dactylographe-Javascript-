let phrase = document.querySelector('#phrase')
let input = document.querySelector('#input')

let mot = 'juste une phrase'


function start_typing(){
    let tab_mot = mot.split('')
    tab_mot.forEach(element =>{
        let span = document.createElement('span');
        span.textContent = element ;
        phrase.appendChild(span)
    });
   

    input.addEventListener('input' ,(event)=>{
        let input_value = event.target.value;
        let tab_input = input_value.split('') 
       
        
        tab_mot.forEach((caractere, indice)=>{
            let span = document.querySelectorAll('span')[indice]
            if(tab_input[indice] === undefined){
                span.classList.remove('incorrect' , 'correct')
            }else if(caractere === tab_input[indice]){
                span.classList.add('correct')
                span.classList.remove('incorrect')
               
            }else{
                span.classList.add('incorrect')
                span.classList.remove('correct')
            }
        })
    })
}

start_typing()