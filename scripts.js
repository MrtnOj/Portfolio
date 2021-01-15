 const hamburger = document.querySelector('#nav-hamburger');
 const mobileNavBar = document.querySelector('#mobile-nav');
 const mobileNavLink = document.querySelectorAll('.mobile-nav__link');

 const hamburgerClicked = (event) => {
    if (mobileNavBar.style.display === 'none') {
        mobileNavBar.style.display = 'block'
    } else {
        mobileNavBar.style.display = 'none'
    }
 }

 const hideMobileNav = event => {
    mobileNavBar.style.display = 'none'
 }

 hamburger.addEventListener('click', hamburgerClicked);
 
 for (let i = 0 ; i < mobileNavLink.length; i++) {
    mobileNavLink[i].addEventListener('click', hideMobileNav) ; 
 }