"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express_1 = require("express");
var conn_1 = require("./db/conn");
var app = (0, express_1.default)();
var cors = require('cors');
var cookieParser = require("cookie-parser");
var PORT = process.env.PORT || 8080;
var corsOptions = {
    origin:"https://backend.resourceful.tips" ,
    credentials: true,
};
app.use(express_1.default.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express_1.default.static("./public"));
var userRoutes = require('./routes/userRoutes');
var resourcesRoutes = require('./routes/resourcesRoutes');
(0, conn_1.connectToDatabase)()
    .then(function () {
    app.use("/users", userRoutes);
    app.use("/resources", resourcesRoutes);
    app.listen(PORT, function () {
        console.log("Server started at http://localhost:".concat(PORT));
    });
})
    .catch(function (error) {
    console.error("Database connection failed", error);
    process.exit();
});
