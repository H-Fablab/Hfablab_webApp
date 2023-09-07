require('dotenv').config()
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
app.use(express.static('./public'))

const port = process.env.PORT || 3000 ; 

const pagesRoutes = require("./routes/pages");
const userRoutes = require("./routes/user");

app.engine('hbs', exphbs.engine({ 
    extname: '.hbs'
}))
app.set('view engine', 'hbs')



app.use("/", pagesRoutes);
app.use("/", userRoutes);



app.listen(port, ()=>{
    console.log(`App running at http://localhost:${port}`)
})

