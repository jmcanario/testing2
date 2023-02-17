const template= document.createElement('template');
template.innerHTML =





class rotateCards extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: open});
        this.shadowRoot.appendChild(template.content.cloneNode('true'));
    }


}

window.customElements.define('rotate-cards', rotateCards)