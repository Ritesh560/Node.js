const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  let path = "./"
  switch (req.url) {
    case "/":
      path += "list.html"
      break
    case "/3":
      path += "list.html"
      break
  }

  res.setHeader("content-Type", "text/html")

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })
})

server.listen(3000, "localhost", () => {
  console.log("Listening requestes for localhost:3000")
})
