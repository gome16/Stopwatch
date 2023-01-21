let display = document.getElementById('time'); 
let starter = document.getElementById('start');
let stoper = document.getElementById('stop');
let reseter = document.getElementById('reset');

let timerId = null;
let elapsed = 0;

function timeTostring(timer){
  const ms = timer % 1000
  const s = Math.floor(timer/ 1000) % 60;
  const m = Math.floor(timer/ 1000 / 60) % 60;
  const h= Math.floor(timer/ 1000 / 600) % 60;

  const zeropaddingMs = ms.toString().padStart(3,'0');
  const zeropaddingS = s.toString().padStart(2,'0');
  const zeropaddingM = m.toString().padStart(2,'0');
  const zeropaddingH = h.toString().padStart(2,'0');

  return `${zeropaddingH}:${zeropaddingM}:${zeropaddingS}:${zeropaddingMs}`
}


starter.addEventListener('click',function() {

  starter.disabled = true;
  reseter.disabled = true;

  let started = new Date();
    timerId = setInterval(function() {
    let current = Date.now();
    elapsed =  current - started;  
    
    display.textContent =  timeTostring(elapsed)

    }, 10);
});

stoper.addEventListener('click',function() {
  starter.disabled = false;
  reseter.disabled = false;
  clearInterval(timerId);
});

reseter.addEventListener('click',function() {

  display.textContent = `${0}${0}:${0}${0}:${0}${0}.${0}${0}${0}` 
   
});