import express, { Response, Request } from 'express';

const app = express();
const port = 8080;

app.get('/', (_req: Request, res: Response) => {
  res.send('Server is Running!');
});

app.listen(port, () => {});
