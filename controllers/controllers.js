const Person = require("../model/person");

//---------------------------------------
// Create and Save a Record of a Model:
//---------------------------------------
const save = async function (req, res) {
  try {
    const newPerson = new Person({
      ...req.body,
    });
    await newPerson.save();
    res.send({ msg: "person added" });
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------
// Create Many Records with model.create()
//---------------------------------------
const create = async function (req, res) {
  try {
    await Person.create(req.body);
    res.status(200).send({ msg: "persons added" });
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------
//Use model.find() to search Your Database
//---------------------------------------
const findPerson = async (req, res) => {
  try {
    const findPerson = await Person.find({ name: req.body.name });
    res.send(findPerson);
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------
//Use model.findOne() to Return a Single Matching Document from Your Database
//---------------------------------------
const findfavoritesFood = async (req, res) => {
  try {
    const findPerson = await Person.find({
      favoriteFoods: req.body.favoriteFoods,
    });
    res.send(findPerson);
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------
//Use model.findById() to search Your Database By _id
//---------------------------------------
const findOne = async (req, res) => {
  try {
    const onePerson = await Person.findOne({ _id: req.params.id });
    res.send(onePerson);
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------
//Perform Classic Updates by Running Find, Edit, then Save
//---------------------------------------
const update = async function (req, res) {
  const variable = "hamburger";
  await Person.update(
    { _id: req.params.id },
    { $push: { favoriteFoods: variable } }
  ).exec();
  res.status(200).send({ msg: "hamburger added" });
};

//---------------------------------------
//Perform New Updates on a Document Using model.findOneAndUpdate()
//---------------------------------------
const findOneAndUpdate = async (req, res) => {
  try {
    const onePerson = await Person.findOneAndUpdate(
      { name: req.body.name },
      { $set: { age: 20 } },
      { new: true }
    );
    res.send(onePerson);
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------
//Delete One Document Using model.findByIdAndRemove
//---------------------------------------
const findByIdAndRemove = async (req, res) => {
  try {
    const existPerson = await Person.findOne({ _id: req.params.id });
    if (existPerson === null) {
      return res.status(400).send({ msg: "person already deleted" });
    }
    const result = await Person.findByIdAndRemove({ _id: req.params.id });
    res.send({ msg: "person successfully deleted" });
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------
//MongoDB and Mongoose - Delete Many Documents with model.remove()
//---------------------------------------
const remove = async (req, res) => {
  try {
    const result = await Person.remove({ name: req.body.name });
    res.send({ msg: "persons successfully deleted" });
  } catch (error) {
    console.log(error);
  }
};

//---------------------------------------
//Chain search Query Helpers to Narrow search Results
//---------------------------------------
const search = async (req, res) => {
  try {
    //const findPersons = await Person.find({"favoriteFoods" : {$in : "test1"}})
    //const findPersons = await Person.find( { favouriteFoods: "test1" } )
    //const findPersons = Person.find({ favouriteFoods: "test1" }).sort({name : 1}).limit(2).select("-age").exec()
    
    //res.status(200).send(findPersons);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
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
};
