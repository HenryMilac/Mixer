import express, { json } from "express";
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(json());
export default app;