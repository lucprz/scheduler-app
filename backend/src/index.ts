import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const app: Application = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  try {
    res.json({ Message: 'Welcome to the Node Server' });
  } catch (error) {
    console.error(error);
    res.json({ Error: error });
  }
});

app.listen(port, () => {
  try {
    console.log('Connected to Database');
  } catch (error) {
    console.error(error);
  }
  console.log(`Server is ON at http://localhost:${port}`);
});
