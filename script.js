
fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {
        creationHtml(data);
    })
    .catch(error => {
        console.error('Erreur de chargement des données JSON:', error);
    });

function creationHtml(data) {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const produits = document.createElement('h2');
    produits.setAttribute("id", "produits");
    produits.textContent = "Produits";
    main.appendChild(div1);
    div1.appendChild(produits);


    const services = document.createElement('h2');
    services.textContent = "Services";
    services.setAttribute("id", "services");
    main.appendChild(div2);
    div2.appendChild(services);

    const temoignages = document.createElement('h2');
    temoignages.textContent = "Témoignages";
    temoignages.setAttribute("id", "temoignages");
    main.appendChild(div3);
    div3.appendChild(temoignages);

    const entreprise = data.entreprise;
    const header = document.querySelector('header');
    const nomCommercial = document.querySelector('h1');
    nomCommercial.textContent = entreprise.nomCommercial;
    const phraseAccroche = document.createElement('p');
    phraseAccroche.textContent = entreprise.phraseAccroche;
    header.appendChild(phraseAccroche);
    const boutonAppelAction = document.createElement('button');

    boutonAppelAction.setAttribute("id", "contact-form"); 
    boutonAppelAction.addEventListener('click', (event)=> {
        event.preventDefault();
        console.log(boutonAppelAction);
        window.location.href = '#contact-link';
    })
    boutonAppelAction.textContent = entreprise.texteAppelAction;
    header.appendChild(boutonAppelAction);
    const avantagesClients = document.createElement('ul');
    console.log(entreprise.avantagesClients);
    entreprise.avantagesClients.forEach(element => {
        console.log(element);
        const para = document.createElement('p');
        para.textContent = element;
        header.appendChild(para)
    })

    entreprise.produits.forEach(element => {
        console.log(element);
        const image = document.createElement('img')
        image.setAttribute('src', element.image);
        const liste = document.createElement('p');
        liste.textContent = `${element.nom} - ${element.description}`;
        div1.appendChild(liste);
        div1.appendChild(image);
    });

    entreprise.services.forEach(element => {
        console.log(element);
        const liste = document.createElement('p');
        liste.textContent = `${element.nom} - ${element.description}`;
        div2.appendChild(liste);

    });

    entreprise.temoignages.forEach(element => {
        console.log(element);
        const image = document.createElement('img')
        image.setAttribute('src', element.image);
        const liste = document.createElement('p');
        liste.textContent = `${element.prenom} - ${element.typeExperience} - ${element.commentaire}`;
        div3.appendChild(liste);
        div3.appendChild(image);
    });

    
    const container = document.createElement('div');
    container.setAttribute('id', 'map')
    footer.appendChild(container)
    let map = L.map('map').setView([45.78671036688013, 4.764283099003751], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

}
