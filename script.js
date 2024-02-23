
function Book(author, title, pages_num, read,index) {
    this.author = author;
    this.title = title;
    this.pages_num = pages_num;
    this.read = read;
    this.index = index;
}

const myLibrary = [];


function addBookToLibrary(){
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let author = document.getElementById("author").value;
        let title = document.getElementById("title").value;
        let numPages = document.getElementById("numPages").value;
        let read = document.querySelector('input[name="read"]:checked').value;
        let index = myLibrary.length+1;
        
        const newBook = new Book(author, title, numPages, read,index);
        myLibrary.push(newBook);
        console.log(newBook.index);
    
        document.getElementById("myForm").reset();
        displayBooks(newBook);
    });
    
}

function displayBooks(book){
    document.getElementById("books").innerHTML += `
    <div class="book">
        <ul>
            <li>Author: ${book.author}<li>
            <li>Title: ${book.title}<li>
            <li>Number of pages: ${book.pages_num}<li>
            <li>Read: ${book.read}<li>
        <ul>
    <div>`
    
}


addBookToLibrary();

