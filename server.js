if (process.env.NODE_ENV!='production'){
    require('dotenv').config();
}
const express=require('express')
const app=express()
const expressLyouts=require('express-ejs-layouts')
const indexRouter=require('./routes/index')
const mongoose=require('mongoose');

app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')

app.use(expressLyouts)
app.use(express.static('public'))

app.use('/',indexRouter)

mongoose.connect(process.env.DATABASE_URL)
const  db=mongoose.connection
db.once('open',()=>console.log('connected to mongoose'))

app.listen(process.env.PORT || 3000)