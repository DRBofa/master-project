var PouchDB = require("pouchdb-browser");
var db = new PouchDB("users");
var remoteCouch = false;

export class User {
  // ----------------insert-------------------
  static insert(doc) {
    let data;
    doc._id = new Date().toISOString();
    db.put(doc, function callback(err, result) {
      if (!err) {
        return result;
      } else {
        console.log(err);
      }
    });
    return data;
  }

  // ----------------find-------------------

  static async find() {
    let data = await db.allDocs(
      { include_docs: true, descending: true },
      function(err, doc) {
        return doc.rows;
      }
    );
    return data.rows;
  }

  // ----------------delete-------------------

  static delete(user) {
    db.remove(user);
  }

  // ----------------update-------------------

  static update(user) {
    db.put(user);
  }

  // ----------------destroy-------------------

  static destroy() {
    let data = db
      .destroy()
      .then(function(response) {
        return "success";
      })
      .catch(function(err) {
        console.log(err);
      });
    return data;
  }
}
