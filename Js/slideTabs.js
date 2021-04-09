/**
 * On a un tableau d'objets de contenus 
 *  à l'arrivée on présente le premier 
 *  au clique de droite on présente le suivant
 *  au clique de gauche on présente le précédent
 */

//On renvoi la déscription


//La classe projet qui décrit le modèle de notre projet

class Project {
    constructor(index = 1, description, date, imgSrc, siteLink){
        this.index = index;
        this.description = description
        this.date = date
        this.imgSrc = imgSrc
        this.siteLink = siteLink

        
    }

     addProjectElements(){
        let projectBoxDescription = document.querySelector(".project-box--description")
        let mainProjectBox = document.querySelector(".main-project-box")
        let mainProjectBoxIllustration = document.querySelector(".main-project-box--illustration")
        let descriptionTitle = document.createElement("h2")
        let dateProject =  document.createElement("p")
        let imageProject =  document.createElement("img")
        let linkSiteProject =  document.createElement("a")

        descriptionTitle.classList.add("project-description--discribe")
        dateProject.classList.add("main-project-box--date")
        imageProject.classList.add("main-project-box--img")
        linkSiteProject.classList.add("main-project-box--link")

        descriptionTitle.innerText = this.description
        dateProject.innerText = this.date
        imageProject.setAttribute("src", this.imgSrc)
        linkSiteProject.setAttribute("href", this.siteLink)
        linkSiteProject.innerText = "visiter"

        projectBoxDescription.appendChild(descriptionTitle)
        mainProjectBoxIllustration.appendChild(imageProject)
        mainProjectBox.appendChild(dateProject)
        mainProjectBox.insertBefore(dateProject,mainProjectBoxIllustration)
        mainProjectBoxIllustration.appendChild(linkSiteProject)



    }

    deleteProjectElements(){
        let projectBoxDescription = document.querySelector(".project-box--description")
        let mainProjectBox = document.querySelector(".main-project-box")
        let mainProjectBoxIllustration = document.querySelector(".main-project-box--illustration")
        let descriptionTitle = document.querySelector(".project-description--discribe")
        let dateProject =  document.querySelector(".main-project-box--date")
        let imageProject =  document.querySelector(".main-project-box--img")
        let linkSiteProject =  document.querySelector(".main-project-box--link")

     

        
        projectBoxDescription.removeChild(descriptionTitle)
        mainProjectBox.removeChild(dateProject)
        mainProjectBoxIllustration.removeChild(imageProject)
        mainProjectBoxIllustration.removeChild(linkSiteProject)



    }
}


fetch(urlApi + "projets")
    .then(function(res){
        return res.json();
    })
    .then(function (data){
        
        

        let projectsList = data.map(project=>{

            let id = project.id
            let phrase = project.phrase
            let date = project.date
            let imageUrl = project.imageUrl
            let projetUrl = project.projetUrl
            let projectSlide = new Project(id, phrase, date, imageUrl, projetUrl)
            
            return projectSlide
        })

            


        
            //Gestion du Slide

        let nextClick = document.querySelector(".project__arrows--right")
        let prevClick = document.querySelector(".project__arrows--left")
        let ballSlide = document.querySelectorAll(".footer-project-balls")
        let ballSlideArray = Array.prototype.slice.call(ballSlide)
        let indexProject = 0

            
        projectsList[indexProject].addProjectElements()


        function nextProject() {


            ballSlide[indexProject].classList.remove("footer-project-balls--active")
            projectsList[indexProject].deleteProjectElements()
            indexProject++


            if(indexProject == projectsList.length){
                indexProject = 0
            }

            projectsList[indexProject].addProjectElements()
            ballSlide[indexProject].classList.add("footer-project-balls--active")
                
        }
        function prevProject() {


            ballSlide[indexProject].classList.remove("footer-project-balls--active")  
            projectsList[indexProject].deleteProjectElements()
            indexProject--


            if(indexProject == -1){
                indexProject = projectsList.length - 1

            }


            ballSlide[indexProject].classList.add("footer-project-balls--active")
            projectsList[indexProject].addProjectElements()

        }
        
    
            
            
        nextClick.addEventListener("click", nextProject)
        prevClick.addEventListener("click", prevProject)
        
        
        
            
        
            
        for(let i = 0; i < ballSlide.length; i++ ){
            ballSlide[i].addEventListener("click", ()=>{
            
                let ballActive = ballSlideArray.filter(ball =>{
                return ball.classList.contains("footer-project-balls--active")
            })
            
         
            ballSlide[i].classList.add("footer-project-balls--active")
            ballActive[0].classList.remove("footer-project-balls--active")
            
            
            projectsList[i].deleteProjectElements()
            projectsList[i].addProjectElements()
            indexProject = i
            
                })
            }

            
            


    })

    
