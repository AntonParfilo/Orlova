
$(document).ready(()=>{
    // ####################### HTML RANGE
    $('.budget').text($('.styled-slider')[0].value);
    $('.styled-slider').on('input', (el)=>{
        $('.budget').text(el.target.value);
    });
    for (let e of $('input[type="range"].slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    }

    // ####################### UP BUTTON
    $('.to_up').on("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ####################### MODAL WINDOW
    $(".feedback__send").on('click', ()=>{
        let client_name = $('.input_client_name')[0].value;
        let client_contact = $('.input_client_contact')[0].value;
        let client_coment = $('.input_client_coment')[0].value;
        let client_budget = $('.styled-slider')[0].value;

        if(client_name && client_budget && client_coment && client_contact){
             $('.budget__error')[0].style.opacity="0";
           $('.client_name').text(client_name);
           $('.client_contact').text(client_contact);
           $('.client_budget').text(client_budget);
           $('.client_coment').text(client_coment);
           $('.modal__wrapper')[0].classList.add("show__modal_wrapper");
           $('.modal')[0].classList.add("show__modal");
        }else{
           $('.budget__error')[0].style.opacity="1";
        }
        
    });

    function closeModal(){
        $('.modal__wrapper')[0].classList.remove("show__modal_wrapper");
        $('.modal')[0].classList.remove("show__modal");
    }

    $('.modal__wrapper').on("click", ()=>{ closeModal() });
    $('.close__modal').on("click", ()=>{ closeModal() });
    
});