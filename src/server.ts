// const express = require("express");
// const mongoose = require("mongoose");

import mongoose from "mongoose";
import app from "./app";

const port = 8000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/shoes-mongoose");
    console.log("successfully connect the server!");
    //
    app.listen(port, () => {
      console.log(`shoes-mongoose listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
