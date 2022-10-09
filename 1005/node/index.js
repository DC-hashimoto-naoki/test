const fs = require('fs');
const cheerio = require('cheerio');

let jsonFile = [
    { id: 1, name: "test", address: "tokyo" },
    { id: 2, name: "hoge", address: "osaka" },
    { id: 3, name: "hello", address: "kyoto" },
    { id: 4, name: "world", address: "saitama" }
]

function json2csv(json) {
    var header = Object.keys(json[0]).join(',') + "\n";

    var body = json.map(function (d) {
        return Object.keys(d).map(function (key) {
            return d[key];
        }).join(',');
    }).join("\n");

    return header + body;
}

fs.readFile('index.html', 'utf-8', (err, data) =>{
    if(err){throw err};
    console.log(data);
    fs.writeFile('new.txt', data, function(err){
        if(err){throw err};
        console.log('create');    
    })
})

// fs.writeFile('new.csv', json2csv(jsonFile), function(err){
//     if(err){ throw err};
//     console.log('create')
// })