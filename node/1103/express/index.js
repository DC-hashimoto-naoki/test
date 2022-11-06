
const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/aaa/:id', (req, res) => {
    res.send('AAA!' + req.params.id);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})