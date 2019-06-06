const data = require('../../models/homePage');

exports.get = (req, res, next) => {
    res.send(data);
}