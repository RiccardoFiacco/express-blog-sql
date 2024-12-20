const express = require('express')
const router = express.Router();
const postController = require("../controller/postController.js")
const {existsId, checkInput, checkInputUpdate, checkVoid} = require("../middlewere/utils.js")

//index
router.get('/', postController.index,  () => {
    console.log('Fine index');
});

//tags
router.get('/tags', postController.getTags, ()=>{console.log("fine get tags")})

//show
router.get('/:id', existsId, postController.show, (req, res, next) => {
    //console.log(res.data);
    console.log('Fine show');
    //res.json(res.data);
})
//store
router.post('/', checkInput,  postController.store,() => {
    console.log('Fine store');
})
//update
router.put('/:id', existsId, checkInputUpdate,  postController.update,() => {
    console.log('Fine update');
})
//modify
router.patch('/:id', existsId, checkVoid, postController.modify,() => {
    console.log('Fine modify');
})
//destroy
router.delete('/:id', existsId, postController.destroy,() => {
    console.log('Fine destroy');
})



module.exports = router;