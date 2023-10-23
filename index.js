const express = require("express")
const PORT = 3000;
const app = express();

app.get('/', (req, res)=>{
  res.json([{
    id:1,
    name:"qazsim"
  },
{
  id:2,
  name:"game"
}
])
})

app.listen(PORT, ()=>console.log(`Server running at http://localhost:${PORT}/`))

// const http = require('http');


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });
