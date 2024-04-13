// 1. npm create vite@lates BE -- --template vanilla
// 2. cd BE
// 3. npm i
// 4. npm init
// 5. tạo 1 link git mới: git repository: https://github.com/La-Tien/green-trees.git
// 6. npm i express
// 7. 

const express = require('express')

const app = express()
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


