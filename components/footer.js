class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
            <path d="M 0,400 C 0,400 0,200 0,200 C 142.26666666666665,190 284.5333333333333,180 434,175 C 583.4666666666667,170 740.1333333333334,170 909,175 C 1077.8666666666666,180 1258.9333333333334,190 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#eef1f5ff" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>

        <div class="container" data-aos="fade-up">
            <a href="#" class="brand"><img src="assets/images/logo-footer.svg" alt="brand"></a>
            <div class="grid mt-2">
                <div class="footer-left">
                    <div class="w">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet odio a efficitur posuere. Maecenas ac pharetra mi.</p>
                    </div>
                    <div class="mt-4">
                        <div class="language-btn">
                            <div id="language-btm" class="lang-btm">
                                <a href="#">English</a>
                                <a href="#">日本語</a>
                            </div>
                            <img src="assets/images/global-white.svg" alt="language">
                        </div>
                    </div>
                </div>

                <div class="grid-4">
                    <ul class="footer-menu">
                        <li><a href="#">Company</a></li>
                        <!-- <li><a href="#">Services</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Contact</a></li> -->
                    </ul>
                    <ul class="footer-menu">
                        <li><a href="#">Services</a></li>
                        <!-- <li><a href="#">Digital Solutions</a></li>
                        <li><a href="#">Website Production</a></li>
                        <li><a href="#">System Development</a></li> -->
                    </ul>
                    <ul class="footer-menu">
                        <li><a href="#">Work</a></li>
                        <!-- <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Security Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li> -->
                    </ul>
                    <ul class="footer-menu">
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div class="divider mt-4"></div>
            <div class="footer-btm">
                <div class="copyright">
                    <span>© 2022, Azuwin Inc.</span>
                    <a href="#">Privacy</a>
                    <a href="#">Security</a>
                    <a href="#">Cookie</a>
                </div>
                <div class="socmed">
                    <a href="#"><img src="assets/images/fb.svg" alt="socmed"></a>
                    <a href="#"><img src="assets/images/ig.svg" alt="socmed"></a>
                    <a href="#"><img src="assets/images/twitter.svg" alt="socmed"></a>
                    <a href="#"><img src="assets/images/yt.svg" alt="socmed"></a>
                </div>
            </div>
        </div>
    </footer>
        `;
  }
}

customElements.define('footer-component', Footer)
