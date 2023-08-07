require("dotenv").config()
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
app.use(express.static('./public'))

const pagesRoutes = require("./routes/pages");
const userRoutes = require("./routes/user");

app.engine('hbs', exphbs.engine({ 
    extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.use("/", pagesRoutes);
app.use("/", userRoutes);


const port = process.env.PORT || 3000 ; 
app.listen(port, ()=>{
    console.log(`App running at port listening on port ${port}`)
})