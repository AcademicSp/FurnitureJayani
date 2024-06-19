import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./Routes/user_routes.js";
dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("connected to mongodb");
}).catch((err)=>{
  console.log("failed to connect to mongodb");
  console.log("Error:"+err.message);
})

const app = express();
const PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

app.use('/api/user',userRouter)