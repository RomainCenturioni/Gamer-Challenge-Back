import express from "express";
import cors from "cors";
import { router } from "./src/routers/index.router.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:5174',
      'http://127.0.0.1:5174',
      'http://localhost:8443'
    ],
    credentials: true,
  }),
);

app.use(express.json());

app.use(cookieParser());

app.use(router);

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
