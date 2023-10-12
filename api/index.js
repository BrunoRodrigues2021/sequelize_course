const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/test', (request, response) => response.status(200).send(
        {message: 'welcome to API'}
    )
);

app.listen(port, () => console.log(`server is running at port ${port}`));

module.exports = app;