const express = require("express");
const router = express.Router();

// it comes in the module form here
const { BlogLogics } = require("../controller/BlogLogics");

router.post("/BlogLogics", BlogLogics);
module.exports = router;
