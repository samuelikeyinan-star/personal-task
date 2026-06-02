import dotenv from "dotenv";
import express from "express";
// step one: import express framework after installation

import dns from "dns";
import mongoose from "mongoose"; // step-9: Import mangoose

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import cors from "cors";

app.use(cors());

const app = express(); //step-two: active express and put in a container called app
dotenv.config();

const port = 2100; // step-three: Define the port number for the server. dont use this same port number on your laptop.

import taskRouter from "./routes/taskRouter";
app.use(express.json());

app.use("/api/task", taskRouter);
// step 4: go to package.json under the script and put "dev": nodemon app.ts to allow npm run dev work

// step-6: coNnect to mangoDB
// step-7: to connect to mongodb first install mangoose
//  step-8: listen to both the database and server together
const start = async () => {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log("Database connect successful");

  app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
  });
};
start();

// step 5: listen to the server after typing npm run dev

// samuelikeyinan_db_user
// vGmnGNRr9jfqx1Cr
// mongodb+srv://samuelikeyinan_db_user:vGmnGNRr9jfqx1Cr@cluster0.u6lokq2.mongodb.net/?appName=Cluster0
// mongodb+srv://
//  server file: this is where you run your server and connect your database ==> the model file
//  model files: this is used to define our data structure that will enter our database ==> from model file we go to the ==> controller file
//  controller files(business logic) : this file is used to define what happens between request and response. ==> from the controller file we go the route files
//  Routes files
