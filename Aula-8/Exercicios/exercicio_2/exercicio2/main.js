const h2Title = document.getElementById("h2Title")
const bookForm = document.getElementById("bookForm");
const titleInput = document.getElementById("title");
const genrerInput = document.getElementById("genrer");
const synopsisText = document.getElementById("synopsis");
const readPagesInput = document.getElementById("readPagesInput")
const totalPagesInput = document.getElementById("totalPagesInput")
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
    const readPages = readPagesInput.value;
    const totalPages = totalPagesInput.value;

    if (readPages < 0 || readPages > totalPages) {
        alert("O número de páginas lidas deve ser maior ou igual a 0 e menor ou igual ao total de páginas.");
        return;
    }

    if (isEditing) {
        updateBook(editingBookId, title, genrer, synopsis, readPages, totalPages);
    } else {
        addBook(title, genrer, synopsis, readPages, totalPages);
    }
});

async function addBook(title, genrer, synopsis, readPages, totalPages) {
    try {
        const resposta = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({ title, genrer, synopsis, readPages, totalPages }), 
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
            const bookId = this.dataset.id;
            const book = findBookById(booksInfo, bookId);

            if (book) {
                console.log(`Editando livro: ID=${book.id}, Título=${book.title}`);
                titleInput.value = book.title;
                genrerInput.value = book.genrer;
                synopsisText.value = book.synopsis;
                readPagesInput.value = book.readPages;
                totalPagesInput.value = book.totalPages;

                toggleEditMode(true, bookId);

                //Move para o topo da página
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                console.error(`Livro com ID=${bookId} não encontrado.`);
            }
        });
    });

    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const bookId = this.dataset.id;
            const book = findBookById(booksInfo, bookId);

            if (book) {
                deleteBook(book.id)
                console.log(`Excluído o livro: ID=${book.id}, Título=${book.title}`);
            } else {
                console.error(`Erro ao excluir o Livro com ID=${bookId}.`);
            }
        });
    });

}


function showBooksList(booksInfo) {
    bookList.innerHTML = ""
    booksInfo.forEach(function (books) {
        const listItem = document.createElement("li")
        if (books.readPages >= books.totalPages) {
            listItem.innerHTML = `
            <article class="concluido">
            <h3>${books.title} - Livro Concluído!</h3>
            <p><strong>Gênero:</strong> ${books.genrer}</p>
            <p><strong>Sinopse:</strong> ${books.synopsis}</p>
            <p><strong>Progresso:</strong> ${books.readPages}/${books.totalPages} páginas</p>
            <button type="button" data-id="${books.id}" class="editButton">Editar</button>
            <button type="button" data-id="${books.id}" class="deleteButton">Excluir</button>
        </article>
        <hr>`;
        } else {
            listItem.innerHTML = `
            <article>
            <h3>${books.title}</h3>
            <p><strong>Gênero:</strong> ${books.genrer}</p>
            <p><strong>Sinopse:</strong> ${books.synopsis}</p>
            <p><strong>Progresso:</strong> ${books.readPages}/${books.totalPages} páginas</p>
            <button type="button" data-id="${books.id}" class="editButton">Editar</button>
            <button type="button" data-id="${books.id}" class="deleteButton">Excluir</button>
        </article>
        <hr>`;
        }

        bookList.appendChild(listItem)
    })
}

function limparFormulario() {
    titleInput.value = "";
    genrerInput.value = "";
    synopsisText.value = "";
    readPagesInput.value = "";
    totalPagesInput.value = "";
    toggleEditMode(false);
}

function findBookById(booksInfo, id) {
    return booksInfo.find(book => book.id === id);
}

function toggleEditMode(editing, bookId = null) {
    const submitButton = bookForm.querySelector('button[type="submit"]');
    if (editing) {
        h2Title.textContent = "Editando Livro";
        submitButton.textContent = "Salvar Alterações";
        cancelEditBtn.style.display = "inline";
        isEditing = true;
        editingBookId = bookId;
    } else {
        h2Title.textContent = "Novo Livro";
        submitButton.textContent = "Adicionar Livro a Lista";
        cancelEditBtn.style.display = "none";
        isEditing = false;
        editingBookId = null;
    }
}

async function updateBook(id, title, genrer, synopsis, readPages, totalPages) {
    try {
        const resposta = await fetch(`http://localhost:3000/books/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, genrer, synopsis, readPages, totalPages }),
        });

        if (!resposta.ok) {
            throw new Error(`Erro ao atualizar o livro: ${resposta.statusText}`);
        }

        console.log(`Livro com ID=${id} atualizado com sucesso.`);
        limparFormulario();
        toggleEditMode(false); 
        loadBookList();
    } catch (erro) {
        console.error(erro.message);
    }
}

async function deleteBook(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/books/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!resposta.ok) {
            throw new Error(`Erro ao deletar o livro: ${resposta.statusText}`);
        }

        console.log(`Livro com ID=${id} excluído com sucesso.`);
        limparFormulario(); 
        loadBookList();
    } catch (erro) {
        console.error(erro.message);
    }
}

function cancelarEdicao() {
    limparFormulario(); 
    toggleEditMode(false); 
}

const cancelEditBtn = document.getElementById('cancelEditBtn');
cancelEditBtn.addEventListener('click', cancelarEdicao);

// Para rodar é necessário abrir  terminais na pasta em que foi criado os arquivos e:

// No primeiro: executar o comando : npx json-server api.json
// No segundo: executar o comando : npm run dev

// Nesse segundo acesse o link fornecido precionando CTRL + CLICK