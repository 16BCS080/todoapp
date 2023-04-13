const express = require('express');
const port = 3001; 
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

const db = require('./db');
const routers = require('./routers');

routers(app);

db.on('error', () => { 
  console.log('connection failed');
});

db.once('open',  () => { 
  console.log('mongo db connected');
  app.listen(port, () => { console.log(`server started ${port}`); });
});

