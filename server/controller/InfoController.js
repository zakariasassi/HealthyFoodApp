const Info = require("../model/Info");

exports.addnewinfo = async (req, res) => {
  const { title, description } = req.body;
  await Info.create({ title, description })
    .then(() => res.status(200).json({ msg: "تمت عملية الاضافة بنجاح" }))
    .catch((err) => console.log(err));
};

exports.getallinfo = async (req, res) => {
  await Info.findAll()
    .then((resulte) => {
      res.status(200).json({ info: resulte });
    })
    .catch((err) => {
      console.log(err);
      res.status(501);
    });
};
