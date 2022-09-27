
const api_key = "946e1070d760427fb1a99af70cd1aa62";
const endPoint = "https://newsapi.org/v2/top-headlines";
const country = "jp";
const url = `${endPoint}?country=${country}&apiKey=${api_key}`;

const message = document.getElementById('message');


fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        message.innerText = data.articles[0].title;
    })
    .catch(error => {
        console.log(error);
    });