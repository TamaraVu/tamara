//preloader
window.addEventListener('load', ()=>{
    document.querySelector('.preloader').style.display ="none";
});

//navButton
const navBtn = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

navBtn.addEventListener('click', ()=>{
    links.classList.toggle('show-links');
})

//fixed navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight);
    if(scrollHeight > navHeight ){
        navbar.classList.add('fixed');
    }else{
        navbar.classList.remove('fixed');
    }
});
//scroll links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        links.classList.remove('show-links');

        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = links.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed');
        let position = element.offsetTop - navHeight;
        if(!fixedNav){
            position = position;
        }
        if(navHeight > 64){
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top: position,
            behavior: 'smooth'
        });
    });
});





//control the video
document.querySelector('.video-switch').addEventListener('click', function(){
    let btn = document.querySelector('.video-switch-btn');
    if(!btn.classList.contains('btnSlide')){
        btn.classList.add('btnSlide');
        document.querySelector('.video-item').pause();
    }else{
        btn.classList.remove('btnSlide');
        document.querySelector('.video-item').play();
    }
})

//priceButton
const priceBtn = document.querySelectorAll('.navigation-button');
priceBtn.forEach((item)=>{
    item.addEventListener('click', function(){
        item.parentElement.parentElement.classList.toggle('change');
    });  
});

//display modal

const galleryIcons = document.querySelectorAll('.gallery-icon');
galleryIcons.forEach(function (icon){
    icon.addEventListener('click', function(event){
        event.preventDefault();
        console.log(event.target.parentElement);
        if(event.target.parentElement.classList.contains('gallery-icon')){
            let id = event.target.parentElement.dataset.id;

            const modal = document.querySelector('.work-modal');
            const modalItem = document.querySelector('.work-modal-item');

            modal.classList.add('work-modal-show');
            modalItem.style.backgroundImage = `url(tour-${id}.jpeg)`;
        }
    })
})

//hide modal
document.querySelector('.work-modal-close').addEventListener('click', function(){
    document.querySelector('.work-modal').classList.remove('work-modal-show');

});

//submit the form
document.querySelector('.contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.querySelector('.input-name').value;
    const email = document.querySelector('.input-email').value;
    const phone = document.querySelector('.input-phone').value;
    const message = document.querySelector('.form-textarea').value;
    
    
    let value = checkedEmpty(name, email, phone, message);
    console.log(value);

    if(value){
        showFeedback('Well done', 'success');
    }else{
        showFeedback('Some form values are empty', 'error')
    }
    

});
function checkedEmpty(name, email, phone, message){
    let result;
    if (name === '' || email === '' || phone === '' || message === ''){
        result = false;
    }else{
        result = true;
    }
    return result;

}

function showFeedback(text, type){
    let feedback = document.querySelector('.form-feedback');
    if (type === 'success'){
        feedback.classList.add('success');
        feedback.innerText = text;
        this.removeAlert('success');
    }else if(type === 'error'){
        feedback.classList.add('error');
        feedback.innerText = text;
        this.removeAlert('error');
    }
}

function removeAlert(type){
    setTimeout(function(){
        document.querySelector('.form-feedback').classList.remove(type);
    }, 3000);
}



  



