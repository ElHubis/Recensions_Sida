
window.addEventListener("load", ()=>{
    const pageTitle = 'Rubens Recensioner/bok';
    document.title = pageTitle;
});

window.addEventListener("load", ()=>{
    fetch("data.json")

    .then(response => response.json())

    .then(data => {
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
    })
    

});