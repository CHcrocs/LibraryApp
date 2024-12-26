const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    return myLibrary.push(new Book(title, author, pages, read))
}

function displayBooks(livros) {
    const container = document.getElementById("libraryTableContainer");
    container.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("table_library")

    const headerRow = document.createElement("tr")

    const header = ["Title", "Author", "Pages", "Read"];
    header.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th)
    })

    table.appendChild(headerRow);

    livros.forEach(book => {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td")
        titleCell.textContent = book.title
        row.appendChild(titleCell)

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const pagesCell = document.createElement('td');
        pagesCell.textContent = book.pages;
        row.appendChild(pagesCell);

        const readCell = document.createElement('td');
        readCell.textContent = book.read ? 'Yes' : 'No';
        row.appendChild(readCell);

        table.appendChild(row);
    })

    container.appendChild(table)
}

/* addBookToLibrary("Merlin", "Ligma", 200, false)
addBookToLibrary("Abacate", "Steve Jobs", 300, true)
addBookToLibrary("Mercurio", "American", 400, true) */

function displayForm() {
    const container = document.getElementById("formContainer")
    container.hidden = false
}

function hideForm(event) {
    const container = document.getElementById("formContainer")
    container.hidden = true
    
    event.preventDefault()
}

function addNewBook(event) {
    event.preventDefault()

    const container = document.getElementById("formContainer")

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value, 10);
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read)

    displayBooks(myLibrary)

    container.hidden = true
}


displayBooks(myLibrary)