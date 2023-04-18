const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const {Schema} = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/st', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
  console.log('Успешное подключение')
})
mongoose.connection.on('error',()=>{
  console.log('Не удалось подключиться')
})

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});
const User = mongoose.model('User', userSchema);

const themeSchema = new mongoose.Schema({
  name: String,
});
const Theme = mongoose.model('Theme', userSchema);

const messageSchema = new mongoose.Schema({
  text: String,
  user_id:[{type:Schema.Types.ObjectId,ref:'User'}],
  theme_id:[{type:Schema.Types.ObjectId,ref:'Theme'}]
});
const Message = mongoose.model('Message', messageSchema);

app.get('/themes', async (req, res) => {
 const themes = await Theme.find({})
  res.send(themes)
});
app.get('/user', async (req, res) => {
  const users = await User.find({})
  res.send(users)
});


app.post('/users',  (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });


    user.save().then(()=>{
      res.send({_id:user.id})
    }).catch((err)=>{
      console.log(err);
    })


});

app.post('/messages',  (req, res) => {
  const message = new Message({
    text: req.body.text,
    user_id:req.body.user_id,
    theme_id:req.body.theme_id

  });

  message.save().then(()=>{
    console.log('message_save')
  }).catch((err)=>{
    console.log(err);
  })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
