/**
 * On récupère la liste des onglets
 * 
 *  On cible l'onglet actuel
 * 
 *  On l'affiche
 * 
 *  Si on clique sur un autre onglet 
 * 
 *      on le met en actif et le précédent on supprime la classe active
 * 
 */

let navTabs = document.querySelectorAll("a");

//La fonction qui gère l'onglet actif

/**
 * //On sélectionne le conteneur général
 * 
 *  Si l'onglet est à #home la flêche gauche est invisible
 *  Si on appuie à la flêche droite on fait passer la le slide à la section suivante
 * 
 */

 const CONTAINER = document.querySelector(".container")

 const ARROW_RIGHT = document.querySelector(".arrowLeft")
 
 const ARROW_LEFT = document.querySelector(".arrowRight")
 
 const HOME_BTNS = document.querySelectorAll(".home____container__btns ul li a")

 console.dir(HOME_BTNS, "boutons")
let showTabs = function(a){
     //On vérifie si l'élément contient déjà la classe active

     let navParentActual = document.querySelector("nav .active")
     let aLinkClass = a.classList
     let sectionActual = document.querySelector("main section.activeContent")
     let sectionCibilng = document.querySelector(a.getAttribute("href")).classList.add("activeContent")
     
     

 

     if(aLinkClass.contains("active")){
         return false
     }
    
         //Sinon on retire la classe active dans l'élément précédent

        //On va chercher le parent pour supprimer la classe dans l'élément qui le contient

        navParentActual.classList.remove("active")

        //On ajoute la classe à l'élément actuel

        aLinkClass.add("active")
        sectionActual.classList.remove("activeContent")

        



        
        
     

     
}

console.dir(navTabs)

//On parcourt le tableau des onglets pour eémettre un événement

for(let i = 0; i < navTabs.length; i++){

    let aLink = navTabs[i];

    aLink.addEventListener("click", function(){
       
        showTabs(this)
    })

}

for(let j = 0; j < HOME_BTNS.length; j++){

    let btnLink = HOME_BTNS[j];

    btnLink.addEventListener("click", function(){
        
        showTabs(this)
    })

}


//On gère les onglets

 /**
     * Je récupère le hash
     *  Ajouter la classe active sutr le lien href="href"
     *  Retirer la classe active sur le les autres onglets
     *  Afficher et masquer le contenu
     */

  let hash = window.location.hash

  let aLinkActualHash = document.querySelector('a[href="' + hash +'"]')

  if(aLinkActualHash !== null && !aLinkActualHash.parentNode.classList.contains("active")){

    console.log("hash")
    showTabs(aLinkActualHash)
  }