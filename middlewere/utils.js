const posts = require('../data/posts.js'); //importiamo i post

function existsId(req, res, next){
    const id =  req.params.id
    const postId = posts.findIndex((el)=> el.id === parseInt(id) || el.slug === id)

    if(postId === -1){
        res.status(404)
        return res.json({
            error:"not found",
            message:"non presente"
        })
    }

    next();
}

function checkInput(req, res, next){
    const {title, slug, content, image, tags} = req.body;

    if(!title || !slug || !content || !image || !tags){
        res.status(403)
        return res.json({
            error:"invalid request",
            message:"dati non completi"
        })
    } 

    next()
}

function checkInputUpdate(req, res, next){

    const {title, slug, content, image, tags} = req.body;
    let error = [];
    if(!title){ error.push("name non presente") } 
    if(!slug){ error.push("slug non presente") }
    if(!content){ error.push(" content non presente") } 
    if(!image){ error.push("image non presente") }
    if(!tags){ error.push("tags non presente") }
    if(error.length > 0){
        res.status(403)
        return res.json({
            error:"invalid req",
            message: error
        })
    }

    next()
}

function checkVoid (req, res, next){
    const keysArr = Object.keys(req.body); //se invece esiste l'id, prendo le chiavi del json che mi è stato mandato
    if(keysArr.length == 0){ //se sono 0
        return res.json({error:"insert something"}) //vuol dire che non mi hanno mandato nulla
    }
    next()
}

module.exports = {existsId, checkInput, checkInputUpdate, checkVoid};