
$(document).ready(()=>{
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

   
    $('.to_up').on("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    $(".feedback__send").on('click', ()=>{
        let client_name = $('.input_client_name')[0].value;
        let client_contact = $('.input_client_contact')[0].value;
        let client_coment = $('.input_client_coment')[0].value;
        let client_budget = $('.styled-slider')[0].value;

        $('.modal__wrapper')[0].classList.add("show__modal_wrapper");
        $('.modal')[0].classList.add("show__modal");
        
        if(client_name && client_budget && client_coment && client_contact){
           $('.client_name').text(client_name);
           $('.client_contact').text(client_contact);
           $('.client_budget').text(client_budget);
           $('.client_coment').text(client_coment);
        }else{
            $('.client_name').text("Please enter all fields...");
           $('.client_contact').text("");
           $('.client_budget').text("");
           $('.client_coment').text("");
        }
        
    });

    function closeModal(){
        $('.modal__wrapper')[0].classList.remove("show__modal_wrapper");
        $('.modal')[0].classList.remove("show__modal");
    }

    $('.modal__wrapper').on("click", ()=>{ closeModal() });
    $('.close__modal').on("click", ()=>{ closeModal() });
    
});