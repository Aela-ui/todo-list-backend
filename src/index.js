import express from "express";
import {json} from "express";
import router from "./routes/router.js";
import cors from "cors";

const app = express();

app.use(json());

app.use(cors());

app.use("/", router);

app.listen(3333,()=>{
   console.log("Server running at 3333"); 
});