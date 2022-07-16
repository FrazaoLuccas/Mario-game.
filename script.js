const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const over = document.querySelector('.game-over');
const bnt = document.querySelector('.refresh');



const jump = () => {
mario.classList.add('jump');

setTimeout(() => {
    mario.classList.remove('jump');
}, 800);
}




const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition)
    
    if (pipePosition <= 125 && pipePosition > 0 && marioPosition < 90 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px';

        over.style.display = 'block'; 




        clearInterval(loop);
    }
  

}, 10);


function refresh (){
    location.reload();
}


document.addEventListener('keydown',jump);



