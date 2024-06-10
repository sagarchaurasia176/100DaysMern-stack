// link with the  controller to routes so we get
const express = require('express');
const router = express.Router();
// import the controller here so we get
const {userBlogsApi} = require('../controller/userBlogApi')
// apply the routers here so we get
router.get('/userBlogApi' , userBlogsApi);
module.exports = router;