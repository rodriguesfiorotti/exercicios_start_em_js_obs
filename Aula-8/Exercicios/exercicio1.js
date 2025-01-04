async function executar() {
    const usersList = document.getElementById("usersList");
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users"); // Chamada a API para usuários
    const dados = await resposta.json();  // Converter JSON para um objeto JS na memória
    console.log(dados);

    const createParagraph = (content) => {
        const p = document.createElement("p");
        if (typeof content === "string") {
            p.textContent = content; // Se for string, define como texto
        } else {
            p.appendChild(content); // Se for um elemento DOM, adiciona como filho
        }
        return p;
    };

    const createBoldElement = (text) => {
        const strong = document.createElement("strong");
        strong.textContent = text;
        return strong;
    };

    const createLiElement = (text) => {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
    };

    const createAddressElement = (address) => {
        const addressElement = document.createElement("address");

        // Cria o título do endereço
        const addressTitle = createParagraph(createBoldElement("Endereço:"));

        // Cria a lista de detalhes do endereço
        const ul = document.createElement("ul");
        const liStreet = createLiElement(`Rua: ${address.street}`);
        const liSuite = createLiElement(`Suite: ${address.suite}`);
        const liCity = createLiElement(`Cidade: ${address.city}`);
        const liZipcode = createLiElement(`Zipcode ou CEP: ${address.zipcode}`);
        const liCoordinates = createLiElement(`Coordenadas: Latitude: ${address.geo.lat}, Longitude: ${address.geo.lng}`);

        // Adiciona os itens à lista
        ul.append(liStreet, liSuite, liCity, liZipcode, liCoordinates);

        // Adiciona o título e a lista ao <address>
        addressElement.append(addressTitle, ul);
        return addressElement;
    };

    const companyInfo = (company) => {
        const companySection = document.createElement("section");

        // Cria o título da Empresa
        const companyTitle = createParagraph(createBoldElement("Empresa:"));

        // Cria a lista de detalhes da Empresa
        const ul = document.createElement("ul");
        const companyName = createLiElement(`Nome da Empresa: ${company.name}`);
        const companyCatchphrase = createLiElement(`Slogan da Empresa: ${company.catchPhrase}`);
        const companyBs = createLiElement(`Estratégia de Negócio: ${company.bs}`);

        // Adiciona os itens à lista
        ul.append(companyName, companyCatchphrase, companyBs);

        // Adiciona o título e a lista ao <address>
        companySection.append(companyTitle, ul);
        return companySection;
    };


    dados.forEach(function (users) {
        const userSection = document.createElement("section");
        const userArticle = document.createElement("article");

        const userIdAndName = createParagraph(createBoldElement(`${users.id} - ${users.name}`))
        const userName = createParagraph(`Nome de usuário: ${users.username}`);
        const userEmail = createParagraph(`E-mail: ${users.email}`);
        const userAddress = createAddressElement(users.address);
        const userPhone = createParagraph(`Telefone: ${users.phone}`); 
        const userWebsite = createParagraph(`Site: ${users.website}`);
        const userCompany = companyInfo(users.company);

        userArticle.append(
            userIdAndName,
            userName,
            userEmail,
            userAddress,
            userPhone,
            userWebsite,
            userCompany,
            document.createElement("hr")
        );

        userSection.appendChild(userArticle);
        usersList.appendChild(userSection);
    })
}

executar();