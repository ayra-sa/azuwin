// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const hero = document.querySelector(".hero")
// const main = document.querySelector(".main")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // hero.classList.toggle('on')
    // main.classList.toggle('on')
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    // hero.classList.remove('on')
    // main.classList.remove('on')
}


// tab
const openTab = (evt, tabName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

//   dropdown

const lang = document.querySelector('.dropbtn')
const openLang = document.querySelector('.language')

lang.addEventListener('click', () => {
    openLang.style.display === 'block' ? openLang.style.display = 'none' : openLang.style.display = 'block'
})

// nav active


navMenu.addEventListener('click', (e) => {
    const targetMenu = e.target;

    if(targetMenu.classList.contains('nav-link')) {
            
        const menuLinkActive = document.querySelector(".nav-link.active");

        if(menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {

            menuLinkActive.classList.remove('active');
        }

        targetMenu.classList.add('active');
    }
});