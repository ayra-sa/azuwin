class Contact extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="section" id="contact">
        <div class="decor bottom d-left">
            <img src="assets/images/ellipse-decor.svg" alt="decor">
        </div>
        <div class="decor btm">
            <img src="assets/images/ellipse-decor2.svg" alt="decor">
        </div>

        <div class="container">
            <div class="contact" data-aos="fade-up" data-aos-duration="1000">
                <h1 class="title">CONTACT</h1>
                <h2 class="small-title">Let's Get In Touch</h2>
                <form action="" method="POST" id="form" name="contactForm" class="contact-form mt-4">
                    <div class="grid">
                        <div class="input-control">
                            <input type="text" name="company" id="comp" placeholder="Company name">
                            <div class="error"></div>
                        </div>
                        <div class="input-control">
                            <input type="text" name="name" id="name" placeholder="Your name">
                            <div class="error"></div>
                        </div>
                        <div class="input-control">
                            <input type="email" name="email" id="email" placeholder="Your email">
                            <div class="error"></div>
                        </div>
                        <div class="input-control">
                            <input type="tel" name="phone" id="phone" placeholder="Phone number">
                            <div class="error"></div>
                        </div>
                    </div>
                    <div class="input-control">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                        <div class="error"></div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">Send Message</button>
                </form>
                <div class="danger">Fields cannot be empty! 👆</div>
                <div class="success">Your Message Successfully Sent 👍</div>
            </div>
        </div>
        <div class="decor" style="left: 5%; top: -8%;"><img src="assets/images/decor.svg" alt="decor"></div>
        <div class="decor btm"><img src="assets/images/decor2.svg" alt="decor"></div>
    </section>
        `
    }
}

customElements.define('contact-component', Contact)