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

// console.log(menu);
// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const main = async () => {
  let loop = true;
  while (loop) {
    try {
      const selection = await enquiry(menu);
      if (selection.menu === "Quit") {
        loop = false;
      } else {
        const response = await menuController(selection.menu);
        console.table(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

main();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
