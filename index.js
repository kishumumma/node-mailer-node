const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyparser.json());

