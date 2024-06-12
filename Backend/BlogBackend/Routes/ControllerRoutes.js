const exprees = require("express");
const router = exprees.Router();
// imp controller here
const { BlogModel } = require("../controller/BlogModel");
const { LikeController } = require("../controller/LikeController");
const { PostController } = require("../controller/PostController");
// create the router with the rq so we get

router.post("/BlogModel", BlogModel);
router.post("/Like", LikeController);
router.post("/Posts", PostController);

module.exports = router;
