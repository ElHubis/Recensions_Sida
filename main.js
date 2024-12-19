fetch("data.json")
    .then(response => response.json())
    .then(books => {
        books.Books.forEach(book => console.log(book))

        const book_reviews = document.getElementById("book_reviews")

    })
    
    .catch(error => {
        console.error("sämst bruh")
    })
