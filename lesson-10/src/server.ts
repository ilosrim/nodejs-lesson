import express from "express";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

export default app;
