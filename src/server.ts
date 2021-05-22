import express, { Response, Request } from 'express';

const app = express();
const port = 8080;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});
