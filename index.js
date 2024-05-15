const enquiry = require("./lib/inquirer");
const { menuP } = require("./lib/prompts.js");
const menuController = require("./lib/controller.js");

// main function which controls selection menu
const main = async () => {
  // loop funtionality while true
  let loop = true;
  while (loop) {
    try {
      // prompt user with menu options
      const selection = await enquiry(menuP);

      // check to continue loop
      if (selection.menu === "Quit") {
        loop = false;
      } else {
        // send response to controller to execute
        const response = await menuController(selection.menu);

        // display final product. not all responses are tables but display fine nonetheless
        console.table(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

main();
