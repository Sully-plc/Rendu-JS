
fetch('sneakers.json')
    .then(response => response.json())
    .then(data => {
        creationHtml(data);
    })
    .catch(error => {
        console.error('Erreur de chargement des données JSON:', error);
    });

function creationHtml(data) {
    const entreprise = data.entreprise
    const header = document.createElement('header');
    const nomCommercial = document.createElement('h1');
    nomCommercial.textContent = entreprise.nomCommercial;
    document.body.appendChild(header);
    header.appendChild(nomCommercial);
    const phraseAccroche = document.createElement('p');
    phraseAccroche.textContent = entreprise.phraseAccroche;
    header.appendChild(phraseAccroche);

    const boutonAppelAction = document.createElement('button');
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
    const main = document.createElement('main');
    const produits = document.createElement('h2');
    produits.textContent = entreprise.produits;
    console.log(produits);
    document.body.appendChild(main);
    entreprise.produits.forEach(element => {
console.log(element);
const liste = document.createElement('p');
liste.textContent = `${element.nom} - ${element.description}` 
main.appendChild(liste)
    });



}
