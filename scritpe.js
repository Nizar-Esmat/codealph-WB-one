   const toggleicon = document.querySelector('.toogle-icon');

   toggleicon.addEventListener('click' , ()=>{
    toggleicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
   })

   window.onscroll = function () {
      var navLinks = document.querySelectorAll('nav a');
      var logo = document.querySelector('.toggle .toogle-icon'); // Target the icon
  
      if (document.body.scrollTop > 777 || document.documentElement.scrollTop > 777) {
          logo.style.color = "#754ef9";
          navLinks.forEach(function (link) {
              link.style.color = "#754ef9";
          });
      } else {
          logo.style.color = "#fff";
          navLinks.forEach(function (link) {
              link.style.color = "#fff";
          });
      }
  };
  