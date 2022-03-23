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
const btnNavbar = document.querySelector('.btn-navbar')

navLink.forEach(n => n.addEventListener("click", closeMenu));
btnNavbar.addEventListener('click', closeMenu)

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    // hero.classList.remove('on')
    // main.classList.remove('on')
}

// Navbar on scroll

const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 100) {
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


//   dropdown

const lang = document.querySelector('.dropbtn')
const openLang = document.querySelector('.language')

lang.addEventListener('click', () => {
    openLang.style.display === 'block' ? openLang.style.display = 'none' : openLang.style.display = 'block'
})

const langLink = document.querySelectorAll('.language a')

langLink.forEach(l => l.addEventListener('click', () => {
    openLang.style.display = 'none'
}))

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

//  from validation

const form = document.getElementById('form');
const namef = document.getElementById('name');
const comp = document.getElementById('comp');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const msg = document.getElementById('message')
const danger = document.querySelector('.danger')
const success = document.querySelector('.success')

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('er');
    inputControl.classList.remove('scs')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('scs');
    inputControl.classList.remove('er');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = namef.value.trim();
    const emailValue = email.value.trim();
    const companyValue = comp.value.trim();
    const phoneValue = phone.value.trim();
    const msgValue = msg.value.trim();

    if(usernameValue === '') {
        setError(namef, 'Name is required!');
    } else {
        setSuccess(namef);
    }

    if(companyValue === '') {
        setError(comp, 'Company is required!');
    } else {
        setSuccess(comp);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone is required!');
    } else {
        setSuccess(phone);
    }

    if(emailValue === '') {
        setError(email, 'Email is required!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(msgValue === '') {
        setError(msg, 'Message is required!')
    } else {
        setSuccess(msg)
    }
};


// send mail

const sendMail = (params) => {
    let tempParams = {
        from_name: document.getElementById("name").value,
        formMail: document.getElementById('email').value,
        formCompany: document.getElementById('comp').value,
        message: document.getElementById('message').value
    }

    emailjs.send('service_50ic9i6', 'template_felt79m', tempParams)
        .then((res) => {
            console.log('succes', res)
        })
}

const my = () => {
    danger.classList.remove('active')
    success.classList.add('active')
}

const handle = () => {
    if (namef.value.trim() === '' || email.value.trim() === '' || comp.value.trim() === '' || phone.value.trim() === '' || msg.value.trim() === '') {
        // validateInputs()

    // setError(namef, 'Name is required!');
    // setError(comp, 'Company is required!');
    // setError(phone, 'Phone is required!');
    // setError(email, 'Email is required!');
    // setError(msg, 'Message is required!')
    // form.reset()
        danger.classList.add('active')
        success.classList.remove('active')
    } else {
        sendMail()
        setTimeout(my, 1500)
        form.reset()
        // setSuccess(namef);
        // setSuccess(comp);
        // setSuccess(phone);
        // setSuccess(email);
        // setSuccess(msg)
    
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs()
    handle()
    // form.reset()
})