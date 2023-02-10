import 'dotenv/config';
import express from 'express';
import * as products from './products-model.mjs';
import cors from 'cors';
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());


// GET products filtered by type,  name, description, or date
app.get('/totalNumberOfEndorsedProducts', (req, res) => {
    let filter = {};
    products.findNumberOfProducts(filter, '', 0)
        .then(products => {
            res.send(products.toString());
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request to retrieve documents failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});