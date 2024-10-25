// server.js
const express = require("express");
const session = require("express-session");
const app = express();
const UserRouter = require("./routers/UserRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('uploads'));
app.set("view engine", "ejs");

// Session middleware (setup accordingly)
app.use(session({
    secret: "your_secret_key", // Change this to a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

app.use("/user", UserRouter);

app.listen(8000, () => {
    console.log("Listening on port no. 8000");
});
