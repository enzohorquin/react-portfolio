const data = require('../../models/education');

exports.get = (req, res, next) => {
    res.send(data);
}