
const key = "c74ecfe87d717d89"
const address = "大阪市中央区"
const endpoint = "https://webservice.recruit.co.jp/hotpepper/gourmet/v1/"
const url = `${endpoint}?key=${key}&address=${address}`;
console.log(url);

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });