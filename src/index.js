// display projects
async function displayProjects(){
    const goToTop = document.getElementById("goToTop")
    const projectsContainer = document.querySelector(".projects-container");
    const data = await fetchData();
    const neogCamp = data.neogcampProjects;
    
    neogCamp.forEach(element => {
        const article = document.createElement("article");
        const source = document.createElement("a");
        const live = document.createElement("a");
        const title = document.createElement("h2");
        const liveText = document.createTextNode("Live");
        const sourceText = document.createTextNode("Source");
        const date= document.createTextNode(`${element.date}`)
        const smallElement = document.createElement("small")
        
        // setting class names
        if(element.id % 2 !== 0){
            article.className = "project-wrapper odd-bg"
        }
        else article.className = "project-wrapper"
        
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
        smallElement.appendChild(date)
        article.append(title,smallElement,live,source)
        projectsContainer.appendChild(article)
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

displayProjects();
