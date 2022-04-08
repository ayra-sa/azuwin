class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar" data-aos="zoom-up">
        <div class="nav-bg"></div>
        <div class="container">
            <div class="navbar-wrap">
                <a href="index.html" class="brand">
                    <img src="assets/images/logo.svg" alt="brand">
                </a>

                <ul class="nav-menu">
                    <li><a href="company.html" class="nav-link">Company</a></li>
                    <li>
                        <div class="dropdown-menu">
                            <a href="#" class="nav-link" id="service-link">Services</a>
                            <div class="sub-wrap">
                                <div class="sub-menu">
                                    <a href="#" class="nav-link">Digital System</a>
                                    <a href="#" class="nav-link">Website Production</a>
                                    <a href="#" class="nav-link">System Development</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="work.html" class="nav-link">Work</a></li>
                    <li>
                        <div class="dropdown">
                            <img src="assets/images/global.svg" alt="icon" class="dropbtn">
                            <div class="language" id="langDropdown">
                                <a href="#">English</a>
                                <a href="#">日本語</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#contact">
                            <button class="btn btn-navbar">Contact</button>
                        </a>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </div>
    </nav>
    
    `;
  }
}

customElements.define('navbar-component', Navbar)
