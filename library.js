const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.readTheBook = function() {
        this.read = !this.read
    }
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

    const header = ["Title", "Author", "Pages", "Read", "Action", "Remove"];
    header.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th)
    })

    table.appendChild(headerRow);

    livros.forEach((book, index) => {
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

        const actionCell = document.createElement("td")
        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = 'Toggle Read';
        toggleReadButton.setAttribute('data-index', index);
        toggleReadButton.addEventListener('click', toggleReadStatus);
        actionCell.appendChild(toggleReadButton);
        row.appendChild(actionCell);


        const removeCell = document.createElement("td")
        const removeButton = document.createElement("button")
        removeButton.textContent = 'X';
        removeButton.setAttribute('data-index', index);
        removeButton.addEventListener('click', removeBook);
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        table.appendChild(row);
    })

    container.appendChild(table)
}

function removeBook(event) {
    const bookIndex = event.target.getAttribute('data-index');
    myLibrary.splice(bookIndex, 1); // Remove the book from the array
    displayBooks(myLibrary); // Refresh the displayed books
}

function toggleReadStatus(event) {
    const bookIndex = event.target.getAttribute('data-index');
    myLibrary[bookIndex].readTheBook(); // Toggle the read status of the book
    displayBooks(myLibrary); // Refresh the displayed books
}

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