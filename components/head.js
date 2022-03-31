class Head extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    
        
    
        `;
  }
}

customElements.define('head-component', Head)