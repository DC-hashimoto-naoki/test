
const url = "https://script.google.com/macros/s/AKfycbzEVVI0M4zeqZPoolrK8FOsIJahHBpthYAag7-RZZgt/dev";

let MsgData = "this is test";

let options = {
    method: 'POST',
    body: MsgData
}

let response = fetch(url, options)