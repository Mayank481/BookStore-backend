require('dotenv').config();
// const cookiesession = require('cookie-session');
const session = require('express-session')
const cors = require('cors');
const express = require('express');
const passport = require('passport');
const app = express();

const connectDatabase = require("./databse");

// const cookie = {
//     secret: 'Session Secret',
//     resave: true,
//     saveUninitialized: true,
//     maxAge: 24 * 60 * 60 * 100,
//     secure: true,
//     httpOnly: true,
//     sameSite: 'none'
//   }

//database connection
connectDatabase();

app.use(
    cors({
      origin: 'http://localhost:3000',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    })
  );
  
  app.set('trust proxy', 1);
  // app.use(cookieSession(cookie));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(session({secret:"secret",resave:true,saveUninitialized:true}));

  app.use(passport.initialize());
  app.use(passport.session());
  

app.use('/api',require('./routes/index'))


app.listen(process.env.PORT,() => {
    console.log(`server is running http://localhost:${process.env.PORT}`);
})