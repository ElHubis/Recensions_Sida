// import { setBookVariable } from "./main.js";

function setBookUrl(bookId){
    const newUrl = `${window.location.origin}/bookreviews/${bookId}`;
    history.pushState({bookId: bookId}, '', newUrl);
    console.log(`URL updated to: ${newUrl}`);
}

window.addEventListener("load", ()=>{
    const pageTitle = 'Rubens Recensioner/bok';
    document.title = pageTitle;
});

window.addEventListener("load", ()=>{
    fetch("data.json")

    .then(response => response.json())

    .then(data => {
        const urlParams = new URLSearchParams(window.location.search);
        const bookId = urlParams.get('bookId');
        console.log(bookId); // Outputs: 123
        
        const books = data.Books[0];

        const pageTitle = `Rubens Recensioner/${books.HTTYD.Title}`;
        document.title = pageTitle;

        const contentContainer = document.getElementById("content_container");

        const bookCover = document.createElement("img");
        bookCover.src = books.HTTYD.Cover
        bookCover.alt = books.HTTYD.Cover
        contentContainer.appendChild(bookCover)

        const bookTitle = document.createElement("h1");
        bookTitle.textContent = books.HTTYD.Title;
        contentContainer.appendChild(bookTitle);

        const author = document.createElement("h3");
        author.textContent = books.HTTYD.Author
        contentContainer.appendChild(author)

        const reviewText = document.createElement("p");
        reviewText.textContent = books.HTTYD.Text;
        contentContainer.appendChild(reviewText)
    },
    
    console.log(bookVariable)
)
    

});