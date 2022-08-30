import express, { Express, Request, Response } from 'express';
import { getInvoice, setInvoice } from './src/handlers/invoices'

const app: Express = express();
const port = 3000;

const bodyParser = require('body-parser')

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// auth

app.get('/invoices/:id', getInvoice);
app.post('/invoices', setInvoice);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});