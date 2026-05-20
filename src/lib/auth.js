import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/suncart";
const client = new MongoClient(uri);
const db = client.db(); 

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  }
});
