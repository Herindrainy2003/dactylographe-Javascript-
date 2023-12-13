let time = document.getElementById('time')
let scores = document.querySelector('#scores')
let phrase = document.querySelector('.phrase')
let the_input = document.getElementById('the_input')
let restart_btn = document.getElementById('restart')

let timeInitiale = 1 * 60
let score = 0
let is_true = []

let is_time = setInterval(the_time , 1000)
let words  = "Vos pensées et vos sentiments façonnent votre vie. Il en sera toujours ainsi. C\'est garanti !"

    let tab_words = words.split('')
    
  // Créer des <span> pour chaque caractère de la phrase
  tab_words.forEach((caractere) => {
    let span = document.createElement('span');
    span.textContent = caractere;
      phrase.appendChild(span);

    });

the_input.addEventListener('input' ,(event)=>{
        let input_texte = event.target.value;
        let tab_caracter = input_texte.split('')
        
        tab_words.forEach((element , indice) =>{

           
            if(tab_caracter.length   === tab_words.length  ){
                
            clearInterval(is_time)
            
            timeInitiale = 1 * 60
             is_time = setInterval(the_time , 1000)
             time.textContent = timeInitiale
                the_input.value  = '' 
                
                //suprimer les couleurs 
                phrase.querySelectorAll('span').forEach(span => {
                    span.classList.remove('correct', 'incorrect');
                });       
        }
       
           let span = phrase.querySelectorAll('span')[indice]
           
             if(element === tab_caracter[indice]) {
                span.classList.add('correct')
                span.classList.remove('incorrect')
                scores.textContent = Math.floor(score++ / words.length)
            }else if(tab_caracter[indice] === undefined){
                span.classList.remove('incorrect' ,'correct')
            }else if(element !== tab_caracter[indice]){
                span.classList.add('incorrect')
                span.classList.remove('correct') 
                disabled_backspace()

                
            }else{
                span.classList.remove('correct')
                span.classList.remove('incorrect')
            }
 
        }) 
        
        
    })
    

function the_time(){
    
    timeInitiale--;
    if(timeInitiale > 0){
        let munites = Math.floor(timeInitiale / 60)
        let secondes = timeInitiale % 60
        time.textContent = `${munites} : ${secondes}`
        
    }else if(timeInitiale === 0){
    
        the_input.disabled = true
    
    }else{
        clearInterval(is_time) 
        the_input.value= ''
       
     }
   
}

restart_btn.addEventListener(('click'),function restart(){
    phrase.querySelectorAll('span').forEach(span => {
        span.classList.remove('correct', 'incorrect');
    });    
    is_time = setInterval(the_time , 1000)
    the_input.disabled = false
    the_input.value = ''
    timeInitiale = 1 * 60
    score = 0
    
})


function disabled_backspace(){
    the_input.addEventListener(('keydown') , function(event){
        if(event.key === 'Backspace'){
            event.preventDefault();
        }
    })
}
