$(document).ready(()=>{

    const show_faces = $("[data-anim]");
    const show_text = $("[text-anim]");
    const show_opacity = $("[opacity-anim]");
    const show_border = $("[border-anim]");
    const header = $('.header__topText')[0];
    const logo = $('.logo__header')[0];
    const header_links = $('.header__menu_links');
    const stand = $('.stand')[0];

    $(window).on("scroll", ()=>{
        scrollHandler();
    });

    function scrollHandler(){
        // ################# ANIMATION FACES
        for(let i=0; i<show_faces.length; i++){
            let show_distance;
            let el_height = show_faces[i].offsetHeight;
            if(el_height > window.innerHeight) {
                show_distance = window.innerHeight / 2;
            } else {show_distance = el_height / 4;}
            let el_rect = show_faces[i].getBoundingClientRect().top - window.innerHeight;
            setTimeout(()=>{
                if(el_rect + show_distance < 0 && el_rect > window.innerHeight * -1 - el_height + show_distance){
                    show_faces[i].classList.add("active-"+show_faces[i].getAttribute("data-anim")); 
                }
            }, i*200);
        };
        // ################# ANIMATION TEXT
        for(let i=0; i<show_text.length; i++){
            let show_distance;
            let isShow = show_text[i].classList.contains("active-"+show_text[i].getAttribute("text-anim"));
            let el_height = show_text[i].offsetHeight;
            show_distance = el_height / 100;
            let el_rect = show_text[i].getBoundingClientRect().top - window.innerHeight;
            if(el_rect + show_distance < 0 && el_rect > window.innerHeight * -1 - el_height + show_distance){
                show_text[i].classList.add("active-"+show_text[i].getAttribute("text-anim"));
            }
      
        };
        // ################# ANIMATION OPACITY ELEMENTS
        for(let i=0; i<show_opacity.length; i++){
            let show_distance;
            let el_height = show_opacity[i].offsetHeight;
            show_distance = el_height / 10;
            let el_rect = show_opacity[i].getBoundingClientRect().top - window.innerHeight;
            if(el_rect + show_distance < 0 && el_rect > window.innerHeight * -1 - el_height + show_distance){
                show_opacity[i].classList.add("active-"+show_opacity[i].getAttribute("opacity-anim"));
            }
        };
        // ################# ANIMATION LINES
        for(let i=0; i<show_border.length; i++){
            let show_distance;
            let el_height = show_border[i].offsetHeight;
            show_distance = el_height / 1;
            let el_rect = show_border[i].getBoundingClientRect().top - window.innerHeight;
            if(el_rect + show_distance < 0 && el_rect > window.innerHeight * -1 - el_height + show_distance){
                show_border[i].classList.add("active-"+show_border[i].getAttribute("border-anim"));
            }
        };
        // ################# ANIMATION HEADER
        if(window.scrollY > 10) header.classList.add('header__scrolling');
        else header.classList.remove('header__scrolling');

        // ################# ANIMATION HEADER LOGO
        if(window.scrollY > 200) logo.style.transform="translateY(0)";
        else logo.style.transform="translateY(200%)";

        // ################# ANIMATION HEADER LINKS
        let header_links_rect = header_links[1].getBoundingClientRect().top;
        if(header_links_rect < 62){
            header_links[0].style.transform="translateY(0)";
            stand.classList.add('stand-animation');
        }
        else{
            header_links[0].style.transform="translateY(200%)";
            stand.classList.remove('stand-animation');
        }
    }

    scrollHandler();

});
