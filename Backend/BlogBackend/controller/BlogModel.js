const blogSchema = require("../model/blogSchema");
exports.BlogModel = async (req, res) => {
  try {
    const { title , author } = req.body;
    //crete the db once
    const dbCreate = blogSchema.create({ title, author });
    res.status(200).json({
      success: true,
      data: dbCreate,
      message: "data stored successfully !",
    });
  } catch {
      res.status(500).json({
      success: false,
      data: "error in the db page",
      message: "data not stored successfully !",
    });
  }
};
