const express = require('express')
const userController = require('./../controllers/userControllers')

const router=express.Router();


router
    .route('/')
    .get(userController.getallusers)
    .post(userController.createuser)

router
    .route('/:id')
    .get(userController.getoneuser)
    .patch(userController.updateuser)
    .delete(userController.deleteuser)

module.exports=router;