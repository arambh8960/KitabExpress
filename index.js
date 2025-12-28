import express from 'express';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';
import cartRoute from "./route/cart.route.js";

const app = express();
import dotenv from 'dotenv';
dotenv.config();
//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

const URI=process.env.MongoDBURI;



//connect to mongodb
try{
  await mongoose.connect(URI);
  console.log("Connected to MongoDB");

}catch(error){
  console.log("Error:",error);

}
//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.use("/cart", cartRoute);



app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});