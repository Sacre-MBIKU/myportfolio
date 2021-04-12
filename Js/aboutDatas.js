   /**
* On renvoi les données du nom au DOM
*/

let urlApi = "https://60706ab685c3f00017470139.mockapi.io/"

//La classe Name qui décrit le nom au DOM

class NamesAbout {
    constructor(firstName, lastName, name, urlProfile){
        this.firstName = firstName;
        this.lastName = lastName
        this.name = name
        this.urlProfile = urlProfile;
 
        
    }
 
     setAboutNames(){
        let aboutTitle = document.querySelector(".about-title")
        let aboutPicture = document.querySelector(".about__picture")
        let imgProfile =  document.createElement("img")
        let spanFirstAndLastName =  document.createElement("span")
        let spanName =  document.createElement("span")
       
        imgProfile.setAttribute("src", this.urlProfile)
        imgProfile.setAttribute("alt", this.lastName + " profile")
        spanFirstAndLastName.innerText = this.firstName + " " + this.lastName
        spanName.innerText = this.name 
        
        aboutPicture.appendChild(imgProfile)
        aboutTitle.appendChild(spanFirstAndLastName)
        aboutTitle.appendChild(spanName)
       
  
    }
 
  
 }
 
 
 fetch(urlApi + "noms")
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        
        let firstName = data[0].firstName
        console.log(data)
        let lastName = data[0].lastName
        console.log(lastName)
        let name = data[0].name
        console.log(name)
        let profile = data[0].profile
        console.log(profile)
        
        let names = new NamesAbout(firstName, lastName, name, profile)
        names.setAboutNames()
       
 
    })
 
    






/**
* On renvoi les données du nom au DOM
*/


//La classe Name qui décrit le nom au DOM

class Skills {
    constructor(title, step){
        this.title = title;
        this.step = step
      
    }
 
     setSkillElements(){
        let aboutSkillsList = document.querySelector(".about-skills-list")
        let listSkillsListCircles = document.createElement("li")
        let titleSkill = document.createElement("p") 
        let stepSkill = document.createElement("ul")

        stepSkill.classList.add("all-skill-circles")
        titleSkill.classList.add("skills-master")
        listSkillsListCircles.classList.add("skills-list-circles")
                

        //On boucle

        for(let i = 0; i < 5; i++){

            let fillStepSkill = document.createElement("li")
            let strokeStepSkill = document.createElement("li")

            if(i < this.step ){

                fillStepSkill.classList.add("skill-master-circles")
                fillStepSkill.classList.add("skill-master-circles--active")
                stepSkill.appendChild(fillStepSkill)

            }else{

                strokeStepSkill.classList.add("skill-master-circles")

                stepSkill.appendChild(strokeStepSkill)

           }
            
               
        }

        titleSkill.innerText = this.title

        listSkillsListCircles.appendChild(titleSkill)
        listSkillsListCircles.appendChild(stepSkill)
        aboutSkillsList.appendChild(listSkillsListCircles)


        
 
 
 
    }
 
  
 }
 
 
 fetch(urlApi + "competences")
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        
        

        data.forEach((skill)=>{

            let title = skill.title
            let niveau = skill.niveau
            let listSkill = new Skills(title, niveau)
            
            listSkill.setSkillElements()
        })
       
 
    })
 
 



//La classe Name qui décrit le nom au DOM

class Education {
    constructor(title, step){
        this.title = title;
        this.step = step
 
        
    }
 
     setEducationElements(){

        let aboutEducationList = document.querySelector(".about-education-list")
        let listEducationList= document.createElement("li")
        let titleEducation = document.createElement("p") 
        let dateEducation = document.createElement("span")

        titleEducation.classList.add("education-list-describe")
        listEducationList.classList.add("education-list")
        
        dateEducation.innerText = this.step
        titleEducation.innerText = this.title

        titleEducation.appendChild(dateEducation)
        listEducationList.appendChild(titleEducation)
        aboutEducationList.appendChild(listEducationList)

 
    }
 
  
 }
 
 
 fetch(urlApi + "education")
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        
        data.forEach((education) => {
            let i = 0
            let title = education.title
            let niveau = education.niveau
            let listEducation = new Education(title, niveau)
            console.dir(education.title)
            listEducation.setEducationElements()
        })

       
       
 
    })
 
 


       /**
* On renvoi les données du nom au DOM
*/



