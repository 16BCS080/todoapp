const Mongoose = require('mongoose');
const mongourl = `mongodb://127.0.0.1:27017/myapp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0`;
const options = {
  useNewUrlParser: true,
};
Mongoose.connect(mongourl,options).then(
  () => { console.log('server success connection'); },
  err => { console.log(err); }
);

module.exports = Mongoose.connection;