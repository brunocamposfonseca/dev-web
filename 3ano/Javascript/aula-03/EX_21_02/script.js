var subBtn = document.getElementById("sub-btn");
var placeList = document.getElementById("place-list");

subBtn.addEventListener("click", () => {
    // Importando valores dos inputs

    let nameInput = document.getElementById("name");
    let descInput = document.getElementById("description");

    // Tratando valores recebidos

    let name = nameInput.value.trim();
    let desc = descInput.value.trim();

    if (name !== "" && desc !== "") {
        // Criando container do card

        let list = document.createElement("li");
        placeList.appendChild(list);
        list.setAttribute("class", "card-container");
        list.setAttribute("id", name.replace(" ", "-"));

        // Criando título do card

        title = document.createElement("h2");
        list.appendChild(title);
        title.setAttribute("class", "name-card");
        title.textContent = name;

        // Criando descrição do card

        description = document.createElement("p");
        list.appendChild(description);
        description.setAttribute("class", "desc-card");
        description.textContent = desc;

        // Criando botão de exclusão do card

        btnExclude = document.createElement("button");
        list.appendChild(btnExclude);
        btnExclude.setAttribute("class", "btn-exclude");
        btnExclude.textContent = "x";

        // Excluindo card

        btnExclude.addEventListener("click", () => {
            list.remove();
        })

        // Limpando variável

        nameInput.value = ""
        descInput.value = ""

        // Styles - Card

        list.style.position = "relative";
        list.style.display = "flex";
        list.style.flexDirection = "column";
        list.style.padding = "20px";
        list.style.backgroundColor = "#f0f0f0";
        list.style.borderRadius = "10px";
        list.style.boxShadow = "4px 4px 8px #00000028";
        list.style.alignItems = "Center";
        list.style.width = "100%";
        list.style.gap = "15px";

        // Styles - Description

        description.style.textIndent = "30px";
        description.style.textAlign = "justify";
        description.style.hyphens = "auto";

        // Styles - Button Exclude

        btnExclude.style.position = "absolute";
        btnExclude.style.top = "-10px";
        btnExclude.style.right = "-10px";
        btnExclude.style.textalign = "center";
        btnExclude.style.padding = "4px 10px";
        btnExclude.style.border = "none";
        btnExclude.style.borderRadius = "50%";
        btnExclude.style.color = "#fff";
        btnExclude.style.backgroundColor = "#b50000";
        btnExclude.style.cursor = "pointer";
        btnExclude.style.fontWeight = "700px";
        btnExclude.style.transition = "all 0.3s ease";

        // Mudando background Hover - Enter

        btnExclude.addEventListener("mouseenter", () => {
            btnExclude.style.backgroundColor = "red"
        })

        // Mudando background Hover - Out

        btnExclude.addEventListener("mouseout", () => {
            btnExclude.style.backgroundColor = "#b50000"
        })
    }
    
})