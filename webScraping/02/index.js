const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

// scraping
const URL = "https://search.rakuten.co.jp/search/mall/keyboad/";
const data = []

axios(URL)
    .then((response) => {
        const htmlParser = response.data;
        // console.log(htmlParser);

        const $ = cheerio.load(htmlParser);

        $(".searchresultitem", htmlParser).each(function () {
            const title = $(this).find(".title").text();
            const price = $(this).find(".important").text();
            data.push({ title, price });
            write2csv(data);
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.listen(PORT, console.log('server runnning'));


// fs
const fs = require("fs");

function write2csv(data) {
    let json = JSON.stringify(data);
    let obj = json2csv(data)
    fs.writeFile('log/text.csv', obj, (err) => {
        if (err) { throw err; };
        console.log(typeof (obj))
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

// encode to ANSI
const os = require('os');
var chilkat = require('@chilkat/ck-node11-win64');

function chilkatExample() {

    // This example assumes the Chilkat API to have been previously unlocked.
    // See Global Unlock Sample for sample code.

    var charset = new chilkat.Charset();

    charset.FromCharset = "utf-8";
    charset.ToCharset = "ANSI";

    // We could alternatively be more specific and say "Windows-1252".
    // The term "ANSI" means -- whatever character encoding is defined as the ANSI
    // encoding for the computer.  In Poland, for example, it would be the single-byte-per-char
    // used to represnt Eastern European language chars, which is Windows-1250.
    charset.ToCharset = "Windows-1252";

    var success = charset.ConvertFile("log/text.txt", "log/text02.txt");
    if (success !== true) {
        console.log(charset.LastErrorText);
        return;
    }

    console.log("Success.");

}

chilkatExample();