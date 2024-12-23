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

function displayBooks(){
    
}



// addBookToLibrary("a", "b", "c", "d")
// addBookToLibrary("t", "r", "e", "q")
// addBookToLibrary("a", "a", "c", "d")

// console.log(myLibrary);