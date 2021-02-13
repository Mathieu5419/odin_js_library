// all the function that will be used
function Book(title,author,pageNumber,read) {
    this.title = title;
    this.author = author;
    this.pageNumber= pageNumber;
    this.read= read;
}
let myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
    return myLibrary
}

function displayLibrary(library) {
    const alibrary = document.querySelector('.library');
    
    library.forEach(element => {
    const displayElement = document.createElement('div');
    displayElement.classList.add('displayElement');

        const titleParagraph = document.createElement('p');
        titleParagraph.textContent = `Book: ${element.title}`;
        displayElement.appendChild(titleParagraph);
        
        const authorParagraph = document.createElement('p');
        authorParagraph.textContent = `Author: ${element.author}`;
        displayElement.appendChild(authorParagraph);

        const numberOfPages = document.createElement('p');
        numberOfPages.textContent = `${element.pageNumber}`;
        displayElement.appendChild(numberOfPages);
        
        alibrary.appendChild(displayElement);
    });
}


// function usage
const book1 = new Book('tsio-drivotra','Rootsikalo','100','yes');
const book2 = new Book('Ranonkombe','Ifanihy','120','not yet');
const book3 = new Book('tsy hitako', 'Rootsikalo','75','yes');
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
displayLibrary(myLibrary);