const apiKEY = `hMh3HuAr0u4JpmmpQoiKXQ==cec9rwBDYeVWILgg`;

function generateQuote() {
    const quote = document.querySelector("#quote");
    const author = document.querySelector("#author");

    fetch("https://api.api-ninjas.com/v1/quotes?category=movies", {
        headers: {
            'X-Api-Key': apiKEY
        }
    })
        .then(response => response.json())
        .then(data => {
            quote.textContent = data[0].quote;
            author.textContent = data[0].author;
        })
}

const button = document.querySelector("#new-quote");

button.addEventListener("click", generateQuote);