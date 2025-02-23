
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('bookId');

window.addEventListener("load", ()=>{
    const pageTitle = 'Rubens Recensioner/bok';
    document.title = pageTitle;
});

// 
// books.HTTYD.Title
// ==
// const bookId = "HTTYD"
// books[bookId].Title


window.addEventListener("load", ()=>{
    fetch("data.json")

    .then(response => response.json())

    .then(data => {
        const books = data.Books[0];

        const pageTitle = `Rubens Recensioner/${books[bookId]?.Title || "Saknar titel"}`;
        document.title = pageTitle;

        const contentContainer = document.getElementById("content_container");

        const bookCover = document.createElement("img");
        bookCover.src = books[bookId].Cover
        bookCover.alt = books[bookId].Cover
        contentContainer.appendChild(bookCover)

        const bookTitle = document.createElement("h1");
        bookTitle.textContent = books[bookId].Title;
        contentContainer.appendChild(bookTitle);

        const author = document.createElement("h3");
        author.textContent = books[bookId].Author
        contentContainer.appendChild(author)

        const reviewText = document.createElement("p");
        reviewText.textContent = books[bookId].Text;
        contentContainer.appendChild(reviewText)
    },
    
)
    

});