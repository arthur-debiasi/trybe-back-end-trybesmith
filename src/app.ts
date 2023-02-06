import express, { Request, Response } from 'express';
import productsRouter from './routers/productsRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.get('/', async (req: Request, res: Response) => res.status(200).json('olá'));

export default app;
