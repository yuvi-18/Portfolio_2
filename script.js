const navTogle = document.querySelector('.navToggle'),
    navLinks = document.querySelectorAll('.nav__link');

navTogle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    })
})