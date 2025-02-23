// export {setBookVariable};
// export {currentBookId}

function setBookId(element) {
    let bookVariable = element.getAttribute("id");
    console.log(bookVariable);
}

function setBookUrl(bookId) {
    const newUrl = `${window.location.origin}/bookreviews/${bookId}`;
    history.pushState({ bookId: bookId }, '', newUrl);
    console.log(`URL updated to: ${newUrl}`);
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())

        .then(books => {
            const items = Object.values(books.Books[0]);
            // items.forEach(item => console.log(item));

            const bookReviews = document.getElementById("book_reviews");

            items.forEach(item => { // Creates a div for every book element
                const itemContainer = document.createElement("div");
                itemContainer.classList.add("book");
                
                // href = "subpage.html?id=${item.Id}"
                // https://stackoverflow.com/questions/406192?arg1=value1&arg2=value2#death
                // URLSearchParams() -> {arg1: value1, arg2: value2}

                // const urlParams = new URLSearchParams(window.location.search);
                // const bookId = urlParams.get('bookId');

                // const args = urlParams.getAll() // = {bookId: 123}
                // args.bookId
                // console.log(bookId); // Outputs: 123
                
                const linkElement = document.createElement("a");
                linkElement.href = `subpage.html?bookId=${item.Id}`;
                itemContainer.appendChild(linkElement);

                const secondItemContainer = document.createElement("div");
                linkElement.appendChild(secondItemContainer);

                const coverElement = document.createElement("img");
                coverElement.src = item.Cover;
                coverElement.alt = item.Title;
                secondItemContainer.appendChild(coverElement);

                const titleElement = document.createElement("h4");
                titleElement.textContent = item.Title;
                titleElement.contentEditable = true;
                secondItemContainer.appendChild(titleElement);

                const authorElement = document.createElement("p");
                authorElement.textContent = item.Author;
                authorElement.contentEditable = true;
                secondItemContainer.appendChild(authorElement);

                bookReviews.appendChild(itemContainer);

            }
            );

        })

    fetch("data.json")
        .then(response => response.json())

        .then(albums => {
            const items = Object.values(albums.Albums[0]);
            // items.forEach(item => console.log(item));

            const albumReviews = document.getElementById("music_reviews");

            items.forEach(item => { // Creates a div for every album element
                const itemContainer = document.createElement("div");
                itemContainer.classList.add("album");

                const coverElement = document.createElement("img");
                coverElement.src = item.Cover;
                coverElement.alt = item.Title;
                itemContainer.appendChild(coverElement);

                const titleElement = document.createElement("h4");
                titleElement.textContent = item.Title;
                titleElement.contentEditable = true;
                itemContainer.appendChild(titleElement);

                const artistElement = document.createElement("p");
                artistElement.textContent = item.Artist;
                artistElement.contentEditable = true;
                itemContainer.appendChild(artistElement);

                albumReviews.appendChild(itemContainer);

            });

        })

        .catch(error => {
            console.error("sämst bruh");
        })
})