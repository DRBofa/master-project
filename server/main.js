import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  import "../imports/methods/fileMethods";
  import "../imports/methods/customerMethods";
  // code to run on server at startup
});
