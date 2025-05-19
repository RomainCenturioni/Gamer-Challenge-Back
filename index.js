import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from 'cors';
import { router } from './src/routers/index.router.js';
import cookieParser from 'cookie-parser';


console.log(process.env.NODE_ENV);
console.log("PG_URL:", process.env.PG_URL);
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://hugocastejon-server.eddi.cloud", "http://localhost:8443"],
    credentials: true,
  }),
);

app.use(express.json());

app.use(router);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
