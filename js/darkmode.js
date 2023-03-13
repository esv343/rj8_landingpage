/* Boton, icono y texto para modo oscuro escritorio*/
const btn_darkMode = document.getElementById('dark-mode-btn');
const darkModeBtnIcon = document.getElementById('dark-mode-btn-icon');
const darkModeText = document.getElementById('dark_mode_text');

/* Boton, icono y texto para modo oscuro en menu offcanvas */
const btn_darkModeOffcanvas = document.getElementById('dark_mode_btn_oc');
const btn_darkModeOffcanvasIcon = document.getElementById('dark_mode_btn_oc_icon');
const btn_darkModeOffcanvasText = document.getElementById('dark_mode_btn_oc_text');
Text
const body = document.getElementById('body');
const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');
const cardPaypal = document.getElementById('card_paypal');
const cardBMAC = document.getElementById('card_bmac');
const offcanvasMenu = document.getElementById('offcanvas')


const classDark = 'bg-dark'
const borderLight = 'border-light'

btn_darkMode.addEventListener('click', function(){
    body.classList.toggle(classDark);
    body.classList.toggle('text-light');
    navbar.classList.toggle(classDark);
    footer.classList.toggle(classDark);
    cardPaypal.classList.toggle(classDark);
    cardPaypal.classList.toggle(borderLight);
    cardBMAC.classList.toggle(classDark);
    cardBMAC.classList.toggle(borderLight);

    darkModeBtnIcon.classList.toggle('fa-moon');
    darkModeBtnIcon.classList.toggle('fa-sun');

    if (darkModeText.innerHTML==='Dark Mode'){
        darkModeText.innerHTML = 'Light Mode'
    } else{
        darkModeText.innerHTML = 'Dark Mode'
    }
    
})


btn_darkModeOffcanvas.addEventListener('click', function(){
    body.classList.toggle(classDark);
    body.classList.toggle('text-light');
    navbar.classList.toggle(classDark);
    footer.classList.toggle(classDark);
    cardPaypal.classList.toggle(classDark);
    cardPaypal.classList.toggle(borderLight);
    cardBMAC.classList.toggle(classDark);
    cardBMAC.classList.toggle(borderLight);
    offcanvasMenu.classList.toggle(classDark);

    btn_darkModeOffcanvasIcon.classList.toggle('fa-moon');
    btn_darkModeOffcanvasIcon.classList.toggle('fa-sun');
    
    if (btn_darkModeOffcanvasText.innerHTML ==='Dark Mode'){
        btn_darkModeOffcanvasText.innerHTML = 'Light Mode'
    } else {
        btn_darkModeOffcanvasText.innerHTML = 'Dark Mode'
    }
})
