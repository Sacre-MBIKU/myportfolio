   /**
* On renvoi les données du nom au DOM
*/




//La classe Name qui décrit le nom au DOM

class Names {
    constructor(firstName, lastName, name){
        this.firstName = firstName;
        this.lastName = lastName
        this.name = name
 
        
    }
 
     setHomeElements(){
        let homeContainerSelfPresentation = document.querySelector(".home____container__self-presentation")
       
        let spanHome =  document.createElement("span")
 
        
        spanHome.innerText = this.firstName + " " + this.lastName + " " + this.name
        
 
        homeContainerSelfPresentation.appendChild(spanHome)
       
        
 
 
 
    }
 
  
 }
 
 
 fetch(urlApi + "noms")
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        
        let firstName = data.firstName
        console.log(firstName)
        let lastName = data.lastName
        console.log(lastName)
        let name = data.name
        console.log(name)
        let names = new Names(firstName, lastName, name)
        names.setHomeElements()
       
 
    })
 
    






/**
* On renvoi les données du nom au DOM
*/




//La classe Name qui décrit le nom au DOM

class Phrase {
   constructor(phrase){
       this.phrase = phrase;

       
   }

    setPhraseElements(){
       let homeContainerSelfPresentation = document.querySelector(".home____container__self-presentation")
      
       let spanPhrase =  document.createElement("span")

       
       spanPhrase.innerText = this.phrase
       

       homeContainerSelfPresentation.appendChild(spanPhrase)
      
       



   }

 
}


fetch(urlApi + "phraseAccueil")
   .then(function (res){
       return res.json();
   })
   .then(function (data){
       
       let phrase = data[0].phrase
       console.log(phrase)
       let phrases = new Phrase(phrase)
       phrases.setPhraseElements()
      

   })

