import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("connected to mongodb");
}).catch((err)=>{
  console.log("failed to connect to mongodb");
  console.log("Error:"+err.message);
})

const app = express();

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
