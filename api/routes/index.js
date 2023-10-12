const bodyParser = require('body-parser');
const people = require('./people-route');
const levels = require('./levels-route');
const classes = require('./classes-route');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(people);
    app.use(levels);
    app.use(classes);
    app.get('/', (req, res) => res.send('hello'));
}