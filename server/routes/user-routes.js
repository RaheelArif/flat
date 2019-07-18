let express = require("express");
let userRoute = express.Router();
let user = require("../config/db/userModel");
const bcrypt = require('bcrypt');
let passport = require("../config/passport/passport-config")
const saltRounds = 10;
userRoute.post("/register", (req, res) => {
    user.findOne({ email: req.body.email }, (err, User) => {
        if (!err)
            if (User) {
                res.json({ success: false, used: true })
            }
            else {
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    if (!err && hash) {
                        let newuser = new user(req.body);
                        newuser.password = hash
                        newuser.save((err, user) => {
                            if (err)
                                res.json({ success: false })
                            else
                                res.json({ success: true, })
                        })
                    }
                });
            }
    })
})
userRoute.post("/login", (req, res, next) => {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.json({ success: false }); }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            res.json({ success: true, user: user });
        });
    })(req, res, next);
})

userRoute.post("/logout", (req, res) => {
    req.logout();
    res.json({ success: true })
})
userRoute.post("/authenticate", (req, res) => {
    if (req.isAuthenticated())
        res.json({ success: true, user: req.user });
    else
        res.json({ success: false, });
})

module.exports = userRoute;