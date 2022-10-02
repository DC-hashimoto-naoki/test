
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
        console.table(data.articles[0]);
        buildComponents(data);

    })
    .catch(error => {
        console.log(error);
    });


/**
 * Vue components
 */

function buildComponents(data) {

    function setData(rowData) {
        const formatedData = []
        for (let index = 0, length = rowData.articles.length; index < length; index++) {
            formatedData.push({
                source: rowData.articles[index].source,
                author: rowData.articles[index].author,
                title: rowData.articles[index].title,
                description: rowData.articles[index].description,
                url: rowData.articles[index].url,
                urlToImage: rowData.articles[index].urlToImage,
                publishedAt: rowData.articles[index].publishedAt,
                content: rowData.articles[index].content
            })
        }

        console.log(formatedData);
        return formatedData;
    }

    var app = new Vue({
        el: '#app',
        data: {
            appTitle: "ヘッドラインニュース" ,
            articles: setData(data),
        }
    })
}
