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
            enfant: "", 
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
            enfant: "Kion", 
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
        roles: ["reine", "magie"], 
        illustration: "./images/elsa.jpeg" 
    },

    { 
        nom: "Anna", 
        film: "La Reine des Neiges", 
        description: "Princesse d'Arendelle", 
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
            mere: "", 
            enfant: "", 
            frereSoeur: ["Émile"] 
        }, 
        roles: ["chef", "animal"], 
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
        roles: ["prince", "aventurier"], 
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
        age: "", 
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
        age: "", 
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
        age: "", 
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
            frereSoeur: ["Aquatta","Andrina","Arista","Attina","Adella","Alana"] 
        }, 
        roles: ["princesse", "sirène"], 
        illustration: "./images/ariel.jpg" 
    },
    { 
        nom: "Clochard", 
        film: "La belle et le clochard", 
        description: "", 
        date: "1955", 
        age: "5 ans", 
        mechant: "non", 
        famille: { 
            pere: "", 
            mere: "", 
            enfant: ["Scamp", "Prudence","Constance","Clémence"],
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
        roles: ["princesse", "aventurière","Lectrice"], 
        illustration: "./images/belle.png" 
    },
    { 
        nom: "Blanche neige", 
        film: "Blanche Neige", 
        description: "", 
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
            frereSoeur: ["Pepa","Julietta"] 
        }, 
        roles: ["voyant", "Supersticieux","ami des rats"], 
        illustration: "./images/bruno.jpg" 
    },
    { 
        nom: "Aurore", 
        film: "La belle au bois dormant", 
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
        description: "", 
        date: "1959", 
        age: "7 ans", 
        mechant: "non", 
        famille: { 
            pere: "", 
            mere: "", 
            enfant: [""], 
            frereSoeur: [] 
        }, 
        roles: ["princesse", "insomniaque"], 
        illustration: "./images/duchesse.png" 
    },
    { 
        nom: "Edna Mode", 
        film: "Les indestructibles", 
        description: "Darling", 
        date: "2004", 
        age: "ans", 
        mechant: "non", 
        famille: { 
            pere: "", 
            mere: "", 
            enfant: [""], 
            frereSoeur: [] 
        }, 
        roles: ["diva de la mode", "inventrice"], 
        illustration: "./images/edna.jpeg" 
    },
    { 
        nom: "Docteur Facilier", 
        film: "La princesse et la grenouille", 
        description: "", 
        date: "2009", 
        age: " ans", 
        mechant: "oui", 
        famille: { 
            pere: "", 
            mere: "", 
            enfant: [""], 
            frereSoeur: [] 
        }, 
        roles: ["magicien", ""], 
        illustration: "./images/docteur.png" 
    },
    { 
        nom: "Flash", 
        film: "Zootopie", 
        description: "rapide comme une flèche", 
        date: "2016", 
        age: "", 
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
        description: "", 
        date: "2004", 
        age: "7 ans", 
        mechant: "non", 
        famille: { 
            pere: "M.Indestructible", 
            mere: "Elastigirl", 
            enfant: [""], 
            frereSoeur: ["Violette","Jack-jack"] 
        }, 
        roles: ["Super-hero", "Rapide"], 
        illustration: "./images/fleche.png" 
    },

    { 
        nom: "Frozone", 
        film: "Les indestructibles", 
        description: "", 
        date: "2004", 
        age: " ans", 
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
        description: "", 
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
        age: "", 
        mechant: "non", 
        famille: { 
            pere: "", 
            mere: "", 
            enfant: "", 
            frereSoeur: [] 
        }, 
        roles: ["aventurier", "humain","voleur"], 
        illustration: "./images/flynn.png" 
    },

    { 
        nom: "Stitch", 
        film: "Lilo & Stitch", 
        description: "Expérience 626", 
        date: "2002", 
        age: "", 
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
function creercarte(personnage) { //on s'en fout du nom de la variable
    //créer le contenu principal
    let div_carte = document.createElement("div")
    div_carte.classList.add("grand-format","carte")
    if (personnage.mechant === "non") {
        div_carte.style.backgroundColor = "l#b6d2ea";  //gentil
        div_carte.style.color = "blue"
    } else {
        div_carte.style.backgroundColor = "#f38291";
        div_carte.style.color ="red"
         //  méchant
    }
     let div_haut = document.createElement("div")
     div_haut.classList.add("haut")
    //créer le conteneur de titre
    let h1_nom = document.createElement("h1")
    //ajouter une classe
    h1_nom.classList.add("nom")
    //définir son contenu
    
    h1_nom.innerText = personnage.nom //nom
    

    let div_titre = document.createElement("div")
    div_titre.classList.add("titre")

    let div_image = document.createElement("div") //image
    div_image.classList.add("image")
    let illustration = document.createElement("img")
    illustration.src = personnage.illustration
    div_image.appendChild(illustration)

    let h2_age = document.createElement("h2")//age
    h2_age.classList.add("age")
    h2_age.innerText = personnage.age
    
    let div_milieu = document.createElement("div")
    div_milieu.classList.add("milieu")

    let h3_film = document.createElement("h3")//film
    h3_film.classList.add("film")
    h3_film.innerText = personnage.film
    
    let div_description = document.createElement("div")//description du personnage
    div_description.classList.add("description")
    div_description.innerText = personnage.description

    let div_date = document.createElement("div")//date d'apparition
    div_date.classList.add("date")
    div_date.innerText = personnage.date

    let div_bas = document.createElement("div")
    div_bas.classList.add("bas")

    let ul_famille = document.createElement("ul")//famille du perso
    ul_famille.classList.add("famille")
    ul_famille.innerText = "Famille"

    let li_pere = document.createElement("li")//pere du perso
    li_pere.classList.add("pere")
    li_pere.innerText = personnage.famille.pere

    let li_mere = document.createElement("li")//mère du perso
    li_mere.classList.add("mere")
    li_mere.innerText = personnage.famille.mere

    let li_freresoeur = document.createElement("li")//freres et soeurs du perso
    li_freresoeur.classList.add("freresoeur")
    li_freresoeur.innerText = personnage.famille.frereSoeur


    let li_enfants = document.createElement("li")//enfants du perso
    li_enfants.classList.add("enfants")
    li_enfants.innerText = personnage.famille.enfant


    let ul_roles = document.createElement("ul")
    ul_roles.classList.add("roles")
    ul_roles.innerText = "Rôles"
    personnage.roles.forEach(role => {
        let li_role = document.createElement("li");
        li_role.innerText = role;
        ul_roles.appendChild(li_role);
    });




    div_carte.appendChild(illustration)
    div_haut.appendChild(illustration)
    div_haut.appendChild(div_titre) 
    div_titre.appendChild(h1_nom)
    div_titre.appendChild(h2_age)
    div_titre.appendChild(h3_film)
    div_milieu.appendChild(div_description)
    div_milieu.appendChild(div_date)
    div_carte.appendChild(div_haut)
    div_carte.appendChild(div_milieu)
  
    div_bas.appendChild(ul_famille)
    ul_famille.appendChild(li_pere)
    ul_famille.appendChild(li_mere)
    ul_famille.appendChild(li_freresoeur)
    ul_famille.appendChild(li_enfants)
    div_bas.appendChild(ul_roles)
    div_carte.appendChild(div_bas)
    
   document.querySelector("main").appendChild(div_carte)
   
  
    
}

personnages.forEach(personnage => creercarte(personnage));

document.querySelector("#switch").addEventListener("click",changerVue)

function changerVue(_event){
    console.log(_event.target);
    //le role la date du film la famille et la description disparaissent
    //la carte change de taille
    let cartes = document.querySelectorAll(".carte");

    cartes.forEach( x => {
        if(x.classList.contains("grand-format")){
             // Je retire la classe "grand-format" de la liste des classes de ma carte
            x.classList.remove("grand-format");
            // Je retire la classe "petit-format" à la liste des classes de ma carte
            x.classList.add("petit-format");
        }
        else{
            x.classList.remove("petit-format");
            // Je retire la classe "petit-format" à la liste des classes de ma carte
            x.classList.add("grand-format");
        }
    })
   
    }
  