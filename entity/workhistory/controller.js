const data = require('../../models/workPage');

exports.get = (req, res, next) => {
    res.send(data);
}