const postForm = document.getElementById("bookForm");
const titleInput = document.getElementById("title");
const genrerInput = document.getElementById("genrer");
const synopsisText = document.getElementById("synopsis");
const bookList = document.getElementById("bookList")

loadBookList()

postForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = titleInput.value;
    const genrer = genrerInput.value;
    const synopsis = synopsisText.value;

    addBook(title, genrer, synopsis);
});

async function addBook(title, genrer, synopsis) {
    try {
        const resposta = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Corrigido
            },
            body: JSON.stringify({ title, genrer, synopsis}), // Corrigido
        });

        if (!resposta.ok) {
            throw new Error(`Erro ao adicionar o livro: ${resposta.statusText}`);
        }

        const bookInfo = await resposta.json();
        limparFormulario();
        loadBookList();
    } catch (erro) {
        console.error(erro.message);
    }
}

async function loadBookList() {
    const resposta = await fetch("http://localhost:3000/books")
    const booksInfo = await resposta.json()

    showBooksList(booksInfo)
}


function showBooksList(booksInfo) {
    bookList.innerHTML = ""
    booksInfo.forEach(function (books) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `<article> <h3>${books.title}</h3> <p>${books.genrer} <p>${books.synopsis}</p> </article><hr>`
        bookList.appendChild(listItem)
    })
}


function limparFormulario() {
    titleInput.value = "";
    genrerInput.value = "";
    synopsisText.value = "";
}


// Para rodar é necessário abrir  terminais na pasta em que foi criado os arquivos e:

// No primeiro: executar o comando : npx json-server api.json
// No segundo: executar o comando : npm run dev

// Nesse segundo acesse o link fornecido precionando CTRL + CLICK