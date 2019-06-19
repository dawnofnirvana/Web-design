const express = require('express')
const cors = require('cors')
const app = express()


var bodyParser = require('body-parser');
var router = express.Router(); // get an instance of the express Router
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//add listen to 3000
app.listen(3000, function () {
  console.log('Taks planner app service listening on port 3000!')
})
//Set URL
var url = 'mongodb://localhost:27017/marvel';
//Connnect to DB
mongoose.connect(url);
//Connect successfully
mongoose.connection.on('connected',function () {
  console.log('Mongoose connect ' + url + " success");
});



//test 
router.use(function (req, res, next) {
  console.log('Marvel Root');
  next(); // make sure we go to the next routes and don't stop here
});

router.route('/').get(function (req, res) {
    res.send('Marvel Root');
  })


  // Event backend start
  var Event = require('./model/event.js');

  //  post, addevent
  app.post("/addevents",(req, res) => {
    var myData = new Event(req.body);
    console.log(req.body)
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });


  // get, get all events
  router.route('/events').get((req,res,next)=>{
    Event.find().then(documents =>{
      res.status(200).json({
        events:documents
      });
    });
});


//find one events
  app.get("/find", (req, res, next) => {
    Event.findOne(req.body).then(documents => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        events:documents
      });
    });
  });

//Update Events
  app.post('/issues',(req,res,next) => {
    var myData = new Event(req.body);
    Event.findOneAndUpdate(
      {_id:req.body._id},
       myData,(err, event) => {
        if (err)
            console.log(err);
        else
            res.json({message: "Posts fetched successfully!",event});
    })
});

//Find all events
  app.post('/events',(req,res,next)=>{
    Event.find().then(documents =>{
      res.status(200).json({
        events:documents
      });
    });
  }) ;

//find by id
    app.post("/findbyid", (req, res, next) => {
      Event.findOne(req.body).then(documents => {
        res.status(200).json({
          message: "Posts fetched successfully!",
          events:documents
        });
      });
    });


  // delete event
  app.post('/deleteEvent', (req, res) => {
      console.log(req.body)
      Event.findOneAndRemove(req.body)
      .then(item =>{
        res.send("delete something"),
        res.set("notice","good")
      })
      .catch(err => {
        res.status(400).send("error happens");
      });
    });


// get, get all events
  app.get('/events',(req,res,next)=>{
    Event.find().then(documents =>{
      res.status(200).json({
        events:documents
      });
    });
  });

// delete event
app.delete('/deleteEvent', (req, res) => {
    console.log(req.body)
    Event.findOneAndRemove(req.body)
    .then(item =>{
      res.send("delete something")
    })
    .catch(err => {
      res.status(400).send("error happens");
    });
});



  //Save User Data
  var User = require('./model/user.js');
  app.post("/addUser", (req, res) => {
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
      res.send(myData)
  });


  //Update user
  app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
      res.send(myData)
  });



  // Get User All Data
  app.get('/users',(req,res,next)=>{
    User.find().then(documents =>{
      res.status(200).json({
        users:documents
      });
    });
  });

//get user with user email
  app.get('/user/:email', (req, res) => {   
    User.find({'email':req.params.email}).then(documents =>{
      res.status(200).json({
        users:documents
    });
  });
});


//delete a user
app.post('/deleteuser', (req, res) => {
    User.deleteMany(req.body)
      .then(item =>{
        res.send("delete something")
      })
      .catch(err => {
        res.status(400).send("error happens");
      });
  });

//get user
  app.get('/events',(req,res,next)=>{
    Event.find().then(documents =>{
      res.status(200).json({
        events:documents
      });
    });
  }) ;


// delete user
app.delete('/deleteUser', (req, res) => {
  var myData = req.body;
  User.deleteMany(req.body)
  .then(item =>{
  res.send("delete something")
})
  .catch(err => {
  res.status(400).send("error happens");
    });
  });

// const User = require('./model/user');
app.post('/api/user/login', (req, res) => {
    mongoose.connect(url,{ useMongoClient: true }, function(err){
        if(err) throw err;
        User.find({
            email : req.body.email, password : req.body.password
        }, function(err, user){
            if(err) throw err;
            if(user.length === 1){  
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }
             
        })
    });
})
