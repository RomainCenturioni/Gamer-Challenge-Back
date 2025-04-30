import express from 'express';
import cors from 'cors';
import { router } from './src/routers/index.router.js';

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:5174',
      'http://127.0.0.1:5174',
    ],
  }),
);

app.use(express.json());

app.use(router);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
