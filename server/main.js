import { Meteor } from "meteor/meteor";
import fs from "fs";
Meteor.startup(() => {
  import "../imports/methods/fileMethods";
  import "../imports/methods/customerMethods";
  // code to run on server at startup
  Meteor.methods({
    insertDoc(data) {
      if (Meteor.isServer) {
        const json = JSON.stringify(data, null, 2);
        let writer = fs.createWriteStream("../customers.json");
        console.log(writer.write(json));
      }
    },
    findDoc() {
      let rawdata = fs.readFileSync("../customers.json");
      let student = JSON.parse(rawdata);
      console.log(student);
      return student;
    }
  });
});
