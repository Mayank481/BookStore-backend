const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = require('../model/user.model');
let userdata = null;

passport.use(
  new LocalStrategy((email, password, done) => {

    user.findOne({ Email: email, Password: password }, (err, data) => {

      if (data) {
        return done(null, data);
      } else {

        return done(null, false);
      }
    });
  })
);
router.post('/login', passport.authenticate('local'), (req, res) =>{
   userdata = req.user

  res.send({ success: true, user: req.user })}
);


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const data = await user.findById(id);
    done(null, data);
  } catch (error) {
    done(error, null);
  }
});

router.get('/login/success', (req, res) => {  
  if (userdata) {
    res.send({ success: true, user: userdata});
  } else res.send({ success: false });

});

router.get('/logout', (req, res) => {
  req.session = null;
  userdata = null;
  res.redirect('http://localhost:3000/');
});



module.exports = router;