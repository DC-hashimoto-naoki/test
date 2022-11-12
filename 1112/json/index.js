const url = "http://localhost:3000/user";

// fetch(url)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "cat1": 100,
        "cat2": 1000,
        "cat10": 10000,
    })
}).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})

// fetch(url, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         "cat10": 10000,
//     })
// }).then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })