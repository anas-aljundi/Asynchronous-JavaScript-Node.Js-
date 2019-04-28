const Joi = require('joi');

const express = require('express');

const app = express();

app.use(express.json());

const products = [
    {id:1, name:'HeadPhone'},
    {id:2, name:'Iphone'},
    {id:3, name:'Tablet'}
];

app.get('/', (req, res) => {
    res.send(JSON.stringify([3,2,1]));
});

app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/product/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if(!product) {
        res.status(404).send('The Product your are searching about was not Found');
    }

    res.send(product);
});

app.post('/api/products', (req,res) => {
    
    const schema = {
        name : Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
    }

    const product = {
        id : products.length + 1,
        name : req.body.name
    };
    products.push(product);
    res.send(product);
});

app.put('/api/products/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if(!product) {
        res.status(404).send('the producte you are trying to edit not found');
    }

    const schema = {
        name: Joi.string().min(3).max(10).required()
    };

    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    product.name= req.body.name;
    res.send(`the product updated successfully: ${product}`);
});

app.delete('/api/products/:id', (req, res) => {
    const product = products.find(c => c.id === parseInt(req.params.id));
    if (!product) {
        res.status(404).send('The product which you are trying to delete was not found');
    }
    const index = products.indexOf(product);
    products.splice(index, 1);
    res.send(product);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to Port ${port}...`));