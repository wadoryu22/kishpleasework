const toggleBtn = document.querySelector('.toggle_btn')
const dropDownMenu = document.querySelector('.dropdown_menu')
let toggleOpen = false;

toggleBtn.addEventListener('click', () => {
   if(!toggleOpen) {
      toggleBtn.classList.add('open');
      toggleOpen = true;
      dropDownMenu.classList.toggle('open');   
   } else {
      toggleBtn.classList.remove('open');
      toggleOpen = false;
      dropDownMenu.classList.toggle('open'); 
   }
});