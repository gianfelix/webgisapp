require("dotenv/config");
const express = require("express");
const cors = require("cors");
const { join } = require("path");
const path = require("path");
const db = require("../models");
// db.sequelize.sync({ alter: true });

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors(
    {
        origin: [
            process.env.WHITELISTED_DOMAIN &&
            process.env.WHITELISTED_DOMAIN.split(","),
        ],
    }
));

app.use(express.json());

//Check if server is running
app.get("/", (req, res) => {
    res.send("Server is running");
});

// #REGION API ROUTES
// ROUTES 1: menjalankan AuthRouter
const {
    authRouter
} = require("./routers");
app.use("/api/auth", authRouter);

// ROUTES 2: Data
// 
//

app.use("/public", express.static(join(__dirname, "../public")));


// Not Found
app.use((req, res, next) => {
    if (req.path.includes("/api/")) {
        res.status(404).send("Not Found")
    } else {
        next();
    }
})

// ERROR
app.use((err, req, res, next) => {
    if (req.path.includes("/api/")) {
        console.error("Error : ", err.stack);
        res.status(500).send("Error !");
    } else {
        next();
    }
});

//#endregion
app.listen(PORT, (err) => {
    if (err) {
        console.log(`ERROR: ${err}`);
    } else {
        console.log(`APP RUNNING at ${PORT} ✅`);
    }
});