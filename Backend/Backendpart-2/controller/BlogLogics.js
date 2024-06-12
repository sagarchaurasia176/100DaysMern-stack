const  BlogSchema  = require("../model/BlogSchema");
exports.BlogLogics = async (req, res) => {

  try {
    const { title, description } = req.body;
    const dataPass = await BlogSchema.create({ title, description });

    res.status(200).json({
      success: true,
      data: dataPass,
      message: "your detailed stored",
    });
  }
     catch {
      res.status(500).json({
      success: false,
      data: "error in the connection ",
      message: "your detailed not  stored",
    });
  }
};
