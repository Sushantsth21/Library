// Book constructor function
function Book(author, title, pages_num, read, index) {
    this.author = author;
    this.title = title;
    this.pages_num = pages_num;
    this.read = read;
    this.index = index;
}

// Method to toggle the read status of a book
Book.prototype.toggleReadStatus = function() {
    this.read = this.read === 'yes' ? 'no' : 'yes';
};

// Array to store book objects
const myLibrary = [];

// Function to add a book to the library
function addBookToLibrary() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let author = document.getElementById("author").value;
        let title = document.getElementById("title").value;
        let numPages = document.getElementById("numPages").value;
        let read = document.querySelector('input[name="read"]:checked').value;
        let index = myLibrary.length + 1;

        const newBook = new Book(author, title, numPages, read, index);
        myLibrary.push(newBook);

        dialog.close();
        displayBooks(newBook);
    });
}

// Function to delete a book from the library by index
function deleteBookByIndex(index) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].index === index) {
            myLibrary.splice(i, 1);
            break;
        }
    }
}

// Function to display books in the library
function displayBooks(book) {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    let toggle = book.read === 'yes' ? 'No' : 'Yes';
    bookDiv.innerHTML = `
        <ul>
            <li>Author: ${book.author}</li>
            <li>Title: ${book.title}</li>
            <li>Number of pages: ${book.pages_num}</li>
            <li class="readToggle">Read: ${book.read}</li>
        </ul>
        <button class="delete" data-index="${book.index}">Delete</button>
        <button class="toggle" data-index="${book.index}">${toggle}</button>
        `;

    document.getElementById("books").appendChild(bookDiv);
}

// Add initial event listeners
document.getElementById("books").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        const indexToDelete = parseInt(event.target.dataset.index);
        deleteBookByIndex(indexToDelete);
        event.target.parentNode.remove();
    }
});

// Add event listener for toggling read status
document.getElementById("books").addEventListener("click", function(event) {
    if (event.target.classList.contains("toggle")) {
        const indexToToggle = parseInt(event.target.dataset.index);
        const bookToToggle = myLibrary.find(book => book.index === indexToToggle);
        
        // Toggle the read status of the book
        bookToToggle.toggleReadStatus();
        
        // Find the specific element displaying the read status within the parent node
        const readElement = event.target.parentNode.querySelector('.readToggle');
        
        // Update the displayed read status
        readElement.textContent = `Read: ${bookToToggle.read}`;
        
        // Update the displayed status on the toggle button
        event.target.textContent = bookToToggle.read === 'yes' ? 'No' : 'Yes';
    }
});


const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});