let personnages = [
    {
        nom: "Simba",
        film: "Le Roi Lion",
        description: "Futur roi de la savane",
        date: "1994",
        age: "enfant",
        mechant: "non",
        famille: {
            pere: "Mufasa",
            mere: "Sarabi",
            enfant: "Kiara, Kion",
            frereSoeur: []
        },
        roles: ["roi", "lion"],
        illustration: "./images/simba.png"
    },

    {
        nom: "Nala",
        film: "Le Roi Lion",
        description: "Compagne de Simba",
        date: "1994",
        age: "enfant",
        mechant: "non",
        famille: {
            pere: "",
            mere: "",
            enfant: "Kiara, Kion",
            frereSoeur: []
        },
        roles: ["lionne", "reine"],
        illustration: "./images/nala.png"
    },

    {
        nom: "Scar",
        film: "Le Roi Lion",
        description: "Frère jaloux de Mufasa",
        date: "1994",
        age: "",
        mechant: "oui",
        famille: {
            pere: "",
            mere: "",
            enfant: "",
            frereSoeur: ["Mufasa"]
        },
        roles: ["lion", "méchant"],
        illustration: "./images/scar.jpg"
    },

    {
        nom: "Elsa",
        film: "La Reine des Neiges",
        description: "Reine d'Arendelle",
        date: "2013",
        age: "21 ans",
        mechant: "non",
        famille: {
            pere: "Agnarr",
            mere: "Iduna",
            enfant: "",
            frereSoeur: ["Anna"]
        },
        roles: ["reine", "magicienne","grande sœur"],
        illustration: "./images/elsa.jpeg"
    },

    {
        nom: "Anna",
        film: "La Reine des Neiges",
        description: "Princesse d'Arendelle courageuse et optimiste",
        date: "2013",
        age: "18 ans",
        mechant: "non",
        famille: {
            pere: "Agnarr",
            mere: "Iduna",
            enfant: "",
            frereSoeur: ["Elsa"]
        },
        roles: ["princesse", "aventurière"],
        illustration: "./images/anna.jpg"
    },

    {
        nom: "Mérida",
        film: "Rebelle",
        description: "Princesse rebelle",
        date: "2012",
        age: "16 ans",
        mechant: "non",
        famille: {
            pere: "Fergus",
            mere: "Elinor",
            enfant: "",
            frereSoeur: ["Harris", "Hubert", "Hamish"]
        },
        roles: ["princesse", "archère"],
        illustration: "./images/merida.jpg"
    },

    {
        nom: "Remy",
        film: "Ratatouille",
        description: "Rat passionné de cuisine",
        date: "2007",
        age: "",
        mechant: "non",
        famille: {
            pere: "Django",
            mere: "Désirée",
            enfant: "",
            frereSoeur: ["Émile"]
        },
        roles: ["chef cuisto", "animal"],
        illustration: "./images/remy.jpg"
    },

    {
        nom: "Aladdin",
        film: "Aladdin",
        description: "Voleur au grand cœur",
        date: "1992",
        age: "18 ans",
        mechant: "non",
        famille: {
            pere: "",
            mere: "",
            enfant: "",
            frereSoeur: []
        },
        roles: ["prince", "aventurier", "voleur"],
        illustration: "./images/aladin.png"
    },

    {
        nom: "Jasmine",
        film: "Aladdin",
        description: "Princesse rebelle d'Agrabah",
        date: "1992",
        age: "16 ans",
        mechant: "non",
        famille: {
            pere: "Le Sultan",
            mere: "",
            enfant: "",
            frereSoeur: []
        },
        roles: ["princesse", "aventurière"],
        illustration: "./images/jasmine.png"
    },
    {
        nom: "Cruella",
        film: "Les 1001 dalmatiens",
        description: "Taxidermiste folle",
        date: "1961",
        age: "68 ans",
        mechant: "oui",
        famille: {
            pere: "",
            mere: "",
            enfant: "",
            frereSoeur: []
        },
        roles: ["Chasseuse de chiens", "Fashionista"],
        illustration: "./images/cruella.png"
    },
    {
        nom: "Hercule",
        film: "Hercule",
        description: "Héros à la force légendaire",
        date: "1997",
        age: "imortel",
        mechant: "non",
        famille: {
            pere: "Zeus",
            mere: "Héra",
            enfant: "",
            frereSoeur: []
        },
        roles: ["héros", "dieu"],
        illustration: "./images/hercules.png"
    },

    {
        nom: "Mégara",
        film: "Hercule",
        description: "Femme rusée au passé trouble",
        date: "1997",
        age: "22 ans",
        mechant: "non",
        famille: {
            pere: "",
            mere: "",
            enfant: "",
            frereSoeur: []
        },
        roles: ["humaine", "rebelle"],
        illustration: "./images/megara.png"
    },

    {
        nom: "Hades",
        film: "Hercule",
        description: "Dieu des Enfers ",
        date: "1997",
        age: "imortel",
        mechant: "oui",
        famille: {
            pere: "Cronos",
            mere: "Rhéa",
            enfant: "",
            frereSoeur: ["Zeus", "Poséidon"]
        },
        roles: ["dieu", "méchant"],
        illustration: "./images/hades.jpg"
    },

    {
        nom: "Raiponce",
        film: "Raiponce",
        description: "Princesse aux cheveux magiques",
        date: "2010",
        age: "18 ans",
        mechant: "non",
        famille: {
            pere: "Le Roi",
            mere: "La Reine",
            enfant: "",
            frereSoeur: []
        },
        roles: ["princesse", "aventurière"],
        illustration: "./images/raiponce.png"
    },
    {
        nom: "Ariel",
        film: "La petite Sirène",
        description: "prête à tout pour des jambes",
        date: "1989",
        age: "16 ans",
        mechant: "non",
        famille: {
            pere: "Triton",
            mere: "La Reine",
            enfant: "Melody",
            frereSoeur: ["Aquatta", "Andrina", "Arista", "Attina", "Adella", "Alana"]
        },
        roles: ["princesse", "sirène"],
        illustration: "./images/ariel.jpg"
    },
    {
        nom: "Clochard",
        film: "La belle et le clochard",
        description: "Chien errant au grand cœur",
        date: "1955",
        age: "5 ans",
        mechant: "non",
        famille: {
            pere: "",
            mere: "",
            enfant: ["Scamp", "Prudence", "Constance", "Clémence"],
            frereSoeur: []
        },
        roles: ["chien", "SDF"],
        illustration: "./images/clochard.png"
    },
    {
        nom: "Belle",
        film: "La belle et la bête",
        description: "S'imagine des mondes",
        date: "1991",
        age: "17 ans",
        mechant: "non",
        famille: {
            pere: "Maurice",
            mere: "",
            enfant: "",
            frereSoeur: []
        },
        roles: ["princesse", "aventurière", "Lectrice"],
        illustration: "./images/belle.png"
    },
    {
        nom: "Blanche neige",
        film: "Blanche Neige",
        description: "un jour mon prince viendra",
        date: "1937",
        age: "14 ans",
        mechant: "non",
        famille: {
            pere: "Le Roi",
            mere: "La méchante Reine",
            enfant: "",
            frereSoeur: []
        },
        roles: ["princesse", "Cuisinière"],
        illustration: "./images/blanche.png"
    },
    {
        nom: "Capitaine crochet",
        film: "Peter pan",
        description: "S'est fait bouffé la main par un croco",
        date: "1953",
        age: "120 ans",
        mechant: "oui",
        famille: {
            pere: "",
            mere: "",
            enfant: "",
            frereSoeur: []
        },
        roles: ["pirate", "capitaine"],
        illustration: "./images/crochet.jpg"
    },
    {
        nom: "Bruno",
        film: "Encanto",
        description: "pic, pic, pic, pic, pic, touche du bois",
        date: "2021",
        age: "50 ans",
        mechant: "non",
        famille: {
            pere: "Pedro",
            mere: "Alma",
            enfant: "",
            frereSoeur: ["Pepa", "Julietta"]
        },
        roles: ["voyant", "Supersticieux", "ami des rats"],
        illustration: "./images/bruno.jpg"
    },
    {
        nom: "Aurore",
        film: "J'en ai rêvé",
        description: "Un jour mon prince viendra",
        date: "1959",
        age: "16 ans",
        mechant: "non",
        famille: {
            pere: "Le Roi Stéphane",
            mere: "La Reine Oriane",
            enfant: "",
            frereSoeur: []
        },
        roles: ["princesse", "insomniaque"],
        illustration: "./images/aurore.jpg"
    },
    {
        nom: "Duchesse",
        film: "Les aristochats",
        description: "Maman chat douce et dinstinguée",
        date: "1959",
        age: "7 ans",
        mechant: "non",
        famille: {
            pere: "",
            mere: "",
            enfant: ["Marie", "Toulouse", "Berlioz"],
            frereSoeur: []
        },
        roles: ["chat", "aristocrate"],
        illustration: "./images/duchesse.png"
    },
    {
        nom: "Edna Mode",
        film: "Les indestructibles",
        description: "Darling",
        date: "2004",
        age: "50 ans",
        mechant: "non",
        famille: {
            pere: "",
            mere: "",
            enfant: "",
            frereSoeur: []
        },
        roles: ["diva de la mode", "inventrice"],
        illustration: "./images/edna.jpeg"
    },
    {
        nom: "Docteur Facilier",
        film: "La princesse et la grenouille",
        description: "aussi connu par son surnom de Maître des ombres",
        date: "2009",
        age: "60 ans",
        mechant: "oui",
        famille: {
            pere: "",
            mere: "",
            enfant: [""],
            frereSoeur: []
        },
        roles: ["magicien", "vaudou"],
        illustration: "./images/docteur.png"
    },
    {
        nom: "Flash",
        film: "Zootopie",
        description: "rapide comme une flèche",
        date: "2016",
        age: "5 ans",
        mechant: "non",
        famille: {
            pere: "",
            mere: "",
            enfant: [""],
            frereSoeur: []
        },
        roles: ["animal", "secrétaire"],
        illustration: "./images/flash.png"
    },
    {
        nom: "Flèche",
        film: "Les indestructibles",
        description: "Petit garçon espiegle est super rapide",
        date: "2004",
        age: "10 ans",
        mechant: "non",
        famille: {
            pere: "M.Indestructible",
            mere: "Elastigirl",
            enfant: [""],
            frereSoeur: ["Violette", "Jack-jack"]
        },
        roles: ["Super-hero", "Rapide"],
        illustration: "./images/fleche.png"
    },

    {
        nom: "Frozone",
        film: "Les indestructibles",
        description: "Lucius Best de son vrai nom, capable de contrôler la glace",
        date: "2004",
        age: "37 ans",
        mechant: "non",
        famille: {
            pere: "",
            mere: "",
            enfant: [""],
            frereSoeur: []
        },
        roles: ["super-hero", "pouvoir de glace"],
        illustration: "./images/frozone.png"
    },
    {
        nom: "Gaston",
        film: "La Belle et la bête",
        description: "Gros forceur imbu de lui-même",
        date: "1991",
        age: "26 ans",
        mechant: "oui",
        famille: {
            pere: "",
            mere: "",
            enfant: [""],
            frereSoeur: []
        },
        roles: ["Don-Juan", "Forceur"],
        illustration: "./images/gaston.png"
    },
    {
        nom: "Le Génie",
        film: "Aladdin",
        description: "3 voeux",
        date: "1992",
        age: "500 ans",
        mechant: "non",
        famille: {
            pere: "",
            mere: "",
            enfant: [""],
            frereSoeur: []
        },
        roles: ["génie", "meilleur ami"],
        illustration: "./images/genie.png"
    },
    {
        nom: "Mère Gothel",
        film: "Raiponce",
        description: "Fleur aux pétals d'or",
        date: "2010",
        age: "100 ans",
        mechant: "oui",
        famille: {
            pere: "",
            mere: "",
            enfant: ["Raiponce"],
            frereSoeur: []
        },
        roles: ["Belle-mère", "Manipulatrice"],
        illustration: "./images/gothel.png"
    },

    {
        nom: "Flynn",
        film: "Raiponce",
        description: "Voleur au grand cœur",
        date: "2010",
        age: "24 ans",
        mechant: "non",
        famille: {
            pere: "",
            mere: "",
            enfant: "",
            frereSoeur: []
        },
        roles: ["aventurier", "humain", "voleur"],
        illustration: "./images/flynn.png"
    },

    {
        nom: "Stitch",
        film: "Lilo & Stitch",
        description: "Expérience 626",
        date: "2002",
        age: "Enfant",
        mechant: "non",
        famille: {
            pere: "Jumba",
            mere: "",
            enfant: "",
            frereSoeur: ["Lilo", "Nani"]
        },
        roles: ["animal", "alien"],
        illustration: "./images/stitch.jpg"
    }
];

