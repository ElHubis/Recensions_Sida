document.addEventListener("DOMContentLoaded", function(){
    fetch("data.json")
        .then(response => response.json())
        
        .then(books => {
            const items = Object.values(books.Books[0])
            console.log(items)

            items.forEach(item => console.log(item))

            for (let i in items)
                console.log(items[i].Title);
        })

        .catch(error => {
            console.error("sämst bruh");
        })

        fetch("data.json")
        .then(response => response.json())
        
        .then(books => {
            console.log(books.Books[0]);
            const items = Object.values(books)

            items[0].forEach(item => console.log(item))

            for (let i in items[0])
                console.log(items[0][i]);
        })

        .catch(error => {
            console.error("sämst bruh");
        })
})