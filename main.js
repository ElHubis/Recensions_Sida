document.addEventListener("DOMContentLoaded", function(){
    fetch("data.json")
        .then(response => response.json())
        .then(books => {
            books.Books.forEach(book => console.log(book));

            const book_reviews = document.getElementById("book_reviews");

            books.Books.forEach(item => { // Creates a div for every book element
                const itemContainer = document.createElement("div");
                itemContainer.classList.add("book");

                const coverElement = document.createElement("img");
                coverElement.src = item.Cover;
                coverElement.alt = item.Title;
                itemContainer.appendChild(coverElement);

                const titleElement = document.createElement("h4");
                titleElement.textContent = item.Title;
                titleElement.contentEditable = true;
                itemContainer.appendChild(titleElement);

                const authorElement = document.createElement("p");
                authorElement.textContent = item.Author;
                authorElement.contentEditable = true;
                itemContainer.appendChild(authorElement);

                book_reviews.appendChild(itemContainer);
                
            });

        })
        
        .catch(error => {
            console.error("sämst bruh");
        })
})