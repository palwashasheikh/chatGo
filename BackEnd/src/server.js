
// const express = require('express');

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import  messageRoutes from "./routes/message.route.js"

dotenv.config();
const app = express();

const port = process.env.port  || 3000;
console.log(port);

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);



app.listen(port,() => console.log("server is running on port: "+ port ));  