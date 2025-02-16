
window.addEventListener("load", ()=>{
    const pageTitle = 'Rubens Recensioner/bok';
    document.title = pageTitle;
});

window.addEventListener("load", ()=>{
    fetch("data.json")

    .then(response => response.json())

    .then(data => {
        document.body.innerHTML = `
        <div class="navbar">
            <nav>
                <a href="index.html" class="small_logo">RЯ</a>
                <a href="musik.html">Musik</a>
                <a href="böcker.html">Böcker</a>
                <a href="eget.html">Egna Texter</a>
            </nav> 
        </div>
    
        <div class="titleCard">
            <img src="" alt="">
            <h1>
                ${data.Books[0].HTTYD.Title}
            </h1>
        </div>
        `
    })
    

});