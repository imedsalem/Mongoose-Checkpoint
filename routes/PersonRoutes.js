const express = require("express");
const {
  save,
  create,
  findPerson,
  findfavoritesFood,
  findOne,
  update,
  findOneAndUpdate,
  findByIdAndRemove,
  remove,
  search,
} = require("../controllers/controllers");

const router = express.Router();

//---------------------------------------
// Create and Save a Record of a Model:
//---------------------------------------
router.post("/add", save);

//---------------------------------------
// Create Many Records with model.create()
//---------------------------------------
router.post("/addMany", create);

//---------------------------------------
//Use model.find() to Search Your Database
//---------------------------------------
router.get("/findPerson", findPerson);

//---------------------------------------
//Use model.findOne() to Return a Single Matching Document from Your Database
//---------------------------------------
router.get("/favoritesFood", findfavoritesFood);

//---------------------------------------
//Use model.findById() to Search Your Database By _id
//---------------------------------------
router.get("/:id", findOne);

//---------------------------------------
//Perform Classic Updates by Running Find, Edit, then Save
//---------------------------------------
router.post("/update/:id", update);

//---------------------------------------
//Perform New Updates on a Document Using model.findOneAndUpdate()
//---------------------------------------
router.get("/", findOneAndUpdate);

//---------------------------------------
//Delete One Document Using model.findByIdAndRemove
//---------------------------------------
router.delete("/:id", findByIdAndRemove);

//---------------------------------------
//MongoDB and Mongoose - Delete Many Documents with model.remove()
//---------------------------------------
router.delete("/", remove);

//---------------------------------------
//Chain Search Query Helpers to Narrow Search Results
//---------------------------------------
router.get("/search", search);

module.exports = router;
