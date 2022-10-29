const root = document.getElementById("root");

// NTT API
const baseUrl = "https://api.ce-cotoha.com/api/dev/";
const clientId = "mkmA70gA1htjOron7jis5wIt2f3QowF5";
const clientSecret = "freMttrQjsrzxZrB";
const AccessTokenUrl = "https://api.ce-cotoha.com/v1/oauth/accesstokens";

// get token
const data = {
    "grantType": "client_credentials",
    "client_credentials": clientId,
    "clientSecret": clientSecret
}

// fetch
const parameter = {
    method: 'POST',
    headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        "payload": JSON.stringify(data)
    }
}

const result = fetch(AccessTokenUrl, parameter)
                        .then((response) =>{
                            console.log(response);
                            return response.json();
                        })