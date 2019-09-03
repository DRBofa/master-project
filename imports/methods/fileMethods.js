import { Meteor } from "meteor/meteor";

const fs = require("fs");
// const config = require("../../doc/customers.json");
// export class MasterFile {
//   static insert() {
//     try {
//       const jsonString = fs.readFileSync("/doc/customers.json");
//       const customer = JSON.parse(jsonString);
//       console.log(customer);
//     } catch (err) {
//       console.log(err);
//       return;
//     }
//   }
// }
export const insertFile = new ValidatedMethod({
  name: "insertUpdate",
  validate: null,
  run() {
    let arr = {
      name: "Bona",
      age: 20
    };
    if (Meteor.isServer) {
      const data = JSON.stringify(arr);
      try {
        fs.writeFileSync("../../doc/customers.json", data, "utf-8");
      } catch (e) {
        alert("Failed to save the file !");
      }
    }
  }
});
