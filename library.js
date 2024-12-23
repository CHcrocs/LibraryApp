function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.title +" By "+ this.author + ", "+ this.pages + ", "+ this.read
    }
}

const book1 = new Book("Dragon Ball", "Akira Toriyama", "18 pages per chapter", "read")

console.log(book1.info())