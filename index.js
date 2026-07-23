import dotenv from "dotenv";

dotenv.config({
  path: "./.env"
});

let myusername = process.env.myname

console.log("value:", myusername);
