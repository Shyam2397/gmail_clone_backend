import express from "express";
import Email from "../model/email.js";

const routes = express.Router();

routes.post("/save", (req, res) => {
  try {
    const newemail = Email(req.body);
    newemail.save();

    res.status(201).send("Email saved successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default routes;
