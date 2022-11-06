const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log("server is running");
})

app.get("/", (req, res)=>{
    res.send("programming")
})

// DATA
const customers = [
    {title: "tanaka", id : 1},
    {title: "saitou", id : 2},
    {title: "hashimoto", id : 3},
    {title: "suzuki", id : 4},
    {title: "ando", id : 5},
]

// get data (CRUD)
app.get("/api/customers", (req,res)=>{
    res.send(customers);
})

app.get("/api/customers/:id", (req,res)=>{
    const customer = customers.find( (c) =>{
        if(c.id === parseInt(req.params.id)){return c;}
    })
    res.send(customer);
})

// post
app.post("/api/customers", (req,res)=>{
    const customer = {
        title: req.body.title,
        id: customers.length + 1
    }
    customers.push(customer);
    res.send(customers)
})

// PUT
app.put("/api/customers/:id", (req,res)=>{
    const customer = customers.find((c)=> c.id === parseInt(req.params.id));
    customer.title = req.body.title;
    res.send(customer);
})

// delete
app.delete("/api/customers/:id", (req,res)=>{
    const customer = customers.find((c)=> c.id === parseInt(req.params.id));
    const index = customers.indexOf(customer);
    customers.splice(index,1);
    res.send(customer);
})