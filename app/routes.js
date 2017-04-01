//Telling our project that we're using the express framework
var express = require('express');
var router = express.Router();
var postController = require('./controllers/postController');

//==============================================================//
//============All our routing should be handled here============//
//==============================================================//
router.get('/post/search', postController.searchPosts);
router.get('/post/filter', postController.filterPosts);
router.get('/post/searchAndfilter', postController.searchAndFilterPosts);
router.get('/post',postController.viewPostsOnly);
router.get('/postSign',postController.viewPostsAndInfo);
//Export router.
module.exports = router;
