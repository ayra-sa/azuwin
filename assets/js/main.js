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

const navMenu = document.querySelector(".nav-menu");

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