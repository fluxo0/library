const myLibrary = [];
const tbody = document.querySelector("#tbody");
const dialog = document.querySelector("dialog");
const bookBtn = document.querySelector(".container button");
const closeBtn = document.querySelector("dialog button");
const form = document.querySelector("form");

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

addBookToLibrary("foo1", "bar1", 100, "no");
addBookToLibrary("foo2", "bar2", 200, "yes");
addBookToLibrary("foo3", "bar3", 300, "no");
console.table(myLibrary); 

function displayBooks() {
    deleteTable();

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

bookBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

form.addEventListener("submit", submitClick);

function submitClick(event) {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");

    addBookToLibrary(title.value, author.value, pages.value, read.value);
    event.preventDefault();

    displayBooks();
    dialog.close();
}

function deleteTable() {
    const table = document.querySelector("table");
    
    for (let i = table.rows.length - 1; i >= 1; i--) {
        table.deleteRow(i);
    }
}

// test
displayBooks();