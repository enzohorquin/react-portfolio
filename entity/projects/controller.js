const data = require('../../models/project');

exports.get = (req, res, next) => {
    res.send(data);
}