//script


function creerCarte(_personnage) {
    let listRoles = _personnage.roles.map(function(role) {
        return `<li>${role}</li>`;
    });
    let htmlListRoles = listRoles.join("");  // liste roles

    let listFamille = [];
    if (_personnage.famille.pere) listFamille.push(`<li>Père: ${_personnage.famille.pere}</li>`);
    if (_personnage.famille.mere) listFamille.push(`<li>Mère: ${_personnage.famille.mere}</li>`);
    if (_personnage.famille.enfant) listFamille.push(`<li>Enfant: ${_personnage.famille.enfant}</li>`);
    _personnage.famille.frereSoeur.forEach(function(famille) {
        listFamille.push(`<li>Frère/Sœur: ${famille}</li>`);
    });
    let htmlListFamille = listFamille.join("");  // liste famille

    // Créer un élément div pour la carte
    let carte = document.createElement("div");

    // couleur si méchant
    if (_personnage.mechant === "non") {
        carte.style.backgroundColor = "#b6d2ea"; // gentil
        carte.style.color = "#125087";
    } else {
        carte.style.backgroundColor = "#f2acb5"; // méchant
        carte.style.color = "#962131";
    }

    // Je crée le contenu de la carte avec les templates
    let contenu = `
    <div class="haut"> 
      <img src=${_personnage.illustration}>
      <div class="titre"> 
      <h1 class="nom">${_personnage.nom}</h1>
        <h2 class="age">${_personnage.age}</h2>
        <h3 class="film">${_personnage.film}</h3>
      </div></div>
      <div class="milieu">
        <div class="description">${_personnage.description}</div>
        <div class="date">${_personnage.date}</div>
      </div>
      <div class="bas">
        <ul class="famille">${htmlListFamille}</ul>
        <ul class="roles">${htmlListRoles}</ul>
      </div>
    `;

    // J'ajoute le contenu HTML et la liste de classes à la carte
    carte.innerHTML = contenu;
    carte.classList.add("carte", "grand-format");

    return carte;
}

// J'ajoute les cartes à la page
personnages.forEach(personnage => {
    let carte = creerCarte(personnage);
    document.body.appendChild(carte);
});

// boutton pour changer la vue
document.querySelector("#switch").addEventListener("click", _event => {
    console.log(_event.target);
    //le role la date du film la famille et la description disparaissent
    //la carte change de taille
    let cartes = document.querySelectorAll(".carte");

    cartes.forEach(x => {
        if (x.classList.contains("grand-format")) {
            // Je sélectionne la classe "grand-format" de la liste des classes de ma carte
            x.classList.remove("grand-format");
            // Je retire la classe "grand-format" à la liste des classes de ma carte
            x.classList.add("petit-format");
            // J'enlève la classe "grand-format" à la liste des classes de ma carte
        } else {
            x.classList.remove("petit-format");
             // Je retire la classe "petit-format" à la liste des classes de ma carte
            x.classList.add("grand-format");
            // J'ajoute la classe "grand-format" à la liste des classes de ma carte
        }
    });
