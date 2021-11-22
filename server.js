const express = require('express');
const app = express();
const port = 3000;
const email = require('../한전KDN/controllers/user')

app.get('/login',(req,res) =>{
  res.send("응답");
  
})




app.listen(port, () => { // 서버 대기만드는 구문
  console.log(`서버 켜졌어! ${port}`)
})
