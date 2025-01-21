const express = require('express')
const fs= require('fs')
const tourController = require('./../controllers/tourControllers');

const router = express.Router();

router.param('id',tourController.checkid);
   


router
     .route('/')
     .get(tourController.getalltours)
     .post(tourController.checkbody,tourController.cretetour);
router
    .route('/:id')
    .get(tourController.getonetour)
    .patch(tourController.updatetour)
    .delete(tourController.deletetour);

module.exports=router;