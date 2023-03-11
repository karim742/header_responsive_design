// toggle nav item show and hide

const toggleBtn = document.getElementById('toggleBtn');
const navBar = document.querySelector('.navbar');
const barIcon = document.querySelector('#toggleBtn');

toggleBtn.addEventListener('click',function(){
  if(!navBar.classList.contains('showNav')){
    navBar.classList.add('showNav');
    barIcon.innerHTML = '<i class="fa-solid fa-bars-staggered text-gray-400 text-xl"></i>'
  }else {
    navBar.classList.remove('showNav');
    barIcon.innerHTML = '<i class="fa-solid fa-bars text-gray-400 text-xl"></i>'
  }
});