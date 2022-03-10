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

// Navbar on scroll

const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-colored');
    } else {
        navbar.classList.remove('nav-colored');
    }
};


// tab

const tabLink = document.querySelectorAll('.tab-link')
const tabTitle = document.querySelectorAll('.tab-title')
    // const content = document.querySelector('.content-body')

// tabLink.addEventListener('click', () => {
//     content.style.display === 'block' ? content.style.display = 'none' : content.style.display = 'block'
// })

// tabLink.forEach(tab => {
//     tab.addEventListener('click', () => {
//         console.log('oke')
//        tab.parentNode.classList.toggle('active')
//     })
// })


for (i = 0; i < tabTitle.length; i++) {

    tabTitle[i].onclick = function() {

        var contentClass = this.parentNode.className;

        for (i = 0; i < tabLink.length; i++) {
            tabLink[i].className = 'tab-link';
        }

        if (contentClass == 'tab-link') {
            this.parentNode.className = 'tab-link active';
        } else {
            this.parentNode.className = 'tab-link';
        }
    }
}

// function toggleAccordion() {
//     const itemToggle = this.getAttribute('aria-expanded');

//     for (let i = 0; i < tabLink.length; i++) {
//         tabLink[i].setAttribute('aria-expanded', 'false');
//     }

//     if (itemToggle == 'false') {
//         this.setAttribute('aria-expanded', 'true');
//     }
// }

// tabLink.forEach(item => item.addEventListener('click', toggleAccordion));

//   dropdown

const lang = document.querySelector('.dropbtn')
const openLang = document.querySelector('.language')

lang.addEventListener('click', () => {
    openLang.style.display === 'block' ? openLang.style.display = 'none' : openLang.style.display = 'block'
})

// nav active


navMenu.addEventListener('click', (e) => {
    const targetMenu = e.target;

    if (targetMenu.classList.contains('nav-link')) {

        const menuLinkActive = document.querySelector(".nav-link.active");

        if (menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {

            menuLinkActive.classList.remove('active');
        }

        targetMenu.classList.add('active');
    }
});