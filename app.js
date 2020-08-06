const express = require("express")
const router = require('./routes/routes');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(router);



mongoose.connect('mongodb://localhost:27017/newRest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then((conn)=>{
      console.log('Database Connection done !')
      app.listen(4000, console.log('Server started at Port 4000'));
  })
  .catch( err => console.log('Dosenot Connected to DataBase ! sory '))



