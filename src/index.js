async function displayProjects(){
    const projectsContainer = document.querySelector(".projects-container");
    const projectsList = await fetchData();
    const neogCamp = projectsList.neogcampProjects;
    
    neogCamp.forEach(element => {
        const article = document.createElement("article");
        const source = document.createElement("a");
        const live = document.createElement("a");
        const title = document.createElement("h2");
        const liveText = document.createTextNode("Live");
        const sourceText = document.createTextNode("Source");
         
        
        if(element.id % 2 !== 0){
            article.className = "project-wrapper odd-bg"
        }
        else article.className = "project-wrapper"
        
        live.className = "link link-primary"
        source.className = "link link-secondary"

        source.setAttribute("href", `${element.source}`);
        source.appendChild(sourceText)

        live.setAttribute("href",`${element.url}`)
        live.appendChild(liveText)

        const textNode = document.createTextNode(`${element.name}`);
        title.appendChild(textNode)
        article.append(title,live,source)
        projectsContainer.appendChild(article)
    });
}

async function fetchData(){
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
}
displayProjects();
