const data = require('../../models/skills');

exports.get = (req, res, next) => {
    res.send(data);
}