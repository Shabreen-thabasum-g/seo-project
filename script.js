const menuButton=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
menuButton?.addEventListener('click',()=>{const isOpen=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));menuButton.textContent=isOpen?'×':'☰'});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰'}));
document.querySelector('#booking-form')?.addEventListener('submit',event=>{event.preventDefault();const name=new FormData(event.currentTarget).get('name');event.currentTarget.querySelector('.form-message').textContent=`Thank you, ${name}! We’ll be in touch to confirm your table.`;event.currentTarget.reset()});
