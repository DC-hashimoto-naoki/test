
const accessKey = "GlCc4ZAGmaw4GOlOWCcuwiS3hd_yb3Tkmy_6BNOBffo";
const endpoint = "https://api.unsplash.com";
const path = "/search/photos/";
const query = "dog";

const url = `${endpoint}${path}?client_id=${accessKey}&query=${query}`;
console.log(url);

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results[0])
        results = data.results;
        let urls = [];
        results.forEach(result => {
            let url = result.urls.regular;
            urls.push(url);
        })
        createComponents(urls)
        console.log(urls)
    })

function createComponents(data){
    new Vue({
        el: "#app",
        data: {
            text: "apple",
            urls: data
        }
    })
}

