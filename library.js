const myLibrary = [];
const tbody = document.querySelector("#tbody");

function Book(title, author, pages, read, id) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
} 

function addBookToLibrary(title, author, pages, read) {
    const id = crypto.randomUUID();
    const book = new Book(title, author, pages, read, id);
    return myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach((book) => {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        const title = document.createElement("td");
        title.textContent = book.title;
        tr.appendChild(title);

        const author = document.createElement("td");
        author.textContent = book.author;
        tr.appendChild(author);

        const pages = document.createElement("td");
        pages.textContent = book.pages;
        tr.appendChild(pages);

        const read = document.createElement("td");
        read.textContent = book.read;
        tr.appendChild(read);

        const id = document.createElement("td");
        id.textContent = book.id;
        tr.appendChild(id);

    });
}

displayBooks();