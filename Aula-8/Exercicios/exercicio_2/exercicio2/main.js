const bookForm = document.getElementById("bookForm");
const titleInput = document.getElementById("title");
const genrerInput = document.getElementById("genrer");
const synopsisText = document.getElementById("synopsis");
const addBookBtn = document.getElementById("addBookBtn");
const bookList = document.getElementById("bookList");
let isEditing = false;
let editingBookId = null;



loadBookList()

bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = titleInput.value;
    const genrer = genrerInput.value;
    const synopsis = synopsisText.value;

    if (isEditing) {
        updateBook(editingBookId, title, genrer, synopsis);
    } else {
        addBook(title, genrer, synopsis);
    }
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
    const resposta = await fetch("http://localhost:3000/books");
    const booksInfo = await resposta.json();

    showBooksList(booksInfo);

    const editButtons = document.querySelectorAll('.editButton');
    editButtons.forEach(button => {
        button.addEventListener('click', function () {
            const bookId = this.id;
            const book = findBookById(booksInfo, bookId);

            if (book) {
                console.log(`Editando livro: ID=${book.id}, Título=${book.title}`);
                titleInput.value = book.title;
                genrerInput.value = book.genrer;
                synopsisText.value = book.synopsis;

                toggleEditMode(true, bookId);
            } else {
                console.error(`Livro com ID=${bookId} não encontrado.`);
            }
        });
    });
}



function showBooksList(booksInfo) {
    bookList.innerHTML = ""
    booksInfo.forEach(function (books) {
        const listItem = document.createElement("li")
        listItem.innerHTML = `<article> <h3>${books.title}</h3> <p>${books.genrer} <p>${books.synopsis}</p> <button type="button"  id="${books.id}" class="editButton">Editar</button> </article><hr>`

        bookList.appendChild(listItem)
    })
}

function limparFormulario() {
    titleInput.value = "";
    genrerInput.value = "";
    synopsisText.value = "";
    toggleEditMode(false);
}

function findBookById(booksInfo, id) {
    return booksInfo.find(book => book.id === id);
}

function toggleEditMode(editing, bookId = null) {
    const submitButton = bookForm.querySelector('button[type="submit"]');
    if (editing) {
        submitButton.textContent = "Salvar Alterações";
        isEditing = true;
        editingBookId = bookId;
    } else {
        submitButton.textContent = "Adicionar Livro a Lista";
        isEditing = false;
        editingBookId = null;
    }
}

async function updateBook(id, title, genrer, synopsis) {
    try {
        const resposta = await fetch(`http://localhost:3000/books/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, genrer, synopsis }),
        });

        if (!resposta.ok) {
            throw new Error(`Erro ao atualizar o livro: ${resposta.statusText}`);
        }

        console.log(`Livro com ID=${id} atualizado com sucesso.`);
        limparFormulario();
        toggleEditMode(false); // Retornar ao modo de adição
        loadBookList();
    } catch (erro) {
        console.error(erro.message);
    }
}

// Para rodar é necessário abrir  terminais na pasta em que foi criado os arquivos e:

// No primeiro: executar o comando : npx json-server api.json
// No segundo: executar o comando : npm run dev

// Nesse segundo acesse o link fornecido precionando CTRL + CLICK