const gallery = document.querySelector(".gallery");
const editionModeBar = document.querySelector(".edition-mode-bar");
const logout = document.querySelector(".logout");
const login = document.querySelector(".login");
const filterBar = document.querySelector(".filterBar");
const modifierProjet = document.querySelector(".modifier-projet");
const token = localStorage.getItem("token");
const admin = document.querySelectorAll(".admin");
const adminArray = Array.from(admin);
const noAdmin = document.querySelectorAll(".noAdmin");
const noAdminArray = Array.from(noAdmin);
console.log(adminArray);

    if (token) {
        adminArray.forEach(element => {
            element.style.display = "flex";
        });
        noAdminArray.forEach(element =>{
            element.style.display = "none";
        });
    }else{
        adminArray.forEach(element => {
            element.style.display = "none";
        });
        noAdminArray.forEach(element =>{
            element.style.display = "flex";
        });
    }
logout.addEventListener("click", ()=>{
    localStorage.removeItem("token");
});
// modifierProjet.addEventListener("click", ()=>{

// });

async function createProjet(arg) {
    gallery.replaceChildren();
        const response =  await fetch("http://localhost:5678/api/works");
        const projets = await response.json();
        const projet = projets.filter((projet) => projet.categoryId === arg);

    if (projet.length > 0) {
        for (let i = 0; i < projet.length; i++) {
            const figure = document.createElement("figure");
            const image = document.createElement("img");
            const figcaption = document.createElement("figcaption");
            gallery.appendChild(figure);
            figure.appendChild(image);
            figure.appendChild(figcaption);
            figure.classList.add("figure");
            image.src = projet[i].imageUrl;
            image.alt = projet[i].title;
            figcaption.innerText = projet[i].title;
        }
    } else {
        for (let i = 0; i < projets.length; i++) {
            const figure = document.createElement("figure");
            const image = document.createElement("img");
            const figcaption = document.createElement("figcaption");
            gallery.appendChild(figure);
            figure.appendChild(image);
            figure.appendChild(figcaption);
            figure.classList.add("figure");
            image.src = projets[i].imageUrl;
            image.alt = projets[i].title;
            figcaption.innerText = projets[i].title;
        }
    }
}
createProjet();
