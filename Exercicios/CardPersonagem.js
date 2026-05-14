class CardPersonagem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const container = document.createElement('div');
        container.setAttribute("class", "container");

        const img = document.createElement('img');
        img.setAttribute("ALT", "Icone de personagem");
        img.setAttribute("width", "200px");

        const nome = document.createElement('h2');
        nome.textContent = this.getAttribute('nome');

        const level = document.createElement('p');
        level.textContent = `Level: ${this.getAttribute('level')}`;

        let imgUrl

        if(this.hasAttribute("img")) {
            imgUrl = this.getAttribute("img");
        } else {
            imgUrl = "steve.png";
        }

        if(this.hasAttribute("img")) {
            imgUrl = this.getAttribute("img");
        } else {
            imgUrl = "alex.png";
        }


        img.src = imgUrl;

        container.appendChild(img);
        container.appendChild(nome);
        container.appendChild(level);

        this.appendChild(container);
    }
}

customElements.define("card-personagem", CardPersonagem);