
$(document).ready(()=>{
    
    $('.styled-slider').on('input', (el)=>{
        $('.budget').text(el.target.value);
    });


    for (let e of $('input[type="range"].slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }


});