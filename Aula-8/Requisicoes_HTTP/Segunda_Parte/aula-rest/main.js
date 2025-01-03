const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const postsList = document.getElementById("postsList");

carregarPosts()

postForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = titleInput.value;
    const body = bodyInput.value;

    criarPost(title, body);
});

async function criarPost(title, body) {
    try {
        const resposta = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Corrigido
            },
            body: JSON.stringify({ title, body }), // Corrigido
        });

        if (!resposta.ok) {
            throw new Error(`Erro ao criar post: ${resposta.statusText}`);
        }

        const post = await resposta.json();
        limparFormulario();
        carregarPosts();
    } catch (erro) {
        console.error(erro.message);
    }
}

async function carregarPosts() {
    const resposta = await fetch("http://localhost:3000/posts")
    const posts = await resposta.json()

    exibirPosts(posts)
}


function exibirPosts(posts) {
    postsList.innerHTML = ""
    posts.forEach(function (posts) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `<article> <h3>${posts.title}</h3> <p>${posts.body}</p> </article><hr>`
        postsList.appendChild(listItem)
    })
}


function limparFormulario() {
    titleInput.value = "";
    bodyInput.value = "";
}


// Para rodar é necessário abrir  terminais na pasta em que foi criado os arquivos e:

// No primeiro: executar o comando : npx json-server api.json
// No segundo: executar o comando : npm run dev

// Nesse segundo acesse o link fornecido precionando CTRL + CLICK