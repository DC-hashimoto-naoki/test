const http = require('http');
const fs = require('fs');
const { JSDOM } = require("jsdom");


let indexDocument = fs.readFileSync('index.html', 'utf-8');
const dom = new JSDOM(indexDocument);
const root = dom.window.document.getElementById('root'); 
let text = root.textContent;
root.textContent = "that was test";
console.log(root.innerHTML);

fs.writeFileSync('test.html', root.innerHTML);