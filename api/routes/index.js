const bodyParser = require('body-parser');
const people = require('./people-route');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(people);
    app.get('/', (req, res) => res.send('hello'));
}