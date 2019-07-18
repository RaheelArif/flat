let express = require("express");
let server = express();
let bodyparser = require("body-parser")
let expressSession = require("express-session");
let passport = require("passport")
require("./config/db/db-config")
server.use(bodyparser.urlencoded({ extended: true }));
server.use(bodyparser.json())
server.use(
  expressSession({
    secret: "itsnot&@#@#$#@$for)#@432you",
    resave: false,
    saveUninitialized: false
  })
);
server.use(passport.initialize());
server.use(passport.session());
server.use(express.static("./build"));
server.use("/static/", express.static("./uploads"));

let propertyRoutes = require("./routes/property-routes");
server.use("/property", propertyRoutes);

let userRoutes = require("./routes/user-routes");
server.use("/user", userRoutes);

let bidsRoutes = require("./routes/bid-routes");
server.use("/bids", bidsRoutes);

let messageRoutes = require("./routes/messages-routes");
server.use("/messages", messageRoutes);

server.get("/*", (req, res) => {
  res.sendFile(__dirname+"/build");
});
server.listen( process.env.PORT || 900, console.log("server running on port 900"));