const Post = require("../models/post");
const Contacts = require("../models/contacts");
const createPath = require("../helpers/create_path");

const getContacts = ("/contact", (req, res) => {
    const title = "Contacts";
    Contacts.find()
      .then((contacts) => res.render(createPath("contact"), { contacts, title }))
      .catch((error) => {
        console.log(error);
        res.render(createPath("error"), { title: "Error" });
      });
  });

  module.exports =  {getContacts};