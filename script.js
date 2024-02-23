
function Book(author, title, pages_num, read) {
    this.author = author;
    this.title = title;
    this.pages_num = pages_num;
    this.read = read;
}

const myLibrary = [];


function addBookToLibrary(){
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let author = document.getElementById("author").value;
        let title = document.getElementById("title").value;
        let numPages = document.getElementById("numPages").value;
        let read = document.querySelector('input[name="read"]:checked').value;
        
        const newBook = new Book(author, title, numPages, read);
        myLibrary.push(newBook);
    
        document.getElementById("myForm").reset();
    });
    
}

addBookToLibrary();

