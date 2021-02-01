const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyup(event) {
    if (event.KeyCode === 32) {
        if (isJumping) {
        jump();
        }
    }
}

function jump(){
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
        //descendo
        let downInterval = setInterval(() >= {
            if (condition <= 0) {
                clearInterval (downInterval);
                isJumping = false; 
            } else {
            position -= 20;
            dino.style.botton = position + 'px';
            }
        },20);
          
        } else {
        //subindo
        position += 20;
        dino.style.botton = position + 'px';
        }
    },20);
} 

function creatCactus() {
    const cactus = document.createElement('div');
    left cactusPosition = 1000;
    left randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    left leftInterval = setInterval() => {
              
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 60) {
         //gameover
         clearInterval(leftInterval); 
         document.body.innerHTML = '<h1 class= "Game Over">Fim de Jogo</h1>';  
        }else {        
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        },20);

        setTimeout(creatCactus, randomTime);                
}

creatCactus();
document.addEventListener('Keyup',handleKeyup);