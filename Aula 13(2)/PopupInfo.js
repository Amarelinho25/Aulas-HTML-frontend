class PopupInfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const container = document.createElement('div');
        container.setAttribute("class", "container");

        const info = document.createElement('span');
        info.setAttribute("class", "info");

        const img = document.createElement('img');
        img.setAttribute("ALT", "Icone de pop-up");
        img.setAttribute("width", "100px");

        const texto = this.getAttribute("texto");
        info.textContent = texto;

        let imgUrl

        if(this.hasAttribute("img   ")) {
            imgUrl = this.getAttribute("img");
        }else {
            imgUrl = "image.png";
        }

        img.src = imgUrl;

        container.appendChild(img);
        container.appendChild(info);

        this.appendChild(container);
    }

}

customElements.define("popup-info", PopupInfo);