// const { Pool } = require("pg");
const express = require("express");
const app = express();
const enquiry = require("./lib/inquirer");
const {
  menu,
  addDepartment,
  addRole,
  addEmployee,
} = require("./lib/prompts.js");
const menuController = require("./lib/controller.js");
const PORT = process.env.PORT || 3467;
const pool = require("./lib/pool.js");
const viewQuery = require("./lib/queryActions.js");

pool.connect();

// console.log(menu);
// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const main = async () => {
  try {
    // prompt user with menu
    // console.log(typeof menu, menu);
    const selection = await enquiry(menu);
    // console.log(1, typeof selection.menu, selection.menu);
    const queryContent = await menuController(selection.menu);
    // console.log(2, typeof queryContent, queryContent);
    viewQuery(queryContent);
  } catch (error) {
    console.log(error);
  }
};

main();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
