import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('OK!');
});

try {
  app.listen(PORT);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('Error starting server:', error);
}
