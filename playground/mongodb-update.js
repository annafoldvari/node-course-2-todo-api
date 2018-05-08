//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to coonect to MongoDB server");
  }
  console.log("Connected to MongoDB server.");

db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5af1b8dcdd24ca0e71c92e29")
}, {
    $set: {
       completed: true
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});
  //db.close();
});