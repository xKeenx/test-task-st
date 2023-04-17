const express =require ("express")
const cors = require( "cors");
const bodyParser = require ("body-parser");
const mongoose = require ('mongoose')
const path = require ("path")
const  config = require ( '../config/db')
const app = express();
const User = require ('./models/user')
const router = express.Router();
const jsonParser = express.json();

const port = 3000;



app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'public')))


mongoose.connect(config.db,{useNewUrlParser:true,useUnifiedTopology:true})

mongoose.connection.on('connected',()=>{
  console.log('Успешное подключение')
})
mongoose.connection.on('error',()=>{
  console.log('Не удалось подключиться')
})


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
  next();
});
app.post("/", jsonParser, function (request, response) {

  // если не переданы данные, возвращаем ошибку
  if(!request.body) return response.sendStatus(400);

  // получаем данные
  let name = request.body.name;
  let email = request.body.email;
  let phone = request.body.phone
  // имитируем некоторую обработку данных, например, изменим значение userage

  // отправка данных обратно клиенту
  response.json({"name": name, "email": email,"phone":phone});
});


app.listen(port,()=>{
  console.log('server run port' + port)
})
