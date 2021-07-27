// colocamos todas as funções e variáveis dentro de uma nova função (clock) para que as variáveis não estejam no escopo global.


const clock = () => {
    const getTimeFromSeconds = (seconds) => {
        const data = new Date(seconds*1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;
    
    const startClock = () => {
        timer = setInterval(() => {
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds)
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('start')) {
            clock.classList.remove('pause');
            clearInterval(timer);
            startClock();
        }
    
        if(el.classList.contains('stop')) {
            clearInterval(timer);
            clock.classList.add('pause');
        }
    
        if(el.classList.contains('clear')){
            clock.classList.remove('pause');
            clearInterval(timer);
            clock.innerText = '00:00:00';
            seconds = 0;
        }
    })
}
clock();


/*
aqui a primeira solução: 
---> essas variáveis já não são necessárias, pois já chamamos nos eventos

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const clear = document.querySelector('.clear');

----> aqui a solução chamando os clicks de maneira independente
start.addEventListener('click', function(event){
    clock.classList.remove('pause');
    clearInterval(timer);
    startClock();
});

stop.addEventListener('click', stopClock = () => {
    clearInterval(timer);
    clock.classList.add('pause');
});

clear.addEventListener('click', clearClock = () => {
    clock.classList.remove('pause');
    clearInterval(timer);
    clock.innerText = '00:00:00';
    seconds = 0;

});
*/
