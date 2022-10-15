const key = "BfntEDkUpmfcGNabO48VfVr8n4NidblA";
const requestURL = "https://api.nhk.or.jp/v2/pg/list/270/g1/2022-10-15.json?key=" + key;

fetch(requestURL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.table(data.list.g1);
        let listData = data.list.g1[0];
        buidComponents(listData)
    })
    .catch(error => {
        console.error(error);
    })

/**
 * mouting Vue component
 */

function buidComponents(listData) {
    let title = listData.title;
    let subtitle = listData.subtitle;
    let content = listData.content;
    let act = listData.act;
    let image = listData.service.logo_l.url;


    const app = Vue.createApp({
        data() {
            return { 
                title: title,
                image: image
            }
        }
    })

    const vm = app.mount('#app');
}

