// toggle nav item show and hide

const toggleBtn = document.getElementById('toggleBtn');
const navBar = document.querySelector('.navbar');
const barIcon = document.querySelector('#toggleBtn i');

toggleBtn.addEventListener('click',function(){
  if(!navBar.classList.contains('showNav') && !barIcon.classList.contains('fa-xmark')){
    navBar.classList.add('showNav');
    barIcon.classList.add('fa-xmark');
  }else {
    navBar.classList.remove('showNav');
    barIcon.classList.remove('fa-xmark');
  }
});