const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

// scraping
const URL = "https://www.amazon.co.jp/s?k=shoes";
const data = []

axios(URL)
    .then((response) => {
        const htmlParser = response.data;
        // console.log(htmlParser);

        const $ = cheerio.load(htmlParser);

        $(".s-result-item", htmlParser).each(function () {
            const title = $(this).find("h2").text();
            const price = $(this).find("[data-a-color='price'] .a-price-whole").text();
            data.push({ title, price });
            write2txt(data);
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.listen(PORT, console.log('server runnning'));


// fs
const fs = require("fs");

function write2txt(data) {
    let json = JSON.stringify(data);
    fs.writeFile('log/text.txt', json, (err) => {
        if (err) { throw err; };
    })
}

function write2csv(data) {
    let obj = json2csv(data)
    fs.writeFile('log/text.csv', obj, (err) => {
        if (err) { throw err; };
    })
}

function json2csv(json) {
    var header = Object.keys(json[0]).join(',') + "\n";

    var body = json.map(function (d) {
        return Object.keys(d).map(function (key) {
            return d[key];
        }).join(',');
    }).join("\n");

    return header + body;
}