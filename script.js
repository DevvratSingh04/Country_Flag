let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", async () => {
    let countryName = countryInp.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    try {
        const res = await fetch(url);
        const jsonRes = await res.json();
        console.log(jsonRes)
        let div = document.createElement('div');
        div.classList.add('flag');
        div.id = 'id_' + Math.random().toString(16).slice(2);
        const img = div.appendChild(document.createElement("img"));
        const name = div.appendChild(document.createElement("name"));
        const capital = div.appendChild(document.createElement("capital"));
        img.src = jsonRes[0].flags.png;
        name.innerText = `${jsonRes[0].name.common}`;
        capital.innerText = `${jsonRes[0].capital}`
        name.style.fontSize = "2em";
        div.style.height = "200px";
        div.style.width = "150px";
        div.style.padding = "10px";
        div.style.backgroundColor = "#F7E6C4";

        div.style.display = 'flex';
        div.style.flexFlow = 'row wrap';
        div.style.justifyContent = "center";
        img.style.width = "120px";
        img.style.height = "100px";
        img.style.gap = "0.5em";
        img.style.padding = "10px";
        const container = document.querySelector(".container");
        container.appendChild(div)
        container.style.display= "flex";
        container.style.flexWrap = "wrap";
        container.style.gap = "1em";
        container.style.maxHeight = "30rem";
        container.style.overflow = "scroll";

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<button>X</button>`;
        deleteButton.classList.add("deleteTask");
        div.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(e){
            let target = e.target;
            const flagId = target.parentElement.parentElement.id;
            console.dir(target.parentElement.parentElement)
            console.dir(flagId)
            const flagToRemove = document.querySelector(`#${flagId}`)
            container.removeChild(flagToRemove) 
        });
        
        deleteButton.style.marginLeft = "20px";
        deleteButton.style.backgroundColor = "#F7E6C4";
        deleteButton.style.border = "none";


    } catch(error) {
        console.log(error)
    }
});


