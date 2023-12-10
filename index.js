const express = require("express")
const path = require("path")

const app = express()
const port = process.env.PORT || "8000"

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.render("index", { title: "Home", isHeader: false })
})
app.get("/about", (req, res) => {
  res.render("about", { title: "About", isHeader: true, page: "about" })
})
app.get("/works", (req, res) => {
  res.render("works", { title: "Works", isHeader: true, page: "works" })
})
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})
