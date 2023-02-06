import express, { Request, Response } from 'express';
import productsRouter from './routers/productsRouter';
import ordersRouter from './routers/ordersRouter';
import usersRouter from './routers/usersRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

app.get('/', async (req: Request, res: Response) => res.status(200).json('olá'));

export default app;