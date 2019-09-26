document.addEventListener('DOMContentLoaded', function() {
  let navbarToggler = document.getElementById('nav-toggle');
  navbarToggler.addEventListener('click', function(e) {
    var navmenu = document.getElementsByClassName('nav-menu');
    for (var i = 0; i < navmenu.length; i++) {
      navmenu[i].classList.toggle('collapsed');
    }
  })
});