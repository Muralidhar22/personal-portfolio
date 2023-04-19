
// display projects
async function displayProjects(dataSet){
    const goToTop = document.getElementById("goToTop")
    const mainProjectsContainer = document.querySelector(".main-projects-container");
    const miniProjectsContainer = document.querySelector(".mini-projects-container");
    const data = await fetchData();
    const neogCamp = data[dataSet];
    
    neogCamp.forEach(element => {
        const article = document.createElement("article");
        const source = document.createElement("a");
        const live = document.createElement("a");
        const title = document.createElement("h2");
        const para = document.createElement("p");
        const liveText = document.createTextNode("Live");
        const sourceText = document.createTextNode("Source");
        const smallElement = document.createElement("small")
        const description = document.createTextNode(`${element.description}`)
        
        // setting class names
        if(element.id % 2 !== 0){
            article.className = "project-wrapper odd-bg"
        }
        else article.className = "project-wrapper"
        
        para.className = "project-description"
        live.className = "link link-primary"
        source.className = "link link-secondary"
        smallElement.className = "date block"

        // setting attributes and appending child elements
        source.setAttribute("target","blank")
        live.setAttribute("target","blank")
        

        source.setAttribute("href", `${element.source}`);
        source.appendChild(sourceText)

        live.setAttribute("href",`${element.url}`)
        live.appendChild(liveText)

        const textNode = document.createTextNode(`${element.name}`);
        title.appendChild(textNode)
        para.appendChild(description)
        article.append(title,smallElement,para,live,source)
        if(dataSet.includes("main")) mainProjectsContainer.appendChild(article)
        else miniProjectsContainer.appendChild(article)
    });

    // go to top of the page
    goToTop.addEventListener('click',topFunction)
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTop.style.display = "block";
    } else {
        goToTop.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
}

async function fetchData(){
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
}

displayProjects("mainProjects");
displayProjects("miniProjects")