function errorH (err, req, res, next){
    res.status(500)
    return res.json({
        error: err.message,
    })
};

module.exports = errorH;