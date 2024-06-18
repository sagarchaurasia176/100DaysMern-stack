// schema here so we get,
const userBlogsData = require("../model/userBlogSchema");
// export the user blog api for create the db into the mongo
exports.userBlogsApi = async (req, res) => {
  try {
    // request from the title , descriptions
    const { title, description } = req.body;
    //now  start to create the db here, so we get
    const dataCreate = await userBlogsData.create({title , description});
    res.status(200).json({
      success: true,
      data: dataCreate,
      message: "data store into the db",
    });
  } catch {
    res.status(500).json({
      success: false,
      data: "not stored into the db",
      message: "internal error in blogAPI page ! contact to admin panel",
    });
  }
};

