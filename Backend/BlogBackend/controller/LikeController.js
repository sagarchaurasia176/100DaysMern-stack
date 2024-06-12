const likeSchema = require("../model/LikeSchema");
exports.LikeController = async (req, res) => {
  try {
    // destruct from the schema and then create the db
    const { post, author } = req.body;
    //add the data first
    const likeData = await likeSchema.create({ post, author });
    res.status(200).json({
      success: true,
      data: likeData,
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
