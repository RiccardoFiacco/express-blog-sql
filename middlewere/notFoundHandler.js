function notFoundH (req, res, next){
    res.status(404)
    return res.json({
        error: "not found",
        message: "page not found"
    })
}

module.exports = notFoundH;