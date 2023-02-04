import express, { Express, Request, Response } from 'express';
import axios from 'axios';
const app: Express = express();
import cors from 'cors';

app.use(cors())
app.get('/', async (req: Request, res: Response) => {
  res.send('Ok')
});

app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${3000}`);
});