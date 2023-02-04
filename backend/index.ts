import express, { Express, Request, Response } from 'express';
import axios from 'axios';
const app: Express = express();
import cors from 'cors';
app.use(cors())
const urls = [
  "https://api.agify.io/?name=",
  "https://api.genderize.io/?name=",
  "https://api.nationalize.io/?name=",
];

app.get('/', async (req: Request, res: Response) => {
  const name = req.query.name;
  try {
    const age = await (await axios.get(urls[0] + name)).data;
    const gender = await (await axios.get(urls[1] + name)).data;
    const nationality = await (await axios.get(urls[2] + name)).data;
    res.json({
      name: name,
      age: age.age,
      gender: gender.gender,
      nationality: nationality.country[0]?.country_id,
      dateSent: new Date().toLocaleString(),
    })
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${3000}`);
});