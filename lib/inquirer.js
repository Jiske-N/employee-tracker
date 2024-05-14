const inquirer = require("inquirer");

const enquiry = async (input) => {
  try {
    const response = await inquirer.prompt(input);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = enquiry;
