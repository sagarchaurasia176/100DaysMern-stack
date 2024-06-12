const postSchemaData = require("../model/PostSchema");
// post controller apply here so we get
exports.PostController = async (req, res) => {
  try {
    const { post, author } = req.body;
    const postCreated = await postSchemaData.create({ post, author })
    res.status(200).json({
      success: true,
      data: postCreated,
      messagae: "like post",
    });
  } catch {
    res.status(500).json({
      success: false,
      data: "error in like controller",
      messagae: "not like post",
    });
  }
};
