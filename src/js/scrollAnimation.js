$(document).ready(()=>{

    const show_el = $("[data-anim]");
    const show_text = $("[text-anim]");
    const show_opacity = $("[opacity-anim]");
    const show_border = $("[border-anim]");
    const header = $('.header__topText');
    const logo = $('.logo__header');
    const header_links = $('.header__menu_links');
    const stand = $('.stand');
        $(window).on("scroll", ()=>{
            scrollHandler();
        });

    function scrollHandler(){
        for(let i=0; i<show_el.length; i++){
            let show_distance;
            let isShow = show_el[i].classList.contains("active-"+show_el[i].getAttribute("data-anim"));
            let el_height = show_el[i].offsetHeight;
            if(el_height > window.innerHeight) {
                show_distance = window.innerHeight / 2;
            } else {show_distance = el_height / 1;}
            let el_rect = show_el[i].getBoundingClientRect().top - window.innerHeight;
            setTimeout(()=>{
                if(isShow){
                    // if(el_rect > -50 || el_rect < window.innerHeight * -1 - el_height - 50){
                    //     show_el[i].classList.remove("active-"+show_el[i].getAttribute("data-anim"));
                    // }
                }
                else{
                    if(el_rect + show_distance < 0 && el_rect > window.innerHeight * -1 - el_height + show_distance){
                        show_el[i].classList.add("active-"+show_el[i].getAttribute("data-anim"));
                    }
                }
            }, i*200);
        };
        for(let i=0; i<show_text.length; i++){
            let show_distance;
            let isShow = show_text[i].classList.contains("active-"+show_text[i].getAttribute("text-anim"));
            let el_height = show_text[i].offsetHeight;
            show_distance = el_height / 100;
            let el_rect = show_text[i].getBoundingClientRect().top - window.innerHeight;
                    if(isShow){
                        // if(el_rect > 100 || el_rect < window.innerHeight * -1 - el_height - 50){
                        //     show_text[i].classList.remove("active-"+show_text[i].getAttribute("text-anim"));
                        // }
                    }
                    else{
                        if(el_rect + show_distance < 0 && el_rect > window.innerHeight * -1 - el_height + show_distance){
                            show_text[i].classList.add("active-"+show_text[i].getAttribute("text-anim"));
                        }
                    }
        };
        for(let i=0; i<show_opacity.length; i++){
            let show_distance;
            let isShow = show_opacity[i].classList.contains("active-"+show_opacity[i].getAttribute("opacity-anim"));
            let el_height = show_opacity[i].offsetHeight;
            show_distance = el_height / 10;
            let el_rect = show_opacity[i].getBoundingClientRect().top - window.innerHeight;
                    if(isShow){
                        // if(el_rect > 100 || el_rect < window.innerHeight * -1 - el_height - 50){
                        //     show_opacity[i].classList.remove("active-"+show_opacity[i].getAttribute("opacity-anim"));
                        // }
                    }
                    else{
                        if(el_rect + show_distance < 0 && el_rect > window.innerHeight * -1 - el_height + show_distance){
                            show_opacity[i].classList.add("active-"+show_opacity[i].getAttribute("opacity-anim"));
                        }
                    }
        };
        for(let i=0; i<show_border.length; i++){
            let show_distance;
            let isShow = show_border[i].classList.contains("active-"+show_border[i].getAttribute("border-anim"));
            let el_height = show_border[i].offsetHeight;
            show_distance = el_height / 1;
            let el_rect = show_border[i].getBoundingClientRect().top - window.innerHeight;
                    if(isShow){
                        // if(el_rect > 100 || el_rect < window.innerHeight * -1 - el_height - 50){
                        //     show_border[i].classList.remove("active-"+show_border[i].getAttribute("border-anim"));
                        // }
                    }
                    else{
                        if(el_rect + show_distance < 0 && el_rect > window.innerHeight * -1 - el_height + show_distance){
                            show_border[i].classList.add("active-"+show_border[i].getAttribute("border-anim"));
                        }
                    }
        };
        if(window.scrollY > 10) header[0].classList.add('header__scrolling');
        else header[0].classList.remove('header__scrolling');

        if(window.scrollY > 200) logo[0].style.transform="translateY(0)";
        else logo[0].style.transform="translateY(200%)";

        if(window.scrollY > 840){
            header_links[0].style.transform="translateY(0)";
            stand[0].classList.add('stand-animation');
        }
        else{
            header_links[0].style.transform="translateY(200%)";
            stand[0].classList.remove('stand-animation');
        }
    }

    scrollHandler();

});
