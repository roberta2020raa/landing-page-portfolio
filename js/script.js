//DADOS//
const projectList = [
        {
            id: "driveflow",
            nome: "Drive Flow",
            descricao:"Aplicativo de gestão financeira",
            imagem:"assets/driveflow.png",
            tecnologias:["HTML5", "CSS3", "JavaScript"],
            github:"https://github.com/roberta2020raa",
            projeto:"#" 
        },
        
        {
            id: "unidos-amem",
            nome: "Unidos do Amém",
            descricao: "Site da ONG Unidos do Amém",
            imagem: "assets/emDesenvolvimento.jpg" ,
            tecnologias:["HTML5", "CSS3", "JavaScript"],
            github:"#",
            projeto:"#"
        
        },

        {
            id: "df-tapecaria",
            nome:"DF Tapeçaria Stand & Cenografia",
            descricao: "Site para empresa particular",
            imagem:"assets/emDesenvolvimento.jpg" ,
            tecnologias:["HTML5", "CSS3", "JavaScript"],
            github:"#",
            projeto:"#"
        },

        {
            id:"landing-page",
            nome:"Minha Landing Page",
            descricao: "Esta propria Landing Page",
            imagem:"assets/minhaPagina.png",
            tecnologias:["HTML5", "CSS3", "JavaScript"],
            github:"https://github.com/roberta2020raa/landing-page-portfolio",
            projeto:"#"


        }
    ]
    
//mapeando os elementos(quais elementos do html quero manipular)//
//selecionamos os elementos//
const projectTitle = document.querySelector(".project-preview h3");
const projectDescription = document.querySelector(".project-preview p");
const projectTechs = document.querySelector(".project-techs");
const image = document.querySelector(".project-preview .project-image");
const projectLink = document.querySelectorAll(".project-links a");
const projectCards = document.querySelectorAll(".project-card");


//ação (o que queremos que aconteca ,normalmente acompanha uma função)//
//forEach estamos percorrendo os elementos //
projectCards.forEach((card) =>{
    card.addEventListener('click',() => {
        const projectId = card.dataset.project;


        const projectData = projectList.find(
        (project) =>  projectId === project.id);

        image.setAttribute("src",projectData.imagem);  
        projectTechs.textContent = "";
        projectData.tecnologias.forEach((technology) => {
            const tech = document.createElement("span");
    
            tech.textContent =technology;
            projectTechs.append(tech)
    
 });
        
        
        
      
      projectTitle.textContent = projectData.nome;
      projectDescription.textContent = projectData.descricao;
      projectLink[0].setAttribute("href",projectData.github);
      projectLink[1].setAttribute("href",projectData.projeto);
     

     
      
    });

    
     
     console.log(projectLink);
});


  

//escutar uma ação click//
//executar uma função//
//resultado o que deve acontecer na tela